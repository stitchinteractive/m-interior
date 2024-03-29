// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link, navigate } from "gatsby"
import { Layout } from "../components/layout"
import * as loginModule from "./login.module.css"
import { gql, useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { handleLogin, isLoggedIn } from "../services/auth"
import BackIcon from "../icons/back"

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email is not in the correct format")
      .required("Email is mandatory"),
  })
  .required()

const CUSTOMER_RECOVER = gql`
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`

// step 2: define component
const Login = () => {
  gsap.registerPlugin(ScrollTrigger)

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

  const [message, setMessage] = React.useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
    customerRecover({
      variables: { email: data.email },
      onCompleted: (result) => {
        debugger
        console.log(result)
        if (result.customerRecover.customerUserErrors.length > 0) {
          setMessage("Invalid email address.")
        } else {
          setMessage("Email sent to recipient.")
        }
      },
    })
  }

  const [customerRecover] = useMutation(CUSTOMER_RECOVER)

  if (isLoggedIn()) {
    navigate(`/profile`)
  }

  return (
    <Layout>
      <div className={`${loginModule.login_bg} d-flex align-items-center`}>
        <div className="container">
          <div className="col col-md-8 offset-md-4 col-lg-6 offset-lg-6">
            <div className="animate">
              <div className={loginModule.login_container}>
                <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="col">
                    <h2 className="text-uppercase pb-6">Forget your password?</h2>
                    <div className="d-flex btn_back mb-20">
                      <BackIcon />
                      <Link
                        to="/login"
                        className="ms-2 font_yellow text-uppercase font_semibold no_underline"
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 mt-2">
                    Please enter your email address to reset your password <br/>
                    {message && <label>{message}</label>}
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="font_yellow">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="col-12 mt-5 text-end">
                    <button
                      type="                     submit"
                      className="btn btn-primary"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Reset Password
                    </button>
                    <Link to="/profile"></Link>
                    <div className="mt-3 font_sm">
                      <Link
                        to="/create-account"
                        className="fst-italic font_grey_medium_2"
                      >
                        Don't have an account yet?
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
