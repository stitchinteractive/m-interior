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
    password: yup.string().matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 Characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character"
    ),
    confirmPwd: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords does not match"),
  })
  .required()

const CUSTOMER_RESET = gql`
  mutation customerReset($id: ID!, $input: CustomerResetInput!) {
    customerReset(id: $id, input: $input) {
        customer {
            id
        }
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
const Login = ({location}) => {
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

  const params = new URLSearchParams(location.search);
  const id = "gid://shopify/Customer/"+params.get("id")
  const token = params.get("token")

  console.log(id)
  console.log(token)
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
    debugger
    console.log(data)
    const { confirmPwd, ...customer } = data
    customer.resetToken = token
    console.log(customer)
    customerReset({
      variables: { id: id, input: customer },
      onCompleted: (result) => {
        debugger
        console.log(result)
        if (result.customerReset.customerUserErrors.length > 0) {
          setMessage("Error updating password. "+result.customerReset.customerUserErrors[0].message)
        } else {
          setMessage("Password changed successfully. Please go back to login.")
        }
      },
    })
  }

  const [customerReset] = useMutation(CUSTOMER_RESET)

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
                    <h2 className="text-uppercase pb-6">Reset</h2>
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
                    Please enter your new password to change your password <br/>
                    {message && <label>{message}</label>}
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
                  <div className="col-12 mt-5">
                    <label htmlFor="inputPassword4" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPwd"
                      {...register("confirmPwd")}
                    />
                    {errors.confirmPwd && (
                      <p className="font_yellow">{errors.confirmPwd.message}</p>
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
