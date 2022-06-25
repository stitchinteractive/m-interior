// step 1: import
import React from "react"
import * as productListModule from "./product-list-item.module.css"
import { Link } from "gatsby"

// step 2: define and export
export function ProductListItem(props) {
  return (
    <div className={productListModule.item}>
      <div className="d-flex flex-column">
        <div className={productListModule.info}>
          <h5>{props.name}</h5>
          <h6>SGD {props.price}</h6>
        </div>
        <div className="d-flex align-items-center">
          <img src={props.image} alt={props.name} className="mx-auto" />
        </div>
        <ul class="listing_colors">
          <li>
            <Link to="/">
              <img src="/icons/color_white.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="/icons/color_grey.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="/icons/color_black.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="/icons/color_blue.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="/icons/color_yellow.png" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="/icons/color_red.png" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
