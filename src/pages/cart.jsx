// step 1: import
import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { Link } from "gatsby"
import { NumericInput } from "../components/numeric-input"
import BackIcon from "../icons/back"
import Table from "react-bootstrap/Table"

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

  const [quantity, setQuantity] = React.useState(1)

  return (
    <Layout>
      <div className="container">
        <div class="row padding_heading">
          <div class="col-12">
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
        </div>
        <div className="row row_padding">
          <div className="col-12">
            <div className="p-4">
              <h4 className="text-uppercase py-3">Your Order</h4>
              <Table>
                <thead>
                  <tr>
                    <th width="20%">Product</th>
                    <th>&nbsp;</th>
                    <th>Quantity</th>
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
                  <tr>
                    <td>
                      <img
                        src="shop/min_modules/bookshelf_tall_3.png"
                        alt="Tall Bookshelf"
                      />
                    </td>
                    <td>
                      <div className="font_semibold text-uppercase">
                        Tall Bookshelf
                      </div>
                      <div className="d-flex py-2">
                        <div className="label_order">Style:</div>
                        <div className="font_medium text-uppercase">
                          Style 1
                        </div>
                      </div>
                      <div className="d-flex py-2">
                        <div className="label_order">Color:</div>
                        <div className="pe-2">
                          <img src="icons/color_brown_white.png" alt="" />
                        </div>
                        <div>Light-tone wood &amp; white gloss</div>
                      </div>
                      <div className="order_note my-3">
                        <div class="text-uppercase font_medium">Order Note</div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </div>
                      <hr className="dashed" />
                      <div className="font_xs font_semibold">
                        Membership Points: 150P to be accumulated
                      </div>
                    </td>

                    <td>
                      <NumericInput
                        aria-label="Qu
a                         ntity"
                        onIncrement={() =>
                          setQuantity((q) => Math.min(q + 1, 20))
                        }
                        onDecrement={() =>
                          setQuantity((q) => Math.max(1, q - 1))
                        }
                        onChange={(event) =>
                          setQuantity(event.currentTarget.value)
                        }
                        value={quantity}
                        min="1"
                        max="20"
                      />
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                      }}
                    >
                      SGD 1,063
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div className="text-end text-uppercase font_semibold">
                Total Amount: SGD 1,063
              </div>
              <div className="text-center py-5">
                <Link to="/checkout">
                  <button
                    type="button"
                    className="btn btn-tertiary text-uppercase"
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default Cart
