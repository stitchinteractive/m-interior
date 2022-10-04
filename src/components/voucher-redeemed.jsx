// step 1: import
import * as React from "react"
import { Link } from "gatsby"

// step 2: define
export function VoucherRedeemed(props) {
  return (
    <div className="col-12 col-lg-4 mb-4">
      <Link to="/" className="no_underline">
        <div className="voucher_redeemed">
          <h5 className="mb-3 text-uppercase">{props.heading}</h5>
          <div className="mb-0">{props.points}</div>
          Completed
          <div className="note">{props.note}</div>
        </div>
      </Link>
    </div>
  )
}
