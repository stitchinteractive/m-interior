// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import Accordion from "react-bootstrap/Accordion"

// step 2: define
export function NavShop(props) {
  return (
    <div id="nav_account" className="text-uppercase">
      <h2 class="text-uppercase mb-5">Shop</h2>
      <h5 class="mb-3">Filter by</h5>
      <Accordion defaultActiveKey="1">
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

      <h5 className="mb-3">Sort by</h5>
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
