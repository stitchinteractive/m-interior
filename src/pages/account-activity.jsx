// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { NavAccount } from "../components/nav_account"

// import module.css
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
          <div className="row row_padding">
            <div className="col-12 col-lg-3 bg_white p-5 mb-5">
              <div className="d-flex align-items-center mb-5">
                <div className={ProfileModule.initials}>JS</div>
                <div class="d-flex flex-column">
                  <div className={ProfileModule.customer_name}>
                    <div className="font_grey_variant">Hello.</div>
                    <div className="font_xl font_semibold text-uppercase">
                      James Smith
                    </div>
                  </div>
                </div>
              </div>
              <NavAccount />
            </div>
            <div className="col-12 col-lg-9">
              <div className={ProfileModule.content}>
                <div className="row">
                  <div className="col-12">
                    <div class="font_grey_variant text-uppercase">
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
                        <tr>
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
                        </tr>
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
