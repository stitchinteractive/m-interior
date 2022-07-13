// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { LookBookDetailsItem } from "../components/lookbook-details-item"
import { Testimonials } from "../components/testimonials"

// step 2: define component
const InteriorDesignDetails = () => {
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
      <div className="container">
        <div className="row row_padding animate">
          <div className="d-md-flex align-items-center">
            <div className="col-12 col-md-6 col-lg-4">
              <h2 className="text-uppercase mb-5">Interior Design</h2>
              <p>
                M.INT missions are Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>

              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="col-12 col-md-6 col-lg-8 ps-md-5">
              <img src="/interior/banner.jpg" alt="Interior Design" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg_grey animate">
        <div className="container">
          <div className="row row_padding row-flex">
            <div className="col-12">
              <h2 className="text-uppercase mb-5 text-center">Why Us?</h2>
            </div>
            <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5">
              <div className="box_grey_5">
                <h4 className="text-uppercase mb-5 text-center">Warranty</h4>
                M.INT specialises in modular furniture, with a significant
                emphasis on space-saving and durability.. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5">
              <div className="box_grey_5">
                <h4 className="text-uppercase mb-5 text-center">
                  Best Quality
                </h4>
                M.INT specialises in modular furniture, with a significant
                emphasis on space-saving and durability.. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className="col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5">
              <div className="box_grey_5">
                <h4 className="text-uppercase mb-5 text-center">
                  Unique Design
                </h4>
                M.INT specialises in modular furniture, with a significant
                emphasis on space-saving and durability.. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animate">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 mb-md-5">
              <h2 className="text-uppercase mb-5 text-center">How it works</h2>
            </div>
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-0">
              <p>
                <img src="/interior/how_it_works.jpg" alt="How it works" />
              </p>
            </div>
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-0 ps-lg-5">
              <h1 className="heading_boxed mb-3">01</h1>
              <h3 className="text-uppercase mb-4">A Friendly Conversation</h3>
              <p>
                M.INT specialises in modular furniture, with a significant
                emphasis on space-saving and durability.. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <h1 className="heading_boxed mb-3">02</h1>
              <h3 className="text-uppercase mb-4">Designing Your Space</h3>
              <p>
                M.INT specialises in modular furniture, with a significant
                emphasis on space-saving and durability.. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>

              <h1 className="heading_boxed mb-3">03</h1>
              <h3 className="text-uppercase mb-4">From Vision To Reality</h3>
              <p>
                M.INT specialises in modular furniture, with a significant
                emphasis on space-saving and durability.. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="animate">
        <div class="bg_grey">
          <div className="container">123</div>
        </div>
      </div>
      <div className="animate">
        <Testimonials />
      </div>
    </Layout>
  )
}

// step 3: export
export default InteriorDesignDetails
