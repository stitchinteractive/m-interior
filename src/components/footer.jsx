import * as React from "react"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import FacebookIcon from "../icons/fb"
import InstagramIcon from "../icons/ig"
import VisaIcon from "../icons/visa"
import MasterIcon from "../icons/master"
import PaypalIcon from "../icons/paypal"
import * as footerModule from "./footer.module.css"

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-4 offset-4 col-xl-3 offset-xl-0">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <div className="col-md-6 col-xl-3">
            <h5 className="text-uppercase mb-3 d-none d-md-block">M.INT</h5>
            <ul className="text-uppercase">
              <li>
                <Link to="/">Complimentary design service</Link>
              </li>
              <li>
                <Link to="/">Min+modules configurator</Link>
              </li>
              <li>
                <Link to="/">Media</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-xl-3">
            <h5 className="text-uppercase mb-3">Customer Care</h5>
            <ul className="text-uppercase">
              <li>
                <Link to="/faqs" activeStyle={{ fontWeight: 700 }}>
                  Faqs
                </Link>
              </li>
              <li>
                <Link to="/shipping" activeStyle={{ fontWeight: 700 }}>
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/exchange-returns" activeStyle={{ fontWeight: 700 }}>
                  Exchange &amp; Returns
                </Link>
              </li>
              <li>
                <Link to="/contact-us" activeStyle={{ fontWeight: 700 }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-xl-3">
            <div className="row">
              <div className="col-md-3 col-xl-6">
                <h5 className="text-uppercase mb-3">We Accept</h5>
                <ul className={footerModule.icons}>
                  <li>
                    <Link to="/">
                      <VisaIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <MasterIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <PaypalIcon />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-xl-6">
                <h5 className="text-uppercase mb-3">Socials</h5>
                <ul className={footerModule.icons}>
                  <li>
                    <Link to="/">
                      <FacebookIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <InstagramIcon />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-8 col-md-6 col-xl-12 offset-2 offset-md-0">
                <h5 className="text-uppercase mb-3">Subscribe</h5>
                <div className="font_sm mb-5">
                  <div className="input-group textfield_footer mb-2">
                    <input
                      type="text"
                      className={`form-control ${footerModule.subscribe}`}
                      placeholder="Enter your email"
                      aria-label="Enter your email"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="font_xs">
                    Subscribe to our newsletter and enjoy 10% off!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={footerModule.terms}>
            <div className="font_sm">
              <Link to="/terms">Terms of use</Link>
              <span className={footerModule.spacer}>&bull;</span>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
