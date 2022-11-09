// step 1: import
import React, { useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link, navigate } from "gatsby"
import { Layout } from "../components/layout"
import { NavAccount } from "../components/nav_account"
import { getUser } from "../services/auth"
import { useQuery, gql, useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { handleLogin, isLoggedIn } from "../services/auth"

// import module.css
import * as ProfileModule from "./profile.module.css"

const schema = yup
  .object({
    password: yup.string().matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 Characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character"
    ),
    //.required("Password is mandatory")
    //.min(3, "Password must be at 3 char long"),
    confirmPwd: yup
      .string()
      //.required("Password is mandatory")
      .oneOf([yup.ref("password")], "Passwords does not match"),
  })
  .required()

const GET_CUSTOMER = gql`
  query ($handle: String!) {
    customer(customerAccessToken: $handle) {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
    }
  }
`

const UPDATE_CUSTOMER = gql`
  # create a customer
  mutation customerUpdate(
    $customer: CustomerUpdateInput!
    $customerAccessToken: String!
  ) {
    customerUpdate(
      customer: $customer
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        firstName
        lastName
        email
        phone
        acceptsMarketing
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
const Profile = () => {
    useEffect(() => {
        console.log(getUser())
        if (Object.keys(getUser()).length === 0) {
          navigate('/login');
        }
      }, [])
  const [cusdata, setCustomerData] = useState(null)
  const [yotpoData, setData] = useState(null)
  gsap.registerPlugin(ScrollTrigger)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const token = getUser().token
  const [message, setMessage] = React.useState(null)

  const onSubmit = (data) => {
    debugger
    const { confirmPwd, ...customer } = data
    // save other form data
    console.log(customer)
    customerUpdate({
      variables: { customer: customer, customerAccessToken: token },
      onCompleted: (result) => {
        debugger
        console.log(result)
        if (result.customerUpdate.customerUserErrors.length > 0) {
          var err = ""
          result.customerUpdate.customerUserErrors.forEach((el) => {
            err = err + el.message + ". "
          })
          setMessage(err)
        } else {
          //reset()
          handleLogin(
            result.customerUpdate.customerAccessToken.accessToken,
            result.customerUpdate.customerAccessToken.expiresAt
          )
          window.location.reload(false)
          setMessage("Password updated successfully")
        }
      },
    })
  }

  const [customerUpdate] = useMutation(UPDATE_CUSTOMER)

  //debugger
  useQuery(GET_CUSTOMER, {
    variables: { handle: token },
    onCompleted: (data) => {
      setCustomerData(data)
      console.log(data)
    },
    onError: (error)=> {
      return `Error! You have no access to this page: ${error.message}`
    }
  })

  return (
    <Layout>
      <div className="bg_grey">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 col-md-6 col-lg-3 bg_white p-5 mb-5">
              <div className="d-flex align-items-center mb-5">
                <div className={ProfileModule.initials}>
                  {cusdata?.customer?.firstName != undefined
                    ? Array.from(cusdata?.customer?.firstName)[0].toUpperCase()
                    : "M"}
                  {cusdata?.customer?.lastName != undefined
                    ? Array.from(cusdata?.customer?.lastName)[0].toUpperCase()
                    : "T"}
                </div>
                <div className="d-flex flex-column">
                  <div className={ProfileModule.customer_name}>
                    <div className="font_grey_medium_3">Hello.</div>
                    <div className="font_lg font_semibold text-uppercase">
                      {cusdata?.customer?.firstName} {cusdata?.customer?.lastName}
                    </div>
                  </div>
                </div>
              </div>
              <NavAccount />
            </div>
            <div className="col-12 col-md-6 col-lg-9 px-md-5">
              <div className={ProfileModule.content}>
                <form className="g-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-12">
                      <div className="font_grey_medium_3 text-uppercase">
                        My Account /
                      </div>
                      <h3 className="text-uppercase pb-6">My Password</h3>
                    </div>
                    <div className="d-flex btn_back mb-20">
                      {message && <label>{message}</label>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-6 pb-5">
                      <label htmlFor="input_password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="input_password"
                        {...register("password")}
                      />
                      {errors.password && (
                        <span>{errors.password.message}</span>
                      )}
                    </div>
                    <div className="col-12 col-lg-6 pb-5">
                      <label htmlFor="input_password" className="form-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirmPwd"
                        id="input_password"
                        {...register("confirmPwd")}
                      />
                      {errors.confirmPwd && (
                        <span>{errors.confirmPwd.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mt-5 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Update
                      </button>
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
