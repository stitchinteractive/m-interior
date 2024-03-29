// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import Accordion from "react-bootstrap/Accordion"
import * as navShopModule from "./nav-shop.module.css"

// step 2: define
export function NavShop(props) {
  debugger
  const sortby = props.sortby
  console.log(sortby)

  var bestsellingcode = { color: "#202020" }
  var lowtohighcode = { color: "#202020" }
  var hightolowcode = { color: "#202020" }
  var atozcode = { color: "#202020" }
  var ztoacode = { color: "#202020" }

  if (sortby === null || sortby === "bestselling") {
    bestsellingcode = { color: "#FBCB02" }
  } else {
    if (sortby === "lowtohigh") {
      lowtohighcode = { color: "#FBCB02" }
    } else if (sortby === "hightolow") {
      hightolowcode = { color: "#FBCB02" }
    } else if (sortby === "AtoZ") {
      atozcode = { color: "#FBCB02" }
    } else if (sortby === "ZtoA") {
      ztoacode = { color: "#FBCB02" }
    }
  }

  return (
    <div id="nav_account" className="text-uppercase">
      <h2 className="text-uppercase mb-70">Shop</h2>

      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="1" className={navShopModule.no_border}>
          <Accordion.Header>
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
                <div className="mt-1">Filter by</div>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="font_medium">Modular Furniture</div>
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
            <div className="font_medium mb-3">
              <Link
                to="/shop/acacia-for-pets"
                activeStyle={{ fontWeight: 600, color: "#FBCB02" }}
              >
                Acacia For Pets
              </Link>
            </div>
            <div className="font_medium">
              <Link
                to="/shop/accessories"
                activeStyle={{ fontWeight: 600, color: "#FBCB02" }}
              >
                Accessories
              </Link>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        {/* mobile only */}
        <Accordion.Item eventKey="2" className="d-lg-none">
          <Accordion.Header>
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
                <div className="mt-1">Sort by</div>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="listing font_medium">
              <li>
                <Link to="?sortby=bestselling" style={bestsellingcode}>
                  Bestselling
                </Link>
              </li>
              <li>
                <Link to="?sortby=lowtohigh" style={lowtohighcode}>
                  Price (low to high)
                </Link>
              </li>
              <li>
                <Link to="?sortby=hightolow" style={hightolowcode}>
                  Price (High to low)
                </Link>
              </li>
              <li>
                <Link to="?sortby=AtoZ" style={atozcode}>
                  Alphabetically (A to Z)
                </Link>
              </li>
              <li>
                <Link to="?sortby=ZtoA" style={ztoacode}>
                  Alphabetically (Z to A)
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        {/* end mobile only */}
      </Accordion>

      {/* desktop only */}
      <Accordion defaultActiveKey="3" className="d-none d-lg-block">
        <Accordion.Item eventKey="3">
          <Accordion.Header>
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
                <div className="mt-1">Sort by</div>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <ul className="listing font_medium">
              <li>
                <Link to="?sortby=bestselling" style={bestsellingcode}>
                  Bestselling
                </Link>
              </li>
              <li>
                <Link to="?sortby=lowtohigh" style={lowtohighcode}>
                  Price (low to high)
                </Link>
              </li>
              <li>
                <Link to="?sortby=hightolow" style={hightolowcode}>
                  Price (High to low)
                </Link>
              </li>
              <li>
                <Link to="?sortby=AtoZ" style={atozcode}>
                  Alphabetically (A to Z)
                </Link>
              </li>
              <li>
                <Link to="?sortby=ZtoA" style={ztoacode}>
                  Alphabetically (Z to A)
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* end desktop only */}
    </div>
  )
}
