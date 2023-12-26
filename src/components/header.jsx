import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import SearchIcon from "../icons/search"
import ProfileIcon from "../icons/profile"
import CartIcon from "../icons/cart"
import MenuIcon from "../icons/menu"
import * as headerModule from "./header.module.css"
import Offcanvas from "react-bootstrap/Offcanvas"
import { StoreContext } from "../context/store-context"

function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow((s) => !s)
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="google-site-verification"
            content="wD2FdFRN2IIZQIEwGo__bIMLWj_VGj1nb3NWS9RST4g"
          />
          <meta
            name="facebook-domain-verification"
            content="7zu0801qaj0d5oxnqzaq19adkhxm2a"
          />
          {/*
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
          */}
        </Helmet>
      </div>
      <button onClick={toggleShow}>
        <MenuIcon />
      </button>
      <Offcanvas show={show} onHide={toggleShow} {...props}>
        <Offcanvas.Body>
          <div className="row d-lg-none">
            <div className="col-10 offset-1">
              {/* <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control-sm txt_search"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search"
                />
                <button className="btn btn_search" type="button">
                  <a href="/search-results">
                    <SearchIcon />
                  </a>
                </button>
              </div> */}

              <ul className="nav_link_mobile">
                <li>
                  <Link
                    to="/shop"
                    activeStyle={{ color: "white" }}
                    partiallyActive={true}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    activeStyle={{ color: "white" }}
                    partiallyActive={true}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lookbook"
                    activeStyle={{ color: "white" }}
                    partiallyActive={true}
                  >
                    Lookbook
                  </Link>
                </li>
                <li>
                  <a href="https://www.m-furniture.co" target="_blank">
                    Interior Design
                  </a>
                </li>
                <li>
                  <Link
                    to="/mint-club"
                    activeStyle={{ color: "white" }}
                    partiallyActive={true}
                  >
                    M.INT Club
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    activeStyle={{ color: "white" }}
                    partiallyActive={true}
                  >
                    Blog
                  </Link>
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
  const { checkout, loading } = React.useContext(StoreContext)
  const emptyCart = checkout.lineItems.length === 0

  const [isShown, setIsShown] = useState(false)

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current)
  }

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
                    {/* <li className="d-none d-lg-block"> */}
                    <li>
                      <a href="/search-results/">
                        <SearchIcon />
                      </a>
                    </li>

                    <li>
                      <Link to="/login">
                        <ProfileIcon />
                      </Link>
                    </li>
                    <li>
                      <div id="cart_container">
                        <Link to="/cart">
                          <CartIcon />
                          {!emptyCart && (
                            <div id="cart_items">
                              {checkout.lineItems.length}
                            </div>
                          )}
                        </Link>
                      </div>
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
                      <Link
                        to="/shop"
                        activeStyle={{ color: "white" }}
                        partiallyActive={true}
                      >
                        Shops
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about-us"
                        activeStyle={{ color: "white" }}
                        partiallyActive={true}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lookbook/"
                        activeStyle={{ color: "white" }}
                        partiallyActive={true}
                      >
                        Lookbook
                      </Link>
                    </li>
                    <li>
                      <a href="https://www.m-interior.co" target="_blank">
                        Interior Design
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/mint-club"
                        activeStyle={{ color: "white" }}
                        partiallyActive={true}
                      >
                        M.INT Club
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        activeStyle={{ color: "white" }}
                        partiallyActive={true}
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isShown && (
        <div
          id="container_search"
          className="d-flex justify-content-center align-items-center"
        >
          <div className="col-3">
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
          </div>
          <a href="javascript:void(0);" onClick={handleClick}>
            <img src="/icons/btn_close.png" alt="" className="ms-2" />
          </a>
        </div>
      )}
    </div>
  )
}
