// step 1: import
import React from "react"
import { Link } from "gatsby"
import * as productListModule from "./product-list-item.module.css"

// step 2: define and export
export function ProductListItem(props) {
  return (
    <div className={productListModule.item}>
      <div className="d-flex flex-column">
        <Link to={props.url} className="no_underline">
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
            {/*
          <li>
            <img
              src={"/icons/color_" + props.color_1 + ".png"}
              alt={props.color_1}
            />
          </li>
          */}
            {props.color_1}
            {props.color_2}
            {props.color_3}
            {props.color_4}
            {props.color_5}
            {props.color_6}
            {props.color_7}
            {props.color_8}
            {props.color_9}
            {props.color_10}
          </ul>
        </Link>
      </div>
    </div>
  )
}
