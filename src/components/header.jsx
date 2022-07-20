import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import SearchIcon from "../icons/search"
import ProfileIcon from "../icons/profile"
import CartIcon from "../icons/cart"
import MenuIcon from "../icons/menu"
import * as headerModule from "./header.module.css"
import Offcanvas from "react-bootstrap/Offcanvas"

function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow((s) => !s)

  return (
    <>
      <button onClick={toggleShow}>
        <MenuIcon />
      </button>
      <Offcanvas show={show} onHide={toggleShow} {...props}>
        <Offcanvas.Body>
          <div className="row d-lg-none">
            <div className="col-10 offset-1">
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control-sm txt_search"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search"
                />
                <button className="btn btn_search" type="button">
                  <Link to="/search-results">
                    <SearchIcon />
                  </Link>
                </button>
              </div>
              <ul className="nav_link_mobile">
                <li>
                  <Link to="/shop" activeStyle={{ color: "white" }}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" activeStyle={{ color: "white" }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/lookbook" activeStyle={{ color: "white" }}>
                    Lookbook
                  </Link>
                </li>
                <li>
                  <Link to="/interior-design" activeStyle={{ color: "white" }}>
                    Interior Design
                  </Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export function Header() {
  return (
    <div className={headerModule.container_header}>
      <header className={headerModule.header}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 col-md-2 d-flex align-items-center">
              <Link to="/">
                <Logo className="logo" />
              </Link>
            </div>
            <div className="col-8 col-md-10">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                  <ul className={headerModule.nav_link_icon}>
                    <li className="d-none d-lg-block">
                      <Link to="/search-results">
                        <SearchIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        <ProfileIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart">
                        <CartIcon />
                      </Link>
                    </li>
                    <li className="d-lg-none">
                      {["end"].map((placement, idx) => (
                        <OffCanvasExample
                          key={idx}
                          placement={placement}
                          name={placement}
                        />
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row d-none d-lg-block">
                <div className="col-12 col-md-12 d-flex justify-content-end">
                  <ul className={headerModule.nav_link}>
                    <li>
                      <Link to="/shop" activeStyle={{ color: "white" }}>
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" activeStyle={{ color: "white" }}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/lookbook" activeStyle={{ color: "white" }}>
                        Lookbook
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/interior-design"
                        activeStyle={{ color: "white" }}
                      >
                        Interior Design
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
