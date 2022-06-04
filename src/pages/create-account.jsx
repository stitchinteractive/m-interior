// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import * as loginModule from "./login.module.css"

// step 2: define component
const Account = () => {
  return (
    <Layout>
      <div className={`${loginModule.login_bg} d-flex align-items-center`}>
        <div className="container">
          <div className="col col-md-8 offset-md-4 col-lg-10 offset-lg-1">
            <div className="">
              <div className={loginModule.login_container}>
                <form className="row g-3">
                  <div className="col-12">
                    <h2 className="text-uppercase">Create Account</h2>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col">
                        <label for="input_first_name" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input_first_name"
                        />
                      </div>
                      <div className="col-12 mt-5">
                        <label for="input_first_name" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input_last_name"
                        />
                      </div>
                      <div className="col-12 mt-5">
                        <label for="input_phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input_phone"
                        />
                      </div>
                      <div className="col-12 mt-5">
                        <label for="input_first_name" className="form-label">
                          Birthday
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="input_last_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col">
                        <label for="input_email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="input_email"
                        />
                      </div>
                      <div className="col-12 mt-5">
                        <label for="input_password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="input_password"
                        />
                      </div>
                      <div className="col-12 mt-5">
                        <label for="input_password" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="input_password"
                        />
                      </div>
                      <div className="col-12 mt-5">
                        <label for="input_referral" className="form-label">
                          Referral Code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input_referral"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-5 text-center">
                    <Link to="/">
                      <button type="submit" className="btn btn-secondary">
                        Create Account
                      </button>
                    </Link>
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
export default Account
