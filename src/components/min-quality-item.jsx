// step 1: import
import React from "react"
import * as minQualityModule from "./min-quality-item.module.css"

// step 2: define and export
export function MinQualityItem(props) {
  return (
    <div className={minQualityModule.item}>
      <div className="row">
        <p>
          <img src={props.img_src} alt={props.heading} />
        </p>
        <h4 className="text-uppercase">{props.heading}</h4>
        <p>{props.content}</p>
      </div>
    </div>
  )
}
