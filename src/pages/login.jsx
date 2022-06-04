// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import * as loginModule from "./login.module.css"

// step 2: define component
const Login = () => {
  return (
    <Layout>
      <div className={`${loginModule.login_bg} d-flex align-items-center`}>
        <div className="container">
          <div className="col col-md-8 offset-md-4 col-lg-6 offset-lg-6">
            <div className="">
              <div className={loginModule.login_container}>
                <form className="row g-3">
                  <div className="col">
                    <h2 className="text-uppercase">Log In</h2>
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
                    <Link to="/create-account">
                      <button type="submit" className="btn btn-secondary">
                        Log in
                      </button>
                    </Link>
                  </div>
                  <div className="col-12 text-end">
                    <Link to="/" className="fst-italic">
                      Forgot your password?
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
export default Login
