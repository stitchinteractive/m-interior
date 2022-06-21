// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { Layout } from "../components/layout"

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
            <div className="col-12 col-lg-3 bg_white p-5 mb-5 animate">
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
              <div className="text-uppercase">
                <div className="font_grey_variant">My Account</div>
                <ul className="listing">
                  <li className="active">
                    <Link to="/">My Profile</Link>
                  </li>
                  <li>
                    <Link to="/">My Orders</Link>
                  </li>
                  <li>
                    <Link to="/">Account Activity</Link>
                  </li>
                </ul>
                <div className="font_grey_variant">Shipping &amp; Billing</div>
                <ul className="listing">
                  <li>
                    <Link to="/">Saved Address</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-9 animate">
              <div className={ProfileModule.content}>
                <form className="g-3">
                  <div class="row">
                    <div className="col-12">
                      <div class="font_grey_variant text-uppercase">
                        My Account /
                      </div>
                      <h3 className="text-uppercase pb-6">My Profile</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-6 pb-5">
                      <label for="input_first_name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_first_name"
                        value="James"
                        onChange={(e) =>
                          this.setState({ text: e.target.value })
                        }
                      />
                    </div>
                    <div class="col-12 col-md-6 pb-5">
                      <label for="input_first_name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_last_name"
                        value="Smith"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label for="input_email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input_email"
                        value="jamessmith@gmail.com"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label for="input_phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_phone"
                        value="+65 9123 4567"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label for="input_first_name" className="form-label">
                        Birthday
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="input_last_name"
                        value="2000-02-09"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-6 pb-5">
                      <label for="input_password" className="form-label">
                        Password
                      </label>
                      <input
                        type="textfield"
                        className="form-control"
                        id="input_password"
                        value="oldpassword"
                      />
                    </div>
                    <div class="col-12 col-md-6 pb-5">
                      <label for="input_password" className="form-label">
                        New Password
                      </label>
                      <input
                        type="textfield"
                        className="form-control"
                        id="input_password"
                        value="newpassword"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div className="col-12 mt-5 text-center">
                      <Link to="/">
                        <button type="submit" className="btn btn-secondary">
                          Update
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
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
