// step 1: import
import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { Link } from "gatsby"
import { NumericInput } from "../components/numeric-input"
import BackIcon from "../icons/back"
import Table from "react-bootstrap/Table"
import { formatPrice } from "../utils/format-price"

// step 2: define component
const Cart = ({location}) => {
    var emptyCart = false
    var lineItems = ""
    var grandTotal = ""
    if(typeof window !== `undefined`) {
        //debugger
        lineItems = location.state.data
        grandTotal = location.state.grandTotal
        console.log(lineItems)
        console.log(grandTotal)
        emptyCart = false
    } else {
        emptyCart = true
    }

    
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

  return (
    <Layout>
      <div className="bg_grey_light_2">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 mb-50">
              <h2 className="text-uppercase mb-4">Your Order</h2>
              <div className="d-flex btn_back">
                <BackIcon />
                <Link
                  to="/orders"
                  className="ms-2 font_yellow text-uppercase font_semibold no_underline"
                >
                  Back to your orders
                </Link>
              </div>
            </div>
            <div className="col-12">
            {emptyCart ? (
                <div>
                <h4 className="text-uppercase py-3">Your Order is Empty</h4>
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
                            textAlign: "right",
                          }}
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {lineItems.edges.map((item) => (
                      <tr>
                      <td>
                      <img
                            src={item.node.variant.image.url}
                            alt={item.node.variant.image.altText ?? item.node.variant.title}
                            width="160"
                            height="160"
                        />
                      </td>
                      <td>
                        <h4 className="text-uppercase mb-4">{item.node.title}</h4>
                        <div className="d-flex py-2">
                          <div className="label_order">Style:</div>
                          <div className="font_medium">{item.node.variant.title === "Default Title" ? "" : item.node.variant.title}</div>
                        </div>
                        <div className="d-flex py-2">
                          <div className="label_order">Color:</div>
                          <div className="pe-2">
                            <img
                              src={"icons/color_"+item.node.variant.title.toString().toLowerCase().replace(/ /g,"_")+".png"}
                              alt=""
                              className="box_shadow mt-1"
                            />
                          </div>
                          <div className="font_medium">
                            {item.node.variant.title === "Default Title" ? "" : item.node.variant.title}
                          </div>
                        </div>
                        <div className="order_note my-3">
                          <div className="text-uppercase font_medium">
                            Order Note
                          </div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </div>
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {item.node.currentQuantity}
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                        }}
                      >
                        {formatPrice(
                      item.node.originalTotalPrice.currencyCode,
                      item.node.originalTotalPrice.amount
                    )}
                      </td>
                    </tr>
                    ))}
                    </tbody>
                  </Table>

                  <div className="text-end text-uppercase font_semibold">
                    Total Amount: {formatPrice(
                      grandTotal.currencyCode,
                      grandTotal.amount
                    )}
                  </div>
                  <div className="text-center py-5">
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
