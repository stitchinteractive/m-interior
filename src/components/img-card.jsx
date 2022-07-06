// step 1: import
import * as React from "react"

// step 2: define
export function ImgCard(props) {
  return (
    <div
      className="img_card"
      style={{
        background: "url(" + props.background + ") center center no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay h-100">
        <div className="text-uppercase">{props.category}</div>
        <h4 className="text-uppercase">{props.sub_category}</h4>
        <div className="font_xs font_medium line_height_dense">
          {props.description}
        </div>
      </div>
    </div>
  )
}
