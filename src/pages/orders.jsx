// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
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
                    <div className="font_grey_medium_3">Hello.</div>
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
                    <div class="font_grey_medium_3 text-uppercase">
                      My Account /
                    </div>
                    <h3 className="text-uppercase pb-6">My Orders</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Order</th>
                          <th scope="col">Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Total</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">#11305</th>
                          <td>24/04/2022</td>
                          <td>Completed</td>
                          <td>$300.65</td>
                          <td>
                            <Link to="/">View Order</Link>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#11305</th>
                          <td>24/04/2022</td>
                          <td>Completed</td>
                          <td>$300.65</td>
                          <td>
                            <Link to="/">View Order</Link>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#11305</th>
                          <td>24/04/2022</td>
                          <td>Completed</td>
                          <td>$300.65</td>
                          <td>
                            <Link to="/">View Order</Link>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#11305</th>
                          <td>24/04/2022</td>
                          <td>Completed</td>
                          <td>$300.65</td>
                          <td>
                            <Link to="/">View Order</Link>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#11305</th>
                          <td>24/04/2022</td>
                          <td>Completed</td>
                          <td>$300.65</td>
                          <td>
                            <Link to="/">View Order</Link>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#11305</th>
                          <td>24/04/2022</td>
                          <td>Completed</td>
                          <td>$300.65</td>
                          <td>
                            <Link to="/">View Order</Link>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#11305</th>
                          <td>24/04/2022</td>
                          <td>Completed</td>
                          <td>$300.65</td>
                          <td>
                            <Link to="/">View Order</Link>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#11305</th>
                          <td>24/04/2022</td>
                          <td>Completed</td>
                          <td>$300.65</td>
                          <td>
                            <Link to="/">View Order</Link>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#11305</th>
                          <td>24/04/2022</td>
                          <td>Completed</td>
                          <td>$300.65</td>
                          <td>
                            <Link to="/">View Order</Link>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#11305</th>
                          <td>24/04/2022</td>
                          <td>Completed</td>
                          <td>$300.65</td>
                          <td>
                            <Link to="/">View Order</Link>
                          </td>
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
