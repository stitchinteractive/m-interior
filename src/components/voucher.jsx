// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import ArrowNext from "../icons/arrow-next"

// step 2: define
export function Voucher(props) {
  return (
    <div className="col-12 col-md-4 mb-4">
      <Link to="/" className="no_underline">
        <div className="voucher">
          <h5 className="mb-3">{props.heading}</h5>
          <div className="mb-0">{props.points}</div>
          <div className="inline-block">
            <ArrowNext />
          </div>
        </div>
      </Link>
    </div>
  )
}
