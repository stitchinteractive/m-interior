// step 1: import
import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { Link } from "gatsby"
import { NumericInput } from "../components/numeric-input"
import BackIcon from "../icons/back"
import Table from "react-bootstrap/Table"
import useStore from '../context/store-context'

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

  const { cart } = useStore()

  return (
    <Layout>
        {
          cart.length > 0 ? cart.map((item, index) => <div>{item.title}</div>) : <div>Your cart is empty.</div>
        }
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
                    <tr>
                      <td>
                        <img
                          src="shop/min_modules/bookshelf_tall_3.png"
                          alt="Tall Bookshelf"
                        />
                      </td>
                      <td>
                        <h4 className="text-uppercase mb-4">Tall Bookshelf</h4>
                        <div className="d-flex py-2">
                          <div className="label_order">Style:</div>
                          <div className="font_medium">Style 1</div>
                        </div>
                        <div className="d-flex py-2">
                          <div className="label_order">Color:</div>
                          <div className="pe-2">
                            <img
                              src="icons/color_brown_white.png"
                              alt=""
                              className="box_shadow mt-1"
                            />
                          </div>
                          <div className="font_medium">
                            Light-tone wood &amp; white gloss
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
                        <Link
                          to="/"
                          className="font_blue font_semibold font_xs text-uppercase font_letterspacing_1"
                        >
                          Change Options
                        </Link>
                        <hr className="dashed" />
                        <div className="font_xs font_semibold">
                          Membership Points: 150P to be accumulated
                        </div>
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                        }}
                      >
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
                      <td>
                        <Link to="/" className="no_underline">
                          <img
                            src="./icons/btn_remove.png"
                            alt="Remove"
                            className="mx-auto"
                          />
                        </Link>
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
      </div>
    </Layout>
  )
}

// step 3: export
export default Cart
