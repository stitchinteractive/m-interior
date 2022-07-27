// step 1: import
import React, { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import * as loginModule from "./login.module.css"
import BackIcon from "../icons/back"
import { gql, useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/
const schema = yup
  .object({
    firstName: yup.string().required("First Name is mandatory"),
    lastName: yup.string().required("Last Name is mandatory"),
    phone: yup
      .string()
      .matches(phoneRegExp, { message: "" })
      .required("Phone is mandatory"),
    email: yup
      .string()
      .email("Email is not in the correct format")
      .required("Email is mandatory"),
    password: yup
      .string()
      .required("Password is mandatory")
      .min(3, "Password must be at 3 char long"),
    confirmPwd: yup
      .string()
      .required("Password is mandatory")
      .oneOf([yup.ref("password")], "Passwords does not match"),
  })
  .required()

const CREATE_CUSTOMER = gql`
  # create a customer
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        firstName
        lastName
        email
        phone
        acceptsMarketing
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`

// step 2: define component
const Account = () => {
  gsap.registerPlugin(ScrollTrigger)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [message, setMessage] = React.useState(null)

  const onSubmit = (data) => {
    const { confirmPwd, ...customer } = data
    customer.acceptsMarketing = true
    console.log(customer)
    errors.message =
      "Error creating profile. Please ensure you include your country code in the phone number and the email is in the correct format."
    customerCreate({
      variables: { input: customer },
      onCompleted: (result) => {
        debugger
        console.log(result)
        if (result.customerCreate.customerUserErrors.length > 0) {
          setMessage(
            "Error creating profile. Please ensure you include your country code in the phone number and the email is in the correct format."
          )
        } else {
          reset()
          setMessage("Profile created successfully")
        }
      },
    })
  }

  // useLayoutEffect(() => {
  //   gsap.utils.toArray(".animate").forEach(function (e) {
  //     gsap.from(e, {
  //       duration: 0.8,
  //       ease: "power1.out",
  //       opacity: 0,
  //       y: 100,
  //       scrollTrigger: e,
  //       onComplete: () => console.log(e),
  //     })
  //   })
  // })

  const [customerCreate] = useMutation(CREATE_CUSTOMER)

  return (
    <Layout>
      <div className={`${loginModule.login_bg} d-flex align-items-center`}>
        <div className="container">
          <div className="col col-md-8 offset-md-4 col-lg-10 offset-lg-1">
            <div className="animate">
              <div className={loginModule.login_container}>
                <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
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
                    <div className="d-flex btn_back mb-80">
                      {message && <label>{message}</label>}
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
                          name="firstName"
                          className="form-control"
                          id="input_first_name"
                          {...register("firstName")}
                        />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
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
                          name="lastName"
                          className="form-control"
                          id="input_last_name"
                          {...register("lastName")}
                        />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                      </div>
                      <div className="col-12 mb-5">
                        <label htmlFor="input_phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          id="input_phone"
                          {...register("phone")}
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}
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
                          name="birthday"
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
                          name="email"
                          className="form-control"
                          id="input_email"
                          {...register("email")}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                      </div>
                      <div className="col-12 mb-5">
                        <label htmlFor="input_password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="input_password"
                          {...register("password")}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                      </div>
                      <div className="col-12 mb-5">
                        <label htmlFor="input_password" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="confirmPwd"
                          className="form-control"
                          id="input_password"
                          {...register("confirmPwd")}
                        />
                        {errors.confirmPwd && (
                          <p>{errors.confirmPwd.message}</p>
                        )}
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
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Create Account
                    </button>
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
