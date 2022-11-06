// step 1: import
import React, { useState, useLayoutEffect } from "react"
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

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const schema = yup
  .object({
    review: yup.string().required("Review cannot be empty"),
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

// step 2: define component
const Profile = () => {
  const [cusdata, setCustomerData] = useState(null)
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    navigate(`/earn-points`)
  };
  const handleShow = () => setShow(true);

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
    //save review
    debugger
    const options = {
      method: 'POST',
      headers: {accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        appkey: '0UatVZyelKbytjRxmLaRfe9q6Zo83MYMLfOmbifT',
        domain: 'https://m-interior.co/',
        sku: 'SiteReview',
        product_title: 'our product',
        product_description: 'our product',
        product_url: 'https://m-interior.co/',
        product_image_url: 'https://m-interior.co/logo.png',
        display_name: cusdata?.customer?.firstName+' '+cusdata?.customer?.lastName,
        email: cusdata?.customer?.email,
        is_incentivized: true,
        review_content: data.review,
        review_title: 'Site Review',
        review_score: 5
      })
    };
    
    fetch('https://api.yotpo.com/v1/widget/reviews', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => {
        handleShow()
        reset()
      })
      .catch(err => console.error(err));
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
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your review has been sent.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
                        M.int Club /
                      </div>
                      <h3 className="text-uppercase pb-6">Write a review</h3>
                    </div>
                    <div className="d-flex btn_back mb-20">
                      {message && <label>{message}</label>}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div class="mb-5">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                          Describe your experience
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="review"
                          {...register("review")}
                        ></textarea>
                        {errors.review && (
                        <span>{errors.review.message}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mt-5 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Submit
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
