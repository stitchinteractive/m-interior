// step 1: import
import * as React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

// step 2: define
export function NavAccount(props) {
  return (
    <div id="nav_account" className="text-uppercase">
      <div className="font_grey_medium_3">My Account</div>
      <ul className="listing">
        <li>
          <Link to="/profile" activeStyle={{ fontWeight: 600 }}>
            My Profile
          </Link>
        </li>
        <li>
          <Link to="/logout" activeStyle={{ fontWeight: 600 }} onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/login`))
            }}>
            Logout
          </Link>
        </li>
        {/*<li>
          <Link to="/orders" activeStyle={{ fontWeight: 600 }}>
            My Orders
          </Link>
        </li>
        <li>
          <Link to="/account-activity" activeStyle={{ fontWeight: 600 }}>
            Account Activity
          </Link>
        </li>*/}
      </ul>
      {/*<div className="font_grey_medium_3">Shipping &amp; Billing</div>
      <ul className="listing">
        <li>
          <Link to="/saved-address" activeStyle={{ fontWeight: 600 }}>
            Saved Address
          </Link>
        </li>
      </ul>*/}
    </div>
  )
}
