// step 1: import
import React, { useState } from "react"
import { Link } from "gatsby"
import * as productListModule from "./product-list-item.module.css"

// step 2: define and export
export function ProductListItem(props) {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <div className={productListModule.container}>
      <div className={productListModule.item}>
        <Link to={props.url} className="no_underline">
          <div
            className="d-flex flex-column"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className={productListModule.info}>
              <h5 className="font_letterspacing_1">{props.name}</h5>
              <div className="font_letterspacing_1 font_grey_medium_3">
                SGD {props.price}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={props.image} alt={props.name} className="mx-auto" />
            </div>
            <ul className="listing_colors">
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
          </div>
          {/*
          {isHovering && (
            
          )}
          */}
        </Link>
      </div>
      {isHovering && (
        <div
          className={productListModule.img_hover}
          style={{
            backgroundImage: `url(/shop/acacia/acacia_block_1_hover.jpg)`,
          }}
        ></div>
      )}
    </div>
  )
}
