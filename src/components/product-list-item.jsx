// step 1: import
import React from "react"
import * as productListModule from "./product-list-item.module.css"

// step 2: define and export
export function ProductListItem(props) {
  return (
    <div className={productListModule.item}>
      <div className="d-flex flex-column">
        <div className={productListModule.info}>
          <h5 className="font_letterspacing_1">{props.name}</h5>
          <div className="font_letterspacing_1 font_grey_medium_3">
            SGD {props.price}
          </div>
        </div>
        <div className="d-flex align-items-center">
          <img src={props.image} alt={props.name} className="mx-auto" />
        </div>
        <ul class="listing_colors">
          <li>
            <img
              src={"/icons/color_" + props.color + ".png"}
              alt={props.color}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
