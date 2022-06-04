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
          <div className="col-md-12 col-xl-3">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <div className="col-md-6 col-xl-3">
            <h6 class="text-uppercase">M.INT</h6>
            <ul class="text-uppercase">
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
            <h6 class="text-uppercase">Customer Care</h6>
            <ul class="text-uppercase">
              <li>
                <Link to="/">Faqs</Link>
              </li>
              <li>
                <Link to="/">Shipping</Link>
              </li>
              <li>
                <Link to="/">Exchange &amp; Returns</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-xl-3">
            <div class="row">
              <div className="col-md-3 col-xl-6">
                <h6 class="text-uppercase">We Accept</h6>
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
                <h6 class="text-uppercase">Socials</h6>
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
                <h6 className="text-uppercase">Newsletter</h6>
                <div className="font_sm mb-5">
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control"
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
              <Link to="/">Terms of use</Link>
              <span className={footerModule.spacer}>&bull;</span>
              <Link to="/">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
