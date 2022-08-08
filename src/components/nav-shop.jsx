// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import Accordion from "react-bootstrap/Accordion"
import * as navShopModule from "./nav-shop.module.css"

// step 2: define
export function NavShop(props) {
  return (
    <div id="nav_account" className="text-uppercase">
      <h2 className="text-uppercase mb-70">Shop</h2>
      <div className="d-flex align-items-start">
        <div className="align-self-start">
          <img
            src="/icons/filter.png"
            className="mt-2 me-2"
            width="16"
            height="16"
            alt="Filter"
          />
        </div>
        <div className="align-self-start">
          <div className="mb-3 font_grey_medium_4">Filter by</div>
        </div>
      </div>

      <Accordion defaultActiveKey="1" className="nav_accordion">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="font_medium">Modular Furniture</div>
          </Accordion.Header>
          <Accordion.Body>
            <ul className={navShopModule.listing}>
              <li>
                <Link
                  to="/shop/modular-furniture/min-modules"
                  activeStyle={{ fontWeight: 600, color: "#FBCB02" }}
                >
                  Min+modules
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/modular-furniture/acacia-blocks"
                  activeStyle={{ fontWeight: 600, color: "#FBCB02" }}
                >
                  Acacia Blocks
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <ul className="listing font_medium">
        <li>
          <Link
            to="/shop/acacia-for-pets"
            activeStyle={{ fontWeight: 600, color: "#FBCB02" }}
          >
            Acacia For Pets
          </Link>
        </li>
        <li>
          <Link
            to="/shop/accessories"
            activeStyle={{ fontWeight: 600, color: "#FBCB02" }}
          >
            Accessories
          </Link>
        </li>
      </ul>

      <br />
      <br />

      <div className="d-flex align-items-start">
        <div className="align-self-start">
          <img
            src="/icons/sort.png"
            className="mt-2 me-2"
            width="16"
            height="16"
            alt="Sort"
          />
        </div>
        <div className="align-self-start">
          <div className="mb-3 font_grey_medium_4">Sort by</div>
        </div>
      </div>
      <ul className="listing font_medium">
        <li>
          <Link to="?sortby=bestselling" activeStyle={{ fontWeight: 600 }}>
            Bestselling
          </Link>
        </li>
        <li>
          <Link to="?sortby=lowtohigh" activeStyle={{ fontWeight: 600 }}>
            Price (low to high)
          </Link>
        </li>
        <li>
          <Link to="?sortby=hightolow" activeStyle={{ fontWeight: 600 }}>
            Price (High to low)
          </Link>
        </li>
        <li>
          <Link to="?sortby=AtoZ" activeStyle={{ fontWeight: 600 }}>
            Alphabetically (A to Z)
          </Link>
        </li>
        <li>
          <Link to="?sortby=ZtoA" activeStyle={{ fontWeight: 600 }}>
            Alphabetically (Z to A)
          </Link>
        </li>
      </ul>
    </div>
  )
}
