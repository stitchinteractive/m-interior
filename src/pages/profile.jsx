// step 1: import
import React, { useState, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link, navigate } from "gatsby"
import { Layout } from "../components/layout"
import { NavAccount } from "../components/nav_account"
import { getUser } from "../services/auth"
import { useQuery, gql, useMutation } from '@apollo/client';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { handleLogin, isLoggedIn } from "../services/auth"

// import module.css
import * as ProfileModule from "./profile.module.css"

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/
const schema = yup
  .object({
    firstName: yup.string().required("First Name is mandatory"),
    lastName: yup.string().required("Last Name is mandatory"),
    phone: yup
      .string()
      .matches(phoneRegExp, { message: "Phone must be numbers" })
      .min(8, "Phone must be 8 char long")
      .required("Phone is mandatory"),
    email: yup
      .string()
      .email("Email is not in the correct format")
      .required("Email is mandatory"),
    password: yup
      .string(),
      //.required("Password is mandatory")
      //.min(3, "Password must be at 3 char long"),
    confirmPwd: yup
      .string()
      //.required("Password is mandatory")
      .oneOf([yup.ref("password")], "Passwords does not match"),
  })
  .required()

const GET_CUSTOMER = gql`
query($handle: String!) {
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
  mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!) {
    customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
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
    customer.acceptsMarketing = true
    customer.phone = "+65"+customer.phone
    console.log(customer)
    customerUpdate({
      variables: { customer: customer, customerAccessToken: token },
      onCompleted: (result) => {
        debugger
        console.log(result)
        if (result.customerUpdate.customerUserErrors.length > 0) {
          var err = "";
          result.customerUpdate.customerUserErrors.forEach((el)=>{
            err = err + el.message + ". "
          })
          setMessage(err)
        } else {
          //reset()
          handleLogin(result.customerUpdate.customerAccessToken.accessToken, result.customerUpdate.customerAccessToken.expiresAt)
          setMessage("Profile updated successfully")
        }
      },
    })
  }

  const [customerUpdate] = useMutation(UPDATE_CUSTOMER)


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
 
  // set default values for textfields
  // const [oldFirstName, newFirstName] = useState("James")
  // const [oldLastName, newLastName] = useState("Smith")
  // const [oldEmail, newEmail] = useState("jamessmith@gmail.com")
  // const [oldPhone, newPhone] = useState("+65 9123 4567")
  // const [oldBirthday, newBirthday] = useState("2000-01-01")
  // const [oldPassword, newPassword] = useState("12345678")
  // const [oldChangePassword, newChangePassword] = useState("")

  //debugger
  const {loading, error, data} = useQuery(GET_CUSTOMER, {
    variables: {handle: token}
  });

  if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;
  if (error) return `Error! You have no access to this page`;

  console.log(data);
  

  return (
    <Layout>
      <div className="bg_grey">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 col-md-6 col-lg-3 bg_white p-5 mb-5">
              <div className="d-flex align-items-center mb-5">
                <div className={ProfileModule.initials}>JS</div>
                <div className="d-flex flex-column">
                  <div className={ProfileModule.customer_name}>
                    <div className="font_grey_medium_3">Hello.</div>
                    <div className="font_xl font_semibold text-uppercase">
                      {data?.customer?.firstName} {data?.customer?.lastName}
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
                      <h3 className="text-uppercase pb-6">My Profile</h3>
                    </div>
                    <div className="d-flex btn_back mb-80">
                      {message && <label>{message}</label>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-6 pb-5">
                      <label htmlFor="input_first_name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        id="input_first_name"
                        defaultValue={data?.customer?.firstName}
                        {...register("firstName")}
                      />
                      {errors.firstName && (
                          <span>{errors.firstName.message}</span>
                        )}
                    </div>
                    <div className="col-12 col-lg-6 pb-5">
                      <label htmlFor="input_first_name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        id="input_last_name"
                        defaultValue={data?.customer?.lastName}
                        {...register("lastName")}
                      />
                      {errors.lastName && (
                          <span>{errors.lastName.message}</span>
                        )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-5">
                      <label htmlFor="input_email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="input_email"
                        defaultValue={data?.customer?.email}
                        {...register("email")}
                      />
                      {errors.email && (
                          <span>{errors.email.message}</span>
                        )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-5">
                      <label htmlFor="input_phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        id="input_phone"
                        defaultValue={data?.customer?.phone.slice(3)}
                        {...register("phone")}
                      />
                      {errors.phone && (
                          <span>{errors.phone.message}</span>
                        )}
                    </div>
                  </div>
                  {/* 
                  <div className="row">
                    <div className="col-12 pb-5">
                      <label htmlFor="input_first_name" className="form-label">
                        Birthday
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="input_last_name"
                        value={oldBirthday}
                        onChange={(event) => newBirthday(event.target.value)}
                      />
                    </div>
                  </div>
                  */}
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
                      <button type="submit" className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
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
