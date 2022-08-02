// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import * as loginModule from "./login.module.css"

// step 2: define component
const Login = () => {
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
      <div className={`${loginModule.login_bg} d-flex align-items-center`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="animate">
                <div className={loginModule.login_container}>
                  <div className="row">
                    <div className="col">
                      <h2 className="text-uppercase text-center pb-4">
                        Contact Us
                      </h2>
                      <p className="text-uppercase font_xs font_semibold">
                        62 UBI ROAD 1, OXLEY BIZHUB 2, #07-21 <br />
                        SINGAPORE 408734
                      </p>
                      <p className="text-uppercase font_xs font_semibold">
                        +65 9864 2364 (whatsapp)
                        <br />
                        <Link to="mailto:hello@m-interior.co">
                          hello@m-interior.co
                        </Link>
                      </p>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7401359860232!2d103.88948221534264!3d1.332040299028484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17f339aaaaab%3A0x649d901ef51bc2a7!2sOxley%20BizHub%202!5e0!3m2!1sen!2ssg!4v1656647687356!5m2!1sen!2ssg"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="M.INT"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="animate d-flex h-100">
                <div className={loginModule.login_container}>
                  <form method="post" action="https://formspree.io/f/xgeqwzql" className="row g-3">
                    <div className="col-12">
                      <h2 className="text-uppercase text-center pb-4">
                        Talk To Us
                      </h2>
                      <p className="text-uppercase text-center font_xs font_semibold">
                        LET’S TALK DESIGN, OVER COFFFEE.
                      </p>
                    </div>
                    <div className="col-6">
                      <label htmlFor="input_first_name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_first_name"
                        name="firstName"
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="input_first_name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_last_name"
                        name="lastName"
                      />
                    </div>
                    <div className="col-6 mt-5">
                      <label htmlFor="input_email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input_email"
                        name="_replyto"
                      />
                    </div>
                    <div className="col-6 mt-5">
                      <label htmlFor="input_phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_phone"
                        name="phone"
                      />
                    </div>

                    <div className="col-12 mt-5">
                      <label
                        for="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Your Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="message"
                      ></textarea>
                    </div>

                    <div className="col-12 mt-5 text-center">
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </div>
                  </form>
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
export default Login
