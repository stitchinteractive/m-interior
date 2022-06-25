// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import Accordion from "react-bootstrap/Accordion"

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
          />
        </div>
        <div className="align-self-start">
          <div className="mb-3 font_grey_variant_2">Filter by</div>
        </div>
      </div>

      <Accordion defaultActiveKey="1" className="nav_accordion">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Modular Furniture</Accordion.Header>
          <Accordion.Body>
            <ul className="listing">
              <li>
                <Link to="/" activeStyle={{ fontWeight: 600 }}>
                  Min-modules
                </Link>
              </li>
              <li>
                <Link to="/" activeStyle={{ fontWeight: 600 }}>
                  Acacia Blocks
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <ul className="listing">
        <li>
          <Link to="/" activeStyle={{ fontWeight: 600 }}>
            Acacia For Pets
          </Link>
        </li>
        <li>
          <Link to="/" activeStyle={{ fontWeight: 600 }}>
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
          />
        </div>
        <div className="align-self-start">
          <div className="mb-3 font_grey_variant_2">Sort by</div>
        </div>
      </div>
      <ul className="listing">
        <li>
          <Link to="/" activeStyle={{ fontWeight: 600 }}>
            Bestselling
          </Link>
        </li>
        <li>
          <Link to="/" activeStyle={{ fontWeight: 600 }}>
            Price (low to high)
          </Link>
        </li>
        <li>
          <Link to="/" activeStyle={{ fontWeight: 600 }}>
            Price (High to low)
          </Link>
        </li>
        <li>
          <Link to="/" activeStyle={{ fontWeight: 600 }}>
            Alphabetically (A to Z)
          </Link>
        </li>
        <li>
          <Link to="/" activeStyle={{ fontWeight: 600 }}>
            Alphabetically (Z to A)
          </Link>
        </li>
      </ul>
    </div>
  )
}
