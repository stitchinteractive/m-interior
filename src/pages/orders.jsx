// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link, navigate } from "gatsby"
import { Layout } from "../components/layout"
import { NavAccount } from "../components/nav_account"
import { getUser } from "../services/auth"
import { useQuery, gql, useMutation } from '@apollo/client';
import { handleLogin, isLoggedIn } from "../services/auth"
import { formatPrice } from "../utils/format-price"

// import module.css
import * as ProfileModule from "./profile.module.css"

const GET_CUSTOMER = gql`
query($handle: String!) {
  customer(customerAccessToken: $handle) {
    id
    firstName
    lastName
    acceptsMarketing
    email
    phone
    orders (first: 100, reverse:true) {
      edges {
        node {
          id
          processedAt
          currentTotalPrice{
            amount
            currencyCode
          }
          orderNumber
          fulfillmentStatus
        }
      }
    }
  }
}
`

// step 2: define component
const Orders = () => {
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap.utils.toArray(".animate").forEach(function (e) {
      gsap.from(e, {
        duration: 0.8,
        ease: "power1.out",
        opacity: 0,
        y: 100,
        scrollTrigger: e,
        onComplete: () => console.log(e),
      })
    })
  })

  const token = getUser().token

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
                <div className="row">
                  <div className="col-12">
                    <div className="font_grey_medium_3 text-uppercase">
                      My Account /
                    </div>
                    <h3 className="text-uppercase pb-6">My Orders</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Order</th>
                          <th scope="col">Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Total</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.customer?.orders.edges.map((item) => (
                          <tr>
                            <th scope="row">#{item.node.orderNumber}</th>
                            <td>{new Date(item.node.processedAt).toLocaleDateString()}</td>
                            <td>{item.node.fulfillmentStatus}</td>
                            <td> {formatPrice(
                              item.node.currentTotalPrice.currencyCode,
                              item.node.currentTotalPrice.amount)}</td>
                            <td>
                              <Link to="/">View Order</Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default Orders
