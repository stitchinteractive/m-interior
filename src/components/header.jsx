import React, { useLayoutEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import SearchIcon from "../icons/search"
import ProfileIcon from "../icons/profile"
import CartIcon from "../icons/cart"
import MenuIcon from "../icons/menu"
import * as headerModule from "./header.module.css"

function AnimateMobileNav({ children }) {
  return <div className="mobile_nav_container">{children}</div>
}

// show after 2 seconds
setTimeout(function () {
  document.getElementById("nav_mobile").style.visibility = "visible"
}, 2000)

export function Header() {
  // animate mobile menu
  const [reversed, setReversed] = useState(false)
  const el = useRef()
  const q = gsap.utils.selector(el)

  // store the timeline in a ref.
  const tl = useRef()

  useLayoutEffect(() => {
    // add mobile nav container and play on first render
    tl.current = gsap.timeline().to(q(".mobile_nav_container"), {
      x: 768,
    })
  }, [])

  useLayoutEffect(() => {
    // toggle the direction of our timeline
    tl.current.reversed(reversed)
  }, [reversed])

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
                      <Link to="/">
                        <SearchIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        <ProfileIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <CartIcon />
                      </Link>
                    </li>
                    <li className="d-lg-none">
                      <button onClick={() => setReversed(!reversed)}>
                        <MenuIcon />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row d-none d-lg-block">
                <div className="col-12 col-md-12 d-flex justify-content-end">
                  <ul className={headerModule.nav_link}>
                    <li>
                      <Link to="/">Shop</Link>
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
                    {/*
                    <li>
                      <Link to="/mint-club">M.INT Club</Link>
                    </li>
                    */}
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div ref={el}>
            <AnimateMobileNav>
              {/* mobile navigation */}
              <div className={headerModule.nav_mobile} id="nav_mobile">
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
                        <SearchIcon />
                      </button>
                    </div>
                    <ul className={headerModule.nav_link_mobile}>
                      <li>
                        <Link to="/">Shop</Link>
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
                      {/*
                      <li>
                        <Link to="/mint-club">M.INT Club</Link>
                      </li>
                      */}
                      <li>
                        <Link to="/">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end mobile navigation */}
            </AnimateMobileNav>
          </div>
        </div>
      </header>
    </div>
  )
}
