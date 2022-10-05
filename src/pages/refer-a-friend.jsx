// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { NavAccount } from "../components/nav_account"
import * as ProfileModule from "./profile.module.css"

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
            <div className="col-12 col-md-5 col-lg-3 bg_white p-4 mb-5">
              <div className="d-flex align-items-center mb-5">
                <div className={ProfileModule.initials}>JS</div>
                <div className="d-flex flex-column">
                  <div className={ProfileModule.customer_name}>
                    <div className="font_grey_medium_3">Hello.</div>
                    <div className="font_lg font_semibold text-uppercase">
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
                  <h3 className="text-uppercase pb-6">Refer A Friend</h3>
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
                <div className="bg_grey_medium_6 line_height_dense text-center">
                  <div className="container">
                    <div className="row p-5">
                      <div className="col-12 col-md-12 d-flex justify-content-center align-items-center">
                        <h4 className="text-uppercase pb-5">
                          Share the good stuff with your friends.
                          <br />
                          The more you refer, the more you earn!
                        </h4>
                      </div>
                      <div className="col-12 col-lg-6">
                        <p className="refer_a_friend">
                          <img
                            src="/icons/club_share.png"
                            alt="Share"
                            className="mx-auto"
                          />
                        </p>
                        <p className="pb-3">
                          <img
                            src="/icons/1.png"
                            alt="Share"
                            className="mx-auto"
                          />
                        </p>
                        <h4 className="text-uppercase pb-3">Share</h4>
                        <p>
                          Share your referral code with your friends and they
                          get to enjoy&nbsp;
                          <strong>15% off their first purchase</strong>.
                        </p>
                      </div>
                      <div className="col-12 col-lg-6">
                        <p>
                          <img
                            src="/icons/club_earn_points.png"
                            alt="Earn Points"
                            className="mx-auto"
                          />
                        </p>
                        <p className="pb-3">
                          <img
                            src="/icons/2.png"
                            alt="Share"
                            className="mx-auto"
                          />
                        </p>
                        <h4 className="text-uppercase pb-3">Earn Points</h4>
                        <p>
                          You will earn <strong>200 points</strong> after each
                          friend has completed their first order.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bg_white row_padding mb-100 text-center">
                <div className="col-12 col-md-8 offset-md-2">
                  <p>
                    <img
                      src="/icons/club_share_code.png"
                      alt="Share Code"
                      className="mx-auto"
                    />
                  </p>
                  <p>Share this code with your friends and earn points!</p>
                  <div className="font_sm mb-5">
                    <form className="row g-3 px-lg-5">
                      <div className="input-group textfield_refer">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="123456"
                          aria-label="Refer code"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-outline" type="button">
                            Copy Code
                          </button>
                        </div>
                      </div>
                    </form>
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
