// step 1: import
import React, { useLayoutEffect, useEffect, useState } from "react"
import { gsap } from "gsap"
import { Link, navigate } from "gatsby"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { NavAccount } from "../components/nav_account"

// import module.css
import * as ProfileModule from "./profile.module.css"

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
  }, [cusdata]);

  const token = getUser().token
  useQuery(GET_CUSTOMER, {
    variables: { handle: token },
    onCompleted: (data) => {
      setCustomerData(data)
      console.log(data)
    },
    onError: (error)=> {
      return `Error! You have no access to this page: ${error.message}`
    }
  })

  return (
    <Layout>
      <div className="bg_grey">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 col-md-6 col-lg-3 bg_white p-5 mb-5">
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
                    {cusdata?.customer?.firstName} {cusdata?.customer?.lastName}
                    </div>
                  </div>
                </div>
              </div>
              <NavAccount />
            </div>
            <div className="col-12 col-md-6 col-lg-9 px-md-5">
              <div className={ProfileModule.content}>
                <div className="row">
                  <div className="col-12">
                    <div className="font_grey_medium_3 text-uppercase">
                      My Account /
                    </div>
                    <h3 className="text-uppercase pb-6">Account Activity</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Activity</th>
                          <th scope="col">Actions</th>
                          <th scope="col">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                      {yotpoData &&
                        yotpoData?.history_items?.map((r) =>
                          (
                            <tr>
                              <td>{r.action}</td>
                              <td>{r.points > 0 ? "+"+r.points : r.points} points</td>
                              <td>{r.date}</td>
                            </tr>
                          )
                        )}
                        {/* <tr>
                          <td>Left a product review</td>
                          <td>+100 points</td>
                          <td>31/05/2022</td>
                        </tr>
                        <tr>
                          <td>Referred a friend - Matthias A</td>
                          <td>+200 points</td>
                          <td>31/05/2022</td>
                        </tr>
                        <tr>
                          <td>Redeemed $2 off Voucher</td>
                          <td>+100 points</td>
                          <td>31/05/2022</td>
                        </tr>
                        <tr>
                          <td>Completed a Purchase</td>
                          <td>+1,063 points</td>
                          <td>31/05/2022</td>
                        </tr>
                        <tr>
                          <td>Left a Google Review</td>
                          <td>+100 points</td>
                          <td>31/05/2022</td>
                        </tr>
                        <tr>
                          <td>Left a Facebook Review</td>
                          <td>+100 points</td>
                          <td>31/05/2022</td>
                        </tr>
                        <tr>
                          <td>Subscribed to M.INT Club</td>
                          <td>+100 points</td>
                          <td>31/05/2022</td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default Profile
