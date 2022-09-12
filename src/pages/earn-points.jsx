// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { NavAccount } from "../components/nav_account"
import { Link } from "gatsby"
import { Reward } from "../components/reward"
import { Voucher } from "../components/voucher"
import { VoucherRedeemed } from "../components/voucher-redeemed"
import { MembershipTable } from "../components/membership-table"
import AsteriskIcon from "../icons/asterisk"
import AsteriskIconBlack from "../icons/asterisk-black"
import * as ProfileModule from "./profile.module.css"

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Mousewheel, HashNavigation } from "swiper"

// import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// step 2: define component
const Profile = () => {
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

  return (
    <Layout>
      <div className="bg_grey">
        <div className="container">
          <div className="row padding_heading">
            <div className="col-12 col-md-5 col-lg-3 bg_white p-5 mb-5">
              <div className="d-flex align-items-center mb-5">
                <div className={ProfileModule.initials}>JS</div>
                <div className="d-flex flex-column">
                  <div className={ProfileModule.customer_name}>
                    <div className="font_grey_medium_3">Hello.</div>
                    <div className="font_xl font_semibold text-uppercase">
                      James Smith
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
                <div className="col-12 col-lg-5 bg_grey_medium_6 line_height_dense text-uppercase d-flex flex-column p-3 mt-4 mt-lg-0">
                  <div className="align-self-center">My Points</div>
                  <div className="align-self-center">
                    <h2 className="mb-0">1,305</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="bg_grey_medium line_height_dense text-center">
                  <div className="container">
                    <div className="row p-5">
                      <div className="col-12 col-md-12 d-flex justify-content-center align-items-center">
                        <h4 className="text-uppercase fst-italic pb-5">
                          How it works
                        </h4>
                      </div>
                      <div className="col-12 col-md-4">
                        <p>
                          <img
                            src="/icons/club_join.png"
                            alt="Join"
                            className="mx-auto"
                          />
                        </p>
                        <h4 className="text-uppercase pb-3 how_it_works">
                          Join
                        </h4>
                        <p>
                          Get 10% off your first purchase when you sign up -
                          it's free!
                        </p>
                      </div>
                      <div className="col-12 col-md-4">
                        <p>
                          <img
                            src="/icons/club_earn.png"
                            alt="Earn"
                            className="mx-auto"
                          />
                        </p>
                        <h4 className="text-uppercase pb-3 how_it_works">
                          Earn
                        </h4>
                        <p>Earn points through small goals or purchases</p>
                      </div>
                      <div className="col-12 col-md-4">
                        <p>
                          <img
                            src="/icons/club_redeem.png"
                            alt="Redeem"
                            className="mx-auto"
                          />
                        </p>
                        <h4 className="text-uppercase pb-3">Redeem</h4>
                        <p>Redeem exclusive rewards!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bg_white pt-4 ps-3 pe-3 d-flex align-items-stretch">
                <VoucherRedeemed
                  heading="Create an account"
                  points="100 points"
                />
                <Voucher
                  heading="Make a purchase"
                  points="2 points per $1 spent"
                />
                <Voucher heading="Leave a product review" points="100 Points" />
                <Voucher heading="Leave a google review" points="100 Points" />
                <Voucher
                  heading="Leave a facebook review"
                  points="100 Points"
                />
                <Voucher heading="Refer a friend" points="100 Points" />
                <Voucher heading="Follow us on instagram" points="100 Points" />
                <Voucher heading="Like us on faceboook" points="100 Points" />
                <Voucher
                  heading="Share our facebook posts"
                  points="50 Points per share"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_grey">
        <div className="container">
          <div className="row row_padding">
            <h2 className="text-uppercase pb-5 d-flex justify-content-center align-items-center">
              <div className="pe-3">
                <AsteriskIconBlack />
              </div>
              Get exclusive with us
              <div className="ps-3">
                <AsteriskIconBlack />
              </div>
            </h2>
            <MembershipTable />
            <div className="text-center pt-5">
              <button className="btn btn-primary-large mb-80">
                Join the club
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default Profile
