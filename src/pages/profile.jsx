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
  const [oldEmail, newEmail] = useState("jamessmith@gmail.com")
  const [oldPhone, newPhone] = useState("+65 9123 4567")
  const [oldBirthday, newBirthday] = useState("2000-01-01")
  const [oldPassword, newPassword] = useState("12345678")
  const [oldChangePassword, newChangePassword] = useState("")

  return (
    <Layout>
      <div className="bg_grey">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 col-lg-3 bg_white p-5 mb-5">
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
            <div className="col-12 col-lg-9">
              <div className={ProfileModule.content}>
                <form className="g-3">
                  <div className="row">
                    <div className="col-12">
                      <div className="font_grey_medium_3 text-uppercase">
                        My Account /
                      </div>
                      <h3 className="text-uppercase pb-6">My Profile</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 pb-5">
                      <label htmlFor="input_first_name" className="form-label">
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
                    <div className="col-12 col-md-6 pb-5">
                      <label htmlFor="input_first_name" className="form-label">
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
                  <div className="row">
                    <div className="col-12 pb-5">
                      <label htmlFor="input_email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input_email"
                        value={oldEmail}
                        onChange={(event) => newEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-5">
                      <label htmlFor="input_phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_phone"
                        value={oldPhone}
                        onChange={(event) => newPhone(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-5">
                      <label htmlFor="input_first_name" className="form-label">
                        Birthday
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="input_last_name"
                        value={oldBirthday}
                        onChange={(event) => newBirthday(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 pb-5">
                      <label htmlFor="input_password" className="form-label">
                        Password
                      </label>
                      <input
                        type="textfield"
                        className="form-control"
                        id="input_password"
                        value={oldPassword}
                        onChange={(event) => newPassword(event.target.value)}
                      />
                    </div>
                    <div className="col-12 col-md-6 pb-5">
                      <label htmlFor="input_password" className="form-label">
                        New Password
                      </label>
                      <input
                        type="textfield"
                        className="form-control"
                        id="input_password"
                        value={oldChangePassword}
                        onChange={(event) =>
                          newChangePassword(event.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="row">
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
