// step 1: import
import * as React from "react"
import { Link } from "gatsby"

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
        <div class="text-uppercase">{props.category}</div>
        <h4 className="text-uppercase">{props.sub_category}</h4>
      </div>
    </div>
  )
}
