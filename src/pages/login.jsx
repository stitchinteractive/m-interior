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

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email is not in the correct format")
      .required("Email is mandatory"),
    password: yup.string().required("Password is mandatory"),
  })
  .required()

const GET_TOKEN = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
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
    customerAccessTokenCreate({
      variables: { input: data },
      onCompleted: (result) => {
        debugger
        console.log(result)
        if (result.customerAccessTokenCreate.customerUserErrors.length > 0) {
          setMessage("Invalid credentials. Please try again.")
        } else {
          handleLogin(
            result.customerAccessTokenCreate.customerAccessToken.accessToken,
            result.customerAccessTokenCreate.customerAccessToken.expiresAt
          )
          navigate(`/dashboard`)
          //alert("Login success. Access token: "+result.customerAccessTokenCreate.customerAccessToken.accessToken);
        }
      },
    })
  }

  const [customerAccessTokenCreate] = useMutation(GET_TOKEN)

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
                    <h2 className="text-uppercase pb-6">Log In</h2>
                    <div className="d-flex btn_back mb-20">
                      {message && <label>{message}</label>}
                    </div>
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
                  <div className="col-12 mt-5">
                    <label htmlFor="inputPassword4" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="font_yellow">{errors.password.message}</p>
                    )}
                  </div>
                  <div className="col-12 mt-5 text-end">
                    <button
                      type="                     submit"
                      className="btn btn-primary"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Log in
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
                    <div className="mt-1 font_sm">
                      <Link to="/forget" className="fst-italic font_grey_medium_2">
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
