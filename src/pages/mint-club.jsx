// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { MembershipTable } from "../components/membership-table"
import AsteriskIcon from "../icons/asterisk"
import AsteriskIconBlack from "../icons/asterisk-black"
import Accordion from "react-bootstrap/Accordion"

// import module.css
import * as mintClubModule from "./mint-club.module.css"

// step 2: define component
const MintClub = () => {
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap.utils.toArray(".animate").forEach(function (e) {
      gsap.from(e, {
        duration: 0.8,
        ease: "power1.out",
        opacity: 0,
        y: 100,
        scrollTrigger: e,
        onComplete: () => console.log(e),
      })
    })
  })

  return (
    <Layout>
      <div>
        <div className="bg_blue animate">
          <div
            id={mintClubModule.banner}
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              background: "url(/home/banner_2.jpg) center center no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h1 className="text-uppercase pb-2">M.INT club</h1>
            <div className="font_xxl text-uppercase pb-2">
              <strong>is</strong> <i>more than just </i>
              <strong>a rewards program</strong>
            </div>
            <p className="pb-10">
              Join our community and be a part of something bigger.
            </p>
            <p className="pb-3">Get a 10% off welcome gift when you join us!</p>
            <p>
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-outline-large btn-white me-3"
                >
                  Join the club
                </button>
              </Link>
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-outline btn-outline-large"
                >
                  Log In
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div className="bg_black font_white line_height_dense">
          <div className="container">
            <div className="row padding_heading animate">
              <h2 className="text-uppercase pb-5 d-flex justify-content-center align-items-center">
                <div className="pe-3">
                  <AsteriskIcon />
                </div>
                Members Only Benefits
                <div className="ps-3">
                  <AsteriskIcon />
                </div>
              </h2>
              <div className="col-12 col-md-10 offset-md-1 pt-5 animate">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row pb-5">
                      <div className="col-2">
                        <img src="/icons/club_discounts.png" alt="Discounts" />
                      </div>
                      <div className="col-10 col-md-9">
                        <h5 className="text-uppercase pb-3">Discounts</h5>
                        <p>Gain access to exclusive discounts and deals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row pb-5">
                      <div className="col-2">
                        <img
                          src="/icons/club_content.png"
                          alt="Exclusive content"
                        />
                      </div>
                      <div className="col-10 col-md-9">
                        <h5 className="text-uppercase pb-3">
                          Exclusive content
                        </h5>
                        <p>
                          Unlock interior style guides and services for members
                          only.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row pb-5">
                      <div className="col-2">
                        <img
                          src="/icons/club_events.png"
                          alt="Events and workshops"
                        />
                      </div>
                      <div className="col-10 col-md-9">
                        <h5 className="text-uppercase pb-3">
                          Events and workshops
                        </h5>
                        <p>
                          Gain access to invite-only experiences and build a
                          community with us.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row pb-5">
                      <div className="col-2">
                        <img src="/icons/club_dibs.png" alt="First dibs" />
                      </div>
                      <div className="col-10 col-md-9">
                        <h5 className="text-uppercase pb-3">First dibs</h5>
                        <p>
                          Be the first to know about deals, product launches and
                          events from us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_grey_medium line_height_dense text-center">
          <div className="container">
            <div className="row row_padding">
              <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                <h2 className="text-uppercase fst-italic pb-5">How it works</h2>
              </div>
              <div className="col-12 col-md-3">
                <p>
                  <img
                    src="/icons/club_join.png"
                    alt="Join"
                    className="mx-auto"
                  />
                </p>
                <h4 className="text-uppercase pb-3 how_it_works">Join</h4>
                <p>
                  Get 10% off your first purchase when you sign up - it’s free!
                </p>
              </div>
              <div className="col-12 col-md-3">
                <p>
                  <img
                    src="/icons/club_earn.png"
                    alt="Earn"
                    className="mx-auto"
                  />
                </p>
                <h4 className="text-uppercase pb-3 how_it_works">Earn</h4>
                <p>Earn points through small goals or purchases</p>
              </div>
              <div className="col-12 col-md-3">
                <p>
                  <img
                    src="/icons/club_redeem.png"
                    alt="Redeem"
                    className="mx-auto"
                  />
                </p>
                <h4 className="text-uppercase pb-3">Redeem</h4>
                <p>Redeem exclusive rewards!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_grey">
          <div className="container">
            <div className="row row_padding">
              <h2 className="text-uppercase pb-5 d-flex justify-content-center align-items-center">
                <div className="pe-3">
                  <AsteriskIconBlack />
                </div>
                Get exclusive with us
                <div className="ps-3">
                  <AsteriskIconBlack />
                </div>
              </h2>
              <MembershipTable />
              <div className="text-center pt-5">
                <button className="btn btn-primary-large mb-80">
                  Join the club
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_white">
          <div className="container">
            <div className="row row_padding">
              <h2 className="text-uppercase heading_line pb-5">
                Frequently Asked Questions
              </h2>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What are the payment methods?
                  </Accordion.Header>
                  <Accordion.Body>
                    We accept payment via Visa, Mastercard, PayNow, Paypal and
                    bank transfers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    What are the payment methods?
                  </Accordion.Header>
                  <Accordion.Body>
                    We accept payment via Visa, Mastercard, PayNow, Paypal and
                    bank transfers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What are the payment methods?
                  </Accordion.Header>
                  <Accordion.Body>
                    We accept payment via Visa, Mastercard, PayNow, Paypal and
                    bank transfers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    What are the payment methods?
                  </Accordion.Header>
                  <Accordion.Body>
                    We accept payment via Visa, Mastercard, PayNow, Paypal and
                    bank transfers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    What are the payment methods?
                  </Accordion.Header>
                  <Accordion.Body>
                    We accept payment via Visa, Mastercard, PayNow, Paypal and
                    bank transfers.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default MintClub
