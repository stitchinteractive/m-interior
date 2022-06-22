// step 1: import
import * as React from "react"
import { Link } from "gatsby"

// step 2: define
export function NavAccount(props) {
  return (
    <div className="text-uppercase">
      <div className="font_grey_variant">My Account</div>
      <ul className="listing">
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
        <li>
          <Link to="/orders">My Orders</Link>
        </li>
        <li>
          <Link to="/account-activity">Account Activity</Link>
        </li>
      </ul>
      <div className="font_grey_variant">Shipping &amp; Billing</div>
      <ul className="listing">
        <li>
          <Link to="/saved-address">Saved Address</Link>
        </li>
      </ul>
    </div>
  )
}
