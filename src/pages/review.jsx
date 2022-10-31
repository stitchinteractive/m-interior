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
    //debugger
    const options = {
      method: 'POST',
      headers: {accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        appkey: '0UatVZyelKbytjRxmLaRfe9q6Zo83MYMLfOmbifT',
        domain: 'https://m-interior.co/',
        sku: 'yotpo_site_reviews',
        product_title: 'Site Review',
        product_description: 'Site Review',
        product_url: 'https://m-interior.co/',
        product_image_url: 'https://m-interior.co/',
        display_name: 'alex',
        email: 'asjtan@gmail.com',
        is_incentivized: true,
        review_content: 'Wonderful site',
        review_title: 'Great Portal',
        review_score: 5
      })
    };
    
    fetch('https://api.yotpo.com/v1/widget/reviews', options)
      .then(response => response.json())
      .then(response => console.log(response))
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
  const { loading, error, data } = useQuery(GET_CUSTOMER, {
    variables: { handle: token },
  })

  if (loading) return "Loading..."
  // if (error) return `Error! ${error.message}`;
  if (error) return `Error! You have no access to this page`

  console.log(data)

  return (
    <Layout>
      <div className="bg_grey">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 col-md-6 col-lg-3 bg_white p-5 mb-5">
              <div className="d-flex align-items-center mb-5">
                <div className={ProfileModule.initials}>
                  {data?.customer?.firstName != undefined
                    ? Array.from(data?.customer?.firstName)[0].toUpperCase()
                    : "M"}
                  {data?.customer?.lastName != undefined
                    ? Array.from(data?.customer?.lastName)[0].toUpperCase()
                    : "T"}
                </div>
                <div className="d-flex flex-column">
                  <div className={ProfileModule.customer_name}>
                    <div className="font_grey_medium_3">Hello.</div>
                    <div className="font_lg font_semibold text-uppercase">
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
                        M.int Club /
                      </div>
                      <h3 className="text-uppercase pb-6">Write a review</h3>
                    </div>
                    <div className="d-flex btn_back mb-20">
                      {message && <label>{message}</label>}
                    </div>
                  </div>
                  {/* <div className="row">
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
                  </div> */}
                </form>
              </div>
              <div class="yotpo yotpo-main-widget"
                  data-product-id="423166174"
                  data-price="67"
                  data-currency="SGD"
                  data-name="ACACIA BLOCK"
                  data-url="https://minteriormain.gtsb.io/shop/detail/acacia-block"
                  data-image-url="https://cdn.shopify.com/s/files/1/0638/4851/3785/products/Thumbnail-White---Front-_1.png?v=1660030341">
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
