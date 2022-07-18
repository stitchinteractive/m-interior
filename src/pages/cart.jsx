// step 1: import
import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { Link } from "gatsby"
import { NumericInput } from "../components/numeric-input"
import BackIcon from "../icons/back"
import Table from "react-bootstrap/Table"
import { StoreContext } from "../context/store-context"
import { LineItem } from "../components/line-item"
import { formatPrice } from "../utils/format-price"

// step 2: define component
const Cart = () => {
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

  debugger
  const { checkout, loading } = React.useContext(StoreContext)
  const emptyCart = checkout.lineItems.length === 0

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  return (
    <Layout>
      <div className="bg_grey_light_2">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 mb-50">
              <h2 className="text-uppercase mb-4">Shopping Cart</h2>
              <div className="d-flex btn_back">
                <BackIcon />
                <Link
                  to="/shop"
                  className="ms-2 font_yellow text-uppercase font_semibold no_underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
            <div className="col-12">
              {emptyCart ? (
                <div>
                <h4 className="text-uppercase py-3">Your Cart is Empty</h4>
                  <p>
                    Looks like you haven’t found anything yet. We understand that
                    sometimes it’s hard to choose — maybe this helps:
                  </p>
                  
                </div>
              ) : (
                <div>
                  <h4 className="text-uppercase py-3">Your Order</h4>
                  <Table responsive className="table_cart">
                    <thead>
                      <tr>
                        <th width="20%">Product</th>
                        <th>&nbsp;</th>
                        <th
                          style={{
                            textAlign: "center",
                          }}
                        >
                          Quantity
                        </th>
                        <th
                          style={{
                            textAlign: "center",
                          }}
                        >
                          Remove
                        </th>
                        <th
                          style={{
                            textAlign: "right",
                          }}
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {checkout.lineItems.map((item) => (
                      <LineItem item={item} key={item.id} />
                    ))}
                    </tbody>
                  </Table>



                  <div className="text-end text-uppercase font_semibold">
                    Total Amount: {formatPrice(
                      checkout.totalPriceV2.currencyCode,
                      checkout.totalPriceV2.amount
                    )}
                  </div>
                  <div className="text-center py-5">
                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="btn btn-tertiary text-uppercase"
                  >
                    Checkout
                  </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default Cart
