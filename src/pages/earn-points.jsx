// step 1: import
import React, { useLayoutEffect, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { NavAccount } from "../components/nav_account"
import { Voucher } from "../components/voucher"
import { VoucherRedeemed } from "../components/voucher-redeemed"
import { MembershipTableCurrent } from "../components/membership-table-current"
import AsteriskIconBlack from "../icons/asterisk-black"
import * as ProfileModule from "./profile.module.css"
import { Link, navigate } from "gatsby"

// for user info
import { getUser } from "../services/auth"
import { useQuery, gql, useMutation } from "@apollo/client"

const GET_CUSTOMER = gql`
  query ($handle: String!) {
    customer(customerAccessToken: $handle) {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
    }
  }
`

// step 2: define component
const Profile = () => {
  useEffect(() => {
    console.log(getUser())
    if (Object.keys(getUser()).length === 0) {
      navigate('/login');
    }
  }, [])
  const [cusdata, setCustomerData] = useState(null)
  const [yotpoData, setData] = useState(null)
  const [yotpoCampaign, setCampaignData] = useState(null)

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap.utils.toArray(".animate").forEach(function (e) {
      gsap.from(e, {
        duration: 0.8,
        ease: "power1.out",
        opacity: 0,
        y: 100,
        scrollTrigger: e,
        onComplete: () => console.log(e),
      })
    })
  })

  useEffect(() => {
    //get yotpo data
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }

    fetch(
      "https://loyalty.yotpo.com/api/v2/customers?customer_email=" +
        cusdata?.customer?.email +
        "&country_iso_code=null&with_referral_code=false&with_history=true&guid=jx9X-MCEhx-re9u7YIbChg&api_key=KYoD7NmQ6FaibkwxyAcHGgtt",
      options
    )
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json")
        const data2 = isJson && (await response.json())

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data2 && data2.message) || response.status
          return Promise.reject(error)
        }

        setData(data2)
        console.log(data2)
      })
      .catch((error) => {
        console.error("There was an error!", error)
      })
    fetch(
      "https://loyalty.yotpo.com/api/v2/campaigns?guid=jx9X-MCEhx-re9u7YIbChg&api_key=KYoD7NmQ6FaibkwxyAcHGgtt&with_status=true&customer_email=" +
        cusdata?.customer?.email,
      options
    )
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json")
        const rData = isJson && (await response.json())

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (rData && rData.message) || response.status
          return Promise.reject(error)
        }

        setCampaignData(rData)
        console.log(rData)
      })
      .catch((error) => {
        //this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error)
      })
  }, [cusdata])

  const token = getUser().token
  useQuery(GET_CUSTOMER, {
    variables: { handle: token },
    onCompleted: (data) => {
      setCustomerData(data)
      console.log(data)
    },
    onError: (error) => {
      return `Error! You have no access to this page: ${error.message}`
    },
  })

  return (
    <Layout>
      <div
        id="swell-customer-identification"
        data-authenticated="true"
        data-email={cusdata?.customer?.email}
        data-id="##customer-id##"
        data-tags="##customer-tags##"
        style={{ display: "none" }}
      ></div>
      <div className="bg_grey">
        <div className="container">
          <div className="row padding_heading">
            <div className="col-12 col-md-5 col-lg-3 bg_white p-5 mb-5">
              <div className="d-flex align-items-center mb-5">
                <div className={ProfileModule.initials}>
                  {cusdata?.customer?.firstName != undefined
                    ? Array.from(cusdata?.customer?.firstName)[0].toUpperCase()
                    : "M"}
                  {cusdata?.customer?.lastName != undefined
                    ? Array.from(cusdata?.customer?.lastName)[0].toUpperCase()
                    : "T"}
                </div>
                <div className="d-flex flex-column">
                  <div className={ProfileModule.customer_name}>
                    <div className="font_grey_medium_3">Hello.</div>
                    <div className="font_lg font_semibold text-uppercase">
                      {cusdata?.customer?.firstName}{" "}
                      {cusdata?.customer?.lastName}
                    </div>
                  </div>
                </div>
              </div>
              <NavAccount />
            </div>
            <div className="col-12 col-md-7 col-lg-9 ps-md-5">
              <div className="row">
                <div className="col-12">
                  <div className="font_grey_medium_3 text-uppercase">
                    M.INT Club /
                  </div>
                  <h3 className="text-uppercase pb-6">Earn Points</h3>
                </div>
              </div>
              <div className="row mb-60">
                {/*
                <div className="col-12 col-lg-5 line_height_dense text-uppercase d-flex p-3 bg_white">
                  <div className="row">
                    <div className="col-3 col-md-3 align-self-end pb-3 pb-md-0">
                      <img src="/icons/club_insider.png" alt="My Tier" />
                    </div>
                    <div className="col-12 col-md-9 d-flex flex-column align-items-center">
                      <div className="align-self-center">My Tier</div>
                      <div className="align-self-center">
                        <h2 className="mb-0">Insider</h2>
                      </div>
                    </div>
                  </div>
                </div>
                */}
                <div className="col-12 col-lg-5 bg_grey_medium_6 line_height_dense text-uppercase d-flex flex-column p-3 mt-4 mt-lg-0">
                  <div className="align-self-center">My Points</div>
                  <div className="align-self-center">
                    <h2 className="mb-0">{yotpoData?.points_balance}</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="bg_grey_medium line_height_dense text-center">
                  <div className="container">
                    <div className="row p-5">
                      <div className="col-12 col-md-12 d-flex justify-content-center align-items-center">
                        <h4 className="text-uppercase pb-5">How it works</h4>
                      </div>
                      <div className="col-12 col-lg-4">
                        <p>
                          <img
                            src="/icons/club_join.png"
                            alt="Join"
                            className="mx-auto"
                          />
                        </p>
                        <h5 className="text-uppercase pb-3 how_it_works">
                          Join
                        </h5>
                        <p className="font_sm">
                          Get 10% off your first purchase when you sign up -
                          it's free!
                        </p>
                      </div>
                      <div className="col-12 col-lg-4">
                        <p>
                          <img
                            src="/icons/club_earn.png"
                            alt="Earn"
                            className="mx-auto"
                          />
                        </p>
                        <h5 className="text-uppercase pb-3 how_it_works">
                          Earn
                        </h5>
                        <p className="font_sm">
                          Earn points through small goals or purchases
                        </p>
                      </div>
                      <div className="col-12 col-lg-4">
                        <p>
                          <img
                            src="/icons/club_redeem.png"
                            alt="Redeem"
                            className="mx-auto"
                          />
                        </p>
                        <h5 className="text-uppercase pb-3">Redeem</h5>
                        <p className="font_sm">Redeem exclusive rewards!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bg_white pt-4 ps-3 pe-3 d-flex ">
                {yotpoCampaign &&
                  yotpoCampaign?.map((r) =>
                    r.status.customer_times_completed > 0 ? (
                      <VoucherRedeemed
                        type={r.type}
                        id={r.id}
                        heading={r.unrendered_title}
                        points={r.reward_text}
                      />
                    ) : (
                      <Voucher
                        type={r.type}
                        id={r.id}
                        heading={r.unrendered_title}
                        points={r.reward_text}
                      />
                    )
                  )}
                {/* <VoucherRedeemed
                  heading="Create an account"
                  points="100 points"
                />
                <Voucher
                  heading="Make a purchase"
                  points="2 points per $1 spent"
                />
                <Voucher heading="Leave a review" points="100 Points" />
                <Voucher heading="Leave a photo review" points="150 Points" />
                <Voucher heading="Refer a friend" points="200 Points" />
                <Voucher heading="Birthday reward" points="200 Points" />
                <Voucher heading="Facebook share" points="100 Points" />
                <Voucher
                  heading="Page visit"
                  points="100 Points"
                  note="Drive traffic to Facebook, Instagram"
                /> */}
              </div>
              <div className="py-3">^ Points expire within one year</div>
              {/*
              <div className="text-center pt-5">
                <a href="/earn-points">
                  <button className="btn btn-primary-large mb-120">
                    Earn Points
                  </button>
                </a>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
      {/*
      <div className="bg_grey">
        <div className="container-fluid">
          <div className="row pt-5">
            <h2 className="text-uppercase p-5 d-flex justify-content-center align-items-center text-center">
              <div className="pe-3">
                <AsteriskIconBlack />
              </div>
              M.INT club tiers
              <div className="ps-3">
                <AsteriskIconBlack />
              </div>
            </h2>
          </div>
        </div>
        <div className="container-membership">
          <MembershipTableCurrent />
        </div>
        <div className="text-center pt-5">
          <a href="/create-account">
            <button className="btn btn-primary-large mb-120">
              Earn Points
            </button>
          </a>
        </div>
      </div>
      */}
    </Layout>
  )
}

// step 3: export
export default Profile
