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
    // save birthday first to yotpo
    const [year, month, day] = oldBirthday.split('-')
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({customer_email: cusdata?.customer?.email, day: day, month: month, year: year})
    };
    
    fetch('https://loyalty.yotpo.com/api/v2/customer_birthdays?guid=jx9X-MCEhx-re9u7YIbChg&api_key=KYoD7NmQ6FaibkwxyAcHGgtt', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    // save other form data
    customer.acceptsMarketing = true
    customer.phone = "+65" + customer.phone
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
          // handleLogin(
          //   result.customerUpdate.customerAccessToken.accessToken,
          //   result.customerUpdate.customerAccessToken.expiresAt
          // )
          window.location.reload()
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
  const [oldBirthday, newBirthday] = useState("2000-01-01")
  // const [oldPassword, newPassword] = useState("12345678")
  // const [oldChangePassword, newChangePassword] = useState("")

  useEffect(() => {
    //get yotpo data
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }

    fetch(
      "https://loyalty.yotpo.com/api/v2/customers?customer_email=" +
      cusdata?.customer?.email +
        "&country_iso_code=null&with_referral_code=false&with_history=true&guid=jx9X-MCEhx-re9u7YIbChg&api_key=KYoD7NmQ6FaibkwxyAcHGgtt",
      options
    )
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json")
        const data2 = isJson && (await response.json())

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data2 && data2.message) || response.status
          return Promise.reject(error)
        }

        setData(data2)
        newBirthday(`${data2.birthday_year}-${String(data2.birthday_month).padStart(2, '0')}-${String(data2.birth_day).padStart(2, '0')}`)
        console.log(data2)
      })
      .catch((error) => {
        console.error("There was an error!", error)
      })
  }, [cusdata]);

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
  },[])
  
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
                      <h3 className="text-uppercase pb-6">My Profile</h3>
                    </div>
                    <div className="d-flex btn_back mb-20">
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
                        defaultValue={cusdata?.customer?.firstName}
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
                        defaultValue={cusdata?.customer?.lastName}
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
                        defaultValue={cusdata?.customer?.email}
                        {...register("email")}
                      />
                      {errors.email && <span>{errors.email.message}</span>}
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
                        defaultValue={cusdata?.customer?.phone?.slice(3)}
                        {...register("phone")}
                      />
                      {errors.phone && <span>{errors.phone.message}</span>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-5">
                      <label htmlFor="input_first_name" className="form-label">
                        Birthday
                      </label>
                      <input
                        type="date"
                        placeholder="yyyy-mm-dd"
                        className="form-control"
                        id="input_birthday"
                        value={oldBirthday}
                        onChange={(event) => newBirthday(event.target.value)}
                      />
                    </div>
                  </div>
                  {/* <div className="row">
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
                  </div> */}
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
