// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import SearchIcon from "../icons/search"
import AsteriskIcon from "../icons/asterisk"

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
            <h1 className="text-uppercase pb-3">M.INT club</h1>
            <p>
              <div className="font_xxl text-uppercase">
                <strong>is</strong> <i>more than just </i>
                <strong>a rewards program</strong>
              </div>
            </p>
            <p class="pb-9">
              Join our community and be a part of something bigger.
            </p>
            <p>Get a 10% off welcome gift when you join us!</p>
            <p>
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-light btn-outline-large me-2"
                >
                  Join the club
                </button>
              </Link>
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-outline btn-outline-large"
                >
                  Login
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div className="bg_black font_white">
          <div class="container">
            <div className="row padding_heading animate">
              <h2 className="text-uppercase pb-4 d-flex justify-content-center">
                <div className="pe-5">
                  <AsteriskIcon />
                </div>
                Members Only Benefits
                <div className="ps-5">
                  <AsteriskIcon />
                </div>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default MintClub
