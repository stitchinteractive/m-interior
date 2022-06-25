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
          <div className="col-lg-5">
            <h2 className="text-uppercase mb-5">Treescape condo, 4-room</h2>
            <h5 className="text-uppercase mb-3">Modern Contemporary</h5>
            <p>
              M.INT missions are Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-lg-7">
            <img src="/interior/living_room/floor_plan.jpg" alt="Floor Plan" />
          </div>
        </div>
      </div>
      <div className="bg_grey">
        <div className="container">
          <div className="row">
            <LookBookDetailsItem
              image_1="/interior/living_room/1.jpg"
              image_2="/interior/living_room/2.jpg"
              image_3="/interior/living_room/3.jpg"
              image_4="/interior/living_room/4.jpg"
              image_5="/interior/living_room/5.jpg"
              image_6="/interior/living_room/6.jpg"
              image_7="/interior/living_room/7.jpg"
            ></LookBookDetailsItem>
          </div>
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
