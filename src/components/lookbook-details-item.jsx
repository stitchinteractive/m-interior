// step 1: import
import * as React from "react"

// step 2: define
export function LookBookDetailsItem(props) {
  return (
    <div>
      <div className="row row_padding">
        <div className="col-12">
          <h2 className="text-uppercase pb-7">{props.area}</h2>
        </div>
        <div className="col-12 col-md-6">
          <p className="animate">
            <img src={props.image_1} alt="{props.area}" />
          </p>
          <p className="animate">
            <img src={props.image_2} alt="{props.area}" />
          </p>
          <p className="animate">
            <img src={props.image_3} alt="{props.area}" />
          </p>
        </div>

        <div className="col-12 col-md-6">
          <p className="animate">
            <img src={props.image_4} alt="{props.area}" />
          </p>
          <p className="animate">
            <img src={props.image_5} alt="{props.area}" />
          </p>
          <p className="animate">
            <img src={props.image_6} alt="{props.area}" />
          </p>
        </div>
      </div>
    </div>
  )
}
