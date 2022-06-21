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
          <div className="col col-md-8 offset-md-4 col-lg-6 offset-lg-6">
            <div className="animate">
              <div className={loginModule.login_container}>
                <form className="row g-3">
                  <div className="col">
                    <h2 className="text-uppercase pb-6">Log In</h2>
                  </div>
                  <div className="col-12">
                    <label for="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-12 mt-5">
                    <label for="inputPassword4" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="col-12 mt-5 text-end">
                    <Link to="/profile">
                      <button type="submit" className="btn btn-secondary">
                        Log in
                      </button>
                    </Link>
                    <div className="mt-3 font_sm">
                      <Link
                        to="/create-account"
                        className="fst-italic font_grey_medium_dark"
                      >
                        Don't have an account yet?
                      </Link>
                    </div>
                    <div className="mt-1 font_sm">
                      <Link to="/" className="fst-italic font_grey_medium_dark">
                        Forgot your password?
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
export default Login
