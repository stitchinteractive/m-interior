// step 1: import
import * as React from "react"
import { Link } from "gatsby"

// step 2: define
export function LookBookItem(props) {
  return (
    <div className={props.bg}>
      <div className="padding_lookbook d-md-flex">
        <div className="col col-md-1 align-self-start">
          <div className="text_vertical">{props.area}</div>
        </div>
        <div className="col col-md-6">
          <p>
            <img src={props.image_large} alt="{props.area}" />
          </p>
        </div>
        <div className="col col-md-4 offset-md-1 d-flex flex-wrap">
          <div className="align-self-end">
            <p>{props.content}</p>
            <p>
              <Link to={props.link}>
                <button type="submit" className="btn btn-light">
                  Step in
                </button>
              </Link>
            </p>
          </div>
          <div className="align-self-end d-none d-md-block">
            <p>
              <img src={props.image_small} alt="{props.area}" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
