// step 1: import
import * as React from "react"

// step 2: define
export function LookBookDetailsItem(props) {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h2 class="text-uppercase">{props.area}</h2>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12 col-md-6">
          <p>
            <img src={props.image_1} alt="{props.area}" />
          </p>
          <p>
            <img src={props.image_2} alt="{props.area}" />
          </p>
          <p>
            <img src={props.image_3} alt="{props.area}" />
          </p>
        </div>

        <div className="col-12 col-md-6">
          <p>
            <img src={props.image_4} alt="{props.area}" />
          </p>
          <p>
            <img src={props.image_5} alt="{props.area}" />
          </p>
          <p>
            <img src={props.image_6} alt="{props.area}" />
          </p>
        </div>
      </div>
    </div>
  )
}
