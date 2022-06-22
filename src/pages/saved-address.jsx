// step 1: import
import React, { useState, useLayoutEffect } from "react"
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

  // set default values for textfields
  const [oldFirstName, newFirstName] = useState("James")
  const [oldLastName, newLastName] = useState("Smith")
  const [oldAddress1, newAddress1] = useState("Block 123 Ang Mo Kio Street 1")
  const [oldAddress2, newAddress2] = useState("#01-23")
  const [oldPostal, newPostal] = useState("322123")

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
                <form className="g-3">
                  <div class="row">
                    <div className="col-12">
                      <div class="font_grey_variant text-uppercase">
                        My Account /
                      </div>
                      <h3 className="text-uppercase pb-6">Saved Address</h3>
                      <h4 className="text-uppercase pb-3">Shipping Address</h4>
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
                        value={oldFirstName}
                        onChange={(event) => newFirstName(event.target.value)}
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
                        value={oldLastName}
                        onChange={(event) => newLastName(event.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label for="input_email" className="form-label">
                        Address Line 1
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input_email"
                        value={oldAddress1}
                        onChange={(event) => newAddress1(event.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label for="input_phone" className="form-label">
                        Address Line 2 (Apt / Flat No.)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_phone"
                        value={oldAddress2}
                        onChange={(event) => newAddress2(event.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label for="input_first_name" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_last_name"
                        value={oldPostal}
                        onChange={(event) => newPostal(event.target.value)}
                      />
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
