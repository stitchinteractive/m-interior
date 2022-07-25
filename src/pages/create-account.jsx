// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import * as loginModule from "./login.module.css"
import BackIcon from "../icons/back"
import { gql, useMutation } from '@apollo/client';

const CREATE_CUSTOMER = gql`
  # create a customer
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        firstName
        lastName,
        email,
        phone,
        acceptsMarketing
      }
      customerUserErrors { field, message, code }
    }
  }
`;

// step 2: define component
const Account = () => {
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

  const [createCustomer, { data, loading, error }] = useMutation(CREATE_CUSTOMER);
  createCustomer({ variables: { 
    "input": {
      "firstName": "John",
      "lastName": "Smith",
      "email": "johnsmith@shopify.com",
      "phone": "+15146669999",
      "password": "5hopify",
      "acceptsMarketing": true
  }} });

  return (
    <Layout>
      <div className={`${loginModule.login_bg} d-flex align-items-center`}>
        <div className="container">
          <div className="col col-md-8 offset-md-4 col-lg-10 offset-lg-1">
            <div className="animate">
              <div className={loginModule.login_container}>
                <form className="row g-3">
                  <div className="col-12">
                    <h2 className="text-uppercase pb-6">Create Account</h2>
                    <div className="d-flex btn_back mb-80">
                      <BackIcon />
                      <Link
                        to="/login"
                        className="ms-2 font_yellow text-uppercase font_semibold no_underline"
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-12 mb-5">
                        <label
                          htmlFor="input_first_name"
                          className="form-label"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input_first_name"
                        />
                      </div>
                      <div className="col-12 mb-5">
                        <label
                          htmlFor="input_first_name"
                          className="form-label"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input_last_name"
                        />
                      </div>
                      <div className="col-12 mb-5">
                        <label htmlFor="input_phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="input_phone"
                        />
                      </div>
                      <div className="col-12 mb-5">
                        <label
                          htmlFor="input_first_name"
                          className="form-label"
                        >
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
                      <div className="col-12 mb-5">
                        <label htmlFor="input_email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="input_email"
                        />
                      </div>
                      <div className="col-12 mb-5">
                        <label htmlFor="input_password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="input_password"
                        />
                      </div>
                      <div className="col-12 mb-5">
                        <label htmlFor="input_password" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="input_password"
                        />
                      </div>
                      <div className="col-12 mb-5">
                        <label htmlFor="input_referral" className="form-label">
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

                  <div className="col-12 text-center">
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
