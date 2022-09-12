// step 1: import
import * as React from "react"
import { Link } from "gatsby"

// step 2: define
export function VoucherRedeemed(props) {
  return (
    <div className="col-12 col-md-4 d-flex">
      <div className="voucher_redeemed align-self-center">
        <h4 className="mb-3">{props.heading}</h4>
        <div className="mb-0">{props.points}</div>
        <Link to="/">Completed</Link>
      </div>
    </div>
  )
}
