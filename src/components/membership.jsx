import * as React from "react"
import { Link } from "gatsby"

export function Membership() {
  return (
    <div className="bg_membership">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-5 align-self-end">
            <div className="pt-5">
              <div className="padding_featured">
                <img src="/membership.png" />
              </div>
            </div>
          </div>
          <div className="col-md-7 align-self-center">
            <div className="membership_padding">
              <h2 className="text-uppercase pb-3">Get exclusive with us</h2>
              <p className="pb-5">
                Join M.INT Club and be a part of something bigger! Gain access
                to member-only benefits and stay informed with the latest
                interior trends and news from us.
              </p>
              <p>
                <Link to="/">
                  <button type="button" className="btn btn-outline">
                    Join now and enjoy 10% off your first purchase
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
