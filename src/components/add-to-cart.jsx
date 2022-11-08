import React, { useState, useLayoutEffect } from "react"
import { StoreContext } from "../context/store-context"
import { Link, navigate } from "gatsby"
import { addToCart as addToCartStyle } from "./add-to-cart.module.css"

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

export function AddToCart({ variantId, quantity, available, notes, ...props }) {
  const { addVariantToCart, checkout, loading } = React.useContext(StoreContext)
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    // navigate(`/earn-points`)
  }
  const handleShow = () => setShow(true)
  const emptyCart = checkout.lineItems.length === 0
  const handleCheckout = () => {
    var checkoutUrl = checkout.webUrl.replace(
      process.env.GATSBY_SHOPIFY_STORE_URL,
      process.env.GATSBY_DOMAIN
    )
    window.location.assign(checkoutUrl)
  }
  const handleViewCart = () => {
    window.location.assign("/cart")
  }

  function addToCart(e) {
    debugger
    e.preventDefault()
    addVariantToCart(variantId, quantity, notes)
    handleShow()
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Item added to cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!emptyCart ? (
            <div>
              <p className="pb-3">
                <Button
                  className="btn btn-outline btn-black w-100"
                  onClick={handleViewCart}
                >
                  View my cart ({checkout.lineItems.length})
                </Button>
              </p>
              <p className="pb-0">
                <Button
                  className="btn btn-tertiary w-100"
                  onClick={handleCheckout}
                >
                  Check out
                </Button>
              </p>
            </div>
          ) : (
            <div></div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <a
            href="javascript:void(0);"
            onClick={handleClose}
            className="font_sm link_underline"
          >
            Continue shopping &gt;
          </a>
        </Modal.Footer>
      </Modal>
      <button
        type="submit"
        onClick={addToCart}
        disabled={!available || loading}
        {...props}
      >
        {available ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  )
}
