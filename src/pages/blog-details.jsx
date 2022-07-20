// step 1: import
import React, { useLayoutEffect } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { ImgCard } from "../components/img-card"
import BackIcon from "../icons/back"

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
      <div>
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 col-lg-8 offset-lg-2">
              <p>
                <img src="lookbook/living_room/2.jpg" alt="Design Process" />
              </p>
            </div>
            <div className="col-12 col-lg-8 offset-lg-2">
              <div className="row d-flex align-items-center">
                <div className="col-3 col-md-2 col-lg-1">
                  <p>
                    <img src="/profile.jpg" className="avatar" alt="Profile" />
                  </p>
                </div>
                <div className="col-9 col-md-6 col-lg-7">
                  <p>Sean Tan &nbsp;|&nbsp; 10 March 2021</p>
                </div>
                <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-md-end">
                  <p>
                    <Link to="/">
                      <img src="/icons/share.png" alt="Share" />
                    </Link>
                  </p>
                </div>
              </div>

              <hr className="mt-0 mb-5" />

              <h2 className="text-uppercase mb-60">BLOG POST 1</h2>
              <p className="font_light pb-4">12 March 2021</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="d-flex btn_back">
                <BackIcon />
                <Link
                  to="/blog"
                  className="ms-2 font_yellow text-uppercase font_semibold no_underline"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_grey">
          <div className="container">
            <div className="row row_padding">
              <div className="col-12">
                <h4 className="text-uppercase mb-5">You Might Also Like</h4>
              </div>
              <div className="col-12 col-md-4 mb-5">
                <div className="container_overlay">
                  <Link to="/" className="d-flex w-100 h-100 no_underline">
                    <ImgCard
                      background="/lookbook/living_room/2.jpg"
                      category="&nbsp;"
                      sub_category="Blog Post 1"
                    />
                    <div className="overlay_img">
                      <ImgCard
                        background="/lookbook/living_room/2.jpg"
                        description="Lorem ipsum dolor amet..."
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-5">
                <div className="container_overlay">
                  <Link to="/" className="d-flex w-100 h-100 no_underline">
                    <ImgCard
                      background="/lookbook/living_room/2.jpg"
                      category="&nbsp;"
                      sub_category="Blog Post 1"
                    />
                    <div className="overlay_img">
                      <ImgCard
                        background="/lookbook/living_room/2.jpg"
                        description="Lorem ipsum dolor amet..."
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-5">
                <div className="container_overlay">
                  <Link to="/" className="d-flex w-100 h-100 no_underline">
                    <ImgCard
                      background="/lookbook/living_room/2.jpg"
                      category="&nbsp;"
                      sub_category="Blog Post 1"
                    />
                    <div className="overlay_img">
                      <ImgCard
                        background="/lookbook/living_room/2.jpg"
                        description="Lorem ipsum dolor amet..."
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default InteriorDesignDetails
