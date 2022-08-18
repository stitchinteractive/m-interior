import * as React from "react"
import { StoreContext } from "../context/store-context"
import { addToCart as addToCartStyle } from "./add-to-cart.module.css"

export function AddToCart({ variantId, quantity, available, notes, ...props }) {
  const { addVariantToCart, loading } = React.useContext(StoreContext)

  function addToCart(e) {
    debugger
    e.preventDefault()
    addVariantToCart(variantId, quantity, notes)
  }

  return (
    <button
      type="submit"
      onClick={addToCart}
      disabled={!available || loading}
      {...props}
    >
      {available ? "Add to Cart" : "Out of Stock"}
    </button>
  )
}
