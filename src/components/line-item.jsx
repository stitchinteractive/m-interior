import * as React from "react"
import debounce from "lodash.debounce"
import { StoreContext } from "../context/store-context"
import { formatPrice } from "../utils/format-price"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import DeleteIcon from "../icons/delete"
import { Link } from "gatsby"
import { NumericInput } from "./numeric-input"
import {
  title,
  remove,
  variant,
  totals,
  priceColumn,
} from "./line-item.module.css"

export function LineItem({ item }) {
  const {
    removeLineItem,
    checkout,
    updateLineItem,
    loading,
  } = React.useContext(StoreContext)
  const [quantity, setQuantity] = React.useState(item.quantity)

  const variantImage = {
    ...item.variant.image,
    originalSrc: item.variant.image.src,
  }
  const price = formatPrice(
    item.variant.priceV2.currencyCode,
    Number(item.variant.priceV2.amount)
  )

  const subtotal = formatPrice(
    item.variant.priceV2.currencyCode,
    Number(item.variant.priceV2.amount) * quantity
  )

  const handleRemove = () => {
    removeLineItem(checkout.id, item.id)
  }

  const uli = debounce(
    (value) => updateLineItem(checkout.id, item.id, value),
    300
  )
  // eslint-disable-next-line
  const debouncedUli = React.useCallback((value) => uli(value), [])

  const handleQuantityChange = (value) => {
    if (value !== "" && Number(value) < 1) {
      return
    }
    setQuantity(value)
    if (Number(value) >= 1) {
      debouncedUli(value)
    }
  }

  function doIncrement() {
    handleQuantityChange(Number(quantity || 0) + 1)
  }

  function doDecrement() {
    handleQuantityChange(Number(quantity || 0) - 1)
  }

  const image = React.useMemo(
    () =>
      getShopifyImage({
        image: variantImage,
        layout: "constrained",
        crop: "contain",
        width: 160,
        height: 160,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [variantImage.src]
  )

  return (
    <tr>
      <td>
      {image && (
          <GatsbyImage
            key={variantImage.src}
            image={image}
            alt={variantImage.altText ?? item.variant.title}
          />
        )}
      </td>
      <td>
        <h4 className="text-uppercase mb-4">{item.title}</h4>
        <div className="d-flex py-2">
          <div className="label_order">Style:</div>
          <div className="font_medium">{item.variant.title === "Default Title" ? "" : item.variant.title}</div>
        </div>
        <div className="d-flex py-2">
          <div className="label_order">Color:</div>
          <div className="pe-2">
            <img
              src={"icons/color_"+item.variant.title.toString().toLowerCase().replace(/ /g,"_")+".png"}
              alt=""
              className="box_shadow mt-1"
            />
          </div>
          <div className="font_medium">
            {item.variant.title === "Default Title" ? "" : item.variant.title}
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
        {/*
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
        */}
        
      </td>
      <td
        style={{
          textAlign: "center",
        }}
      >
        <NumericInput
          disabled={loading}
          value={quantity}
          aria-label="Quantity"
          onIncrement={doIncrement}
          onDecrement={doDecrement}
          onChange={(e) => handleQuantityChange(e.currentTarget.value)}
        />
      </td>
      <td>
        <button onClick={handleRemove}>
          <img
            src="./icons/btn_remove.png"
            alt="Remove"
            className="mx-auto"
          />
        </button>
      </td>
      <td
        style={{
          textAlign: "right",
        }}
      >
        {subtotal}
      </td>
    </tr>





    
  )
}
