// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { LookBookDetailsItem } from "../components/lookbook-details-item"
import { Testimonials } from "../components/testimonials"
import { Link } from "gatsby"
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
      <div className="container">
        <div className="row row_padding animate">
          <div className="col-lg-6">
            <h2 className="text-uppercase mb-5">Treescape, 3-Bedroom Condo</h2>
            <h5 className="text-uppercase mb-3">Modern Contemporary</h5>
            <p>
              A modern contemporary design spotlighting a timeless palette of
              earthy tones and classic woodgrains to visually add depth to the
              space. The slight variance in colour tones help to demarcate the
              different functions of the house.
            </p>

            <h5 className="text-uppercase mb-3">Design Intent</h5>
            <p>
              The main design intent was to maximise the compact spaces to
              comfortably accommodate a family of 4. We started off by breaking
              down physical boundaries that once divided the original space, and
              recreated them into a bright and airy concept. We opened up the
              kitchenette by removing the existing walls/panels, so as to create
              a seamless flow from the living area to the kitchen. Through the
              application of different floorings and colour tones, we subtly
              created a demarcation of space that defined the individual areas
              without feeling confined.
            </p>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <img
              src="/interior/works/treescape/floorplan.jpg"
              alt="Floor Plan"
              className="img_border_black"
            />
          </div>
          <div className="col-12">
            <div className="mt-150">
              <h3 className="text-uppercase mb-5">Living Room</h3>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/treescape/1.jpg"
              alt="Living Room"
            />
            <LookBookDetailsItem
              image="/interior/works/treescape/2.jpg"
              alt="Living Room"
            />
          </div>
          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/treescape/3.jpg"
              alt="Living Room"
            />
          </div>
          <div className="col-12">
            <div className="mt-150">
              <h3 className="text-uppercase mb-5">Kitchen</h3>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/treescape/4.jpg"
              alt="Kitchen"
            />
          </div>
          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/treescape/5.jpg"
              alt="Kitchen"
            />
          </div>
          <div className="col-12">
            <div className="mt-150">
              <h3 className="text-uppercase mb-5">Bed Room</h3>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/treescape/6.jpg"
              alt="Bed Room"
            />
          </div>
          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/treescape/7.jpg"
              alt="Bed Room"
            />
          </div>
          <div className="col-12">
            <div className="mt-150">
              <h3 className="text-uppercase mb-5">Bath Room</h3>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/treescape/8.jpg"
              alt="Bath Room"
            />
          </div>
          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/treescape/9.jpg"
              alt="Bath Room"
            />
          </div>

          <div className="d-flex btn_back">
            <BackIcon />
            <Link
              to="/interior-design"
              className="ms-2 font_yellow text-uppercase font_semibold no_underline"
            >
              Back
            </Link>
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
