// step 1: import
import React, { useState } from "react"
import { Link } from "gatsby"
import * as productListModule from "./product-list-item.module.css"

// step 2: define and export
export function ProductListItem(props) {
  //console.log(props.bgimage)
  const hasVariants = props.variants?.length > 1
  console.log(props.options)
  return (
    <div className="container_overlay">
      <div className={productListModule.item}>
        <Link to={props.url} className="no_underline">
          <div className="d-flex flex-column">
            <div className={productListModule.info}>
              <h5 className="text-uppercase font_letterspacing_1">
                {props.name}
              </h5>
              <div className="font_letterspacing_1 font_grey_medium_3">
                SGD {Math.floor(props.price)}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={props.image} alt={props.name} className="mx-auto" />
            </div>
            <ul className="listing_colors">
              {hasVariants &&
                props.options.map(({ id, name, values }, index) => 
                  values.map((value) => (
                    <li>
                      <img
                        src={
                          "/icons/color_" +
                          value.toString().toLowerCase().replace(/ /g, "_") +
                          ".png"
                        }
                        alt=""
                      />
                    </li>
                  ))
                )[0]}
            </ul>
          </div>
          <div
            className="overlay_img"
            style={{
              backgroundImage: `url(` + props.bgimage + `)`,
            }}
          ></div>
        </Link>
      </div>
    </div>
  )
}
