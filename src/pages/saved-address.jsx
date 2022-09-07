// step 1: import
import React, { useState, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { NavAccount } from "../components/nav_account"
import { Link, navigate } from "gatsby"
import { getUser } from "../services/auth"
import { useQuery, gql, useMutation } from '@apollo/client';
import { handleLogin, isLoggedIn } from "../services/auth"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// import module.css
import * as ProfileModule from "./profile.module.css"

const schema = yup
  .object({
    firstName: yup.string().required("First Name is mandatory"),
    lastName: yup.string().required("Last Name is mandatory"),
    address1: yup.string().required("Address Line 1 is mandatory"),
    address2: yup.string().required("Address Line 2 is mandatory"),
    zip: yup.string().required("Postal Code is mandatory"),
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
    defaultAddress {
      id
      firstName
      lastName
      address1
      address2
      zip
    }
  }
}
`

const UPDATE_CUSTOMER_ADDRESS = gql`
  # update a customer address
  mutation customerAddressUpdate($address: MailingAddressInput!, $customerAccessToken: String!, $id: ID!) {
    customerAddressUpdate(address: $address, customerAccessToken: $customerAccessToken, id: $id) {
      customerAddress {
        # MailingAddress fields
        firstName
        lastName
        address1
        address2
        zip
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`

const CREATE_CUSTOMER_ADDRESS = gql`
  # update a customer address
  mutation customerAddressCreate($address: MailingAddressInput!, $customerAccessToken: String!) {
    customerAddressCreate(address: $address, customerAccessToken: $customerAccessToken) {
      customerAddress {
        # MailingAddress fields
        firstName
        lastName
        address1
        address2
        zip
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
const Address = () => {
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

  // // set default values for textfields
  // const [oldFirstName, newFirstName] = useState("James")
  // const [oldLastName, newLastName] = useState("Smith")
  // const [oldAddress1, newAddress1] = useState("Block 123 Ang Mo Kio Street 1")
  // const [oldAddress2, newAddress2] = useState("#01-23")
  // const [oldPostal, newPostal] = useState("322123")

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

  const onSubmit = (address) => {
    const { id, ...newAddress } = address
    debugger
    console.log(newAddress)
    if(address.id) {
      customerAddressUpdate({
        variables: { address: newAddress, customerAccessToken: token, id: address.id },
        onCompleted: (result) => {
          debugger
          console.log(result)
          if (result.customerAddressUpdate.customerUserErrors.length > 0) {
            var err = "";
            result.customerAddressUpdate.customerUserErrors.forEach((el)=>{
              err = err + el.message + ". "
            })
            setMessage(err)
          } else {
            //reset()
            window.location.reload(false)
            setMessage("Address updated successfully")
          }
        },
      })
    } else {
      
      customerAddressCreate({
        variables: { address: newAddress, customerAccessToken: token },
        onCompleted: (result) => {
          debugger
          console.log(result)
          if (result.customerAddressCreate.customerUserErrors.length > 0) {
            var err = "";
            result.customerAddressCreate.customerUserErrors.forEach((el)=>{
              err = err + el.message + ". "
            })
            setMessage(err)
          } else {
            //reset()
            setMessage("Address created successfully")
          }
        },
      })
    }
    
  }

  const [customerAddressCreate] = useMutation(CREATE_CUSTOMER_ADDRESS)
  const [customerAddressUpdate] = useMutation(UPDATE_CUSTOMER_ADDRESS)

  const {loading, error, data} = useQuery(GET_CUSTOMER, {
    variables: {handle: token}
  });

  if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;
  if (error) return `Error! You have no access to this page`;

  console.log(data);
  //const hasDefaultAddress = !!data?.customer?.defaultAddress
  

  return (
    <Layout>
      <div className="bg_grey">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 col-md-6 col-lg-3 bg_white p-5 mb-5">
              <div className="d-flex align-items-center mb-5">
                <div className={ProfileModule.initials}>{data?.customer?.firstName != undefined ? Array.from(data?.customer?.firstName)[0].toUpperCase() : "M"}{data?.customer?.lastName != undefined ? Array.from(data?.customer?.lastName)[0].toUpperCase() : "T"}</div>
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
                        Shipping &amp; Billing /
                      </div>
                      <h3 className="text-uppercase pb-6">Saved Address</h3>
                      <h4 className="text-uppercase pb-3">Shipping Address</h4>
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
                        id="input_first_name"
                        name="firstName"
                        defaultValue={data?.customer?.defaultAddress?.firstName}
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
                        id="input_last_name"
                        name="lastName"
                        defaultValue={data?.customer?.defaultAddress?.lastName}
                        {...register("lastName")}
                      />
                      {errors.lastName && (
                          <span>{errors.lastName.message}</span>
                        )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-5">
                      <label htmlFor="input_address_1" className="form-label">
                        Address Line 1
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input_address_1"
                        name="address1"
                        defaultValue={data?.customer?.defaultAddress?.address1}
                        {...register("address1")}
                      />
                      {errors.address1 && (
                          <span>{errors.address1.message}</span>
                        )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-5">
                      <label htmlFor="input_address_2" className="form-label">
                        Address Line 2 (Apt / Flat No.)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_address_2"
                        name="address2"
                        defaultValue={data?.customer?.defaultAddress?.address2}
                        {...register("address2")}
                      />
                      {errors.address2 && (
                          <span>{errors.address2.message}</span>
                        )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-5">
                      <label htmlFor="input_postal" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_postal"
                        name="zip"
                        defaultValue={data?.customer?.defaultAddress?.zip}
                        {...register("zip")}
                      />
                      {errors.zip && (
                          <span>{errors.zip.message}</span>
                        )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mt-5 text-center">
                      <input
                        type="hidden"
                        className="form-control"
                        id="input_id"
                        defaultValue={data?.customer?.defaultAddress?.id}
                        {...register("id")}
                      />
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
export default Address
