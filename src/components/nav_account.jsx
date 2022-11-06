// step 1: import
import * as React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import Accordion from "react-bootstrap/Accordion"
import * as navShopModule from "./nav-shop.module.css"

// step 2: define
export function NavAccount(props) {
  return (
    <div id="nav_account" className="text-uppercase">
      <Accordion defaultActiveKey="0" className="nav_accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="text-uppercase">M.INT Club</div>
          </Accordion.Header>
          <Accordion.Body>
            <ul className={navShopModule.listing}>
              <li>
                <Link to="/dashboard" activeStyle={{ fontWeight: 600 }}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/earn-points" activeStyle={{ fontWeight: 600 }}>
                  Earn Points
                </Link>
              </li>
              <li>
                <Link to="/redeem-points" activeStyle={{ fontWeight: 600 }}>
                  Redeem Points
                </Link>
              </li>
              <li>
                <Link to="/refer-a-friend" activeStyle={{ fontWeight: 600 }}>
                  Refer A Friend
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="text-uppercase">My Account</div>
          </Accordion.Header>
          <Accordion.Body>
            <ul className={navShopModule.listing}>
              <li>
                <Link to="/profile" activeStyle={{ fontWeight: 600 }}>
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/orders" activeStyle={{ fontWeight: 600 }}>
                  My Orders
                </Link>
              </li>
              <li>
                <Link to="/account-activity" activeStyle={{ fontWeight: 600 }}>
                  Account Activity
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  activeStyle={{ fontWeight: 600 }}
                  onClick={(event) => {
                    event.preventDefault()
                    logout(() => navigate(`/login`))
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <div className="text-uppercase">Shipping &amp; Billing</div>
          </Accordion.Header>
          <Accordion.Body>
            <ul className={navShopModule.listing}>
              <li>
                <Link to="/saved-address" activeStyle={{ fontWeight: 600 }}>
                  Saved Address
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
