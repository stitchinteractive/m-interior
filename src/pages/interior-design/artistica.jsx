// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../../components/layout"
import { LookBookDetailsItem } from "../../components/lookbook-details-item"
import { Testimonials } from "../../components/testimonials"
import { Link } from "gatsby"
import BackIcon from "../../icons/back"

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
        <div className="row padding_interior_lead_in animate">
          <div className="col-lg-6">
            <h2 className="text-uppercase mb-5">
              Artistica Tattoo Studio, Shophouse
            </h2>
            <h5 className="text-uppercase mb-3">Modern Industrial</h5>
            <p>
              An edgy and stylish studio that exudes a modern industrial vibe.
              Dark tones and open concepts are incorporated to create an
              impression of an intimate and captivating space.
            </p>

            <h5 className="text-uppercase mb-3">Design Intent</h5>
            <p>
              The shophouse unit was handed over in a bare condition with
              unsightly yellowish walls. We took it from there and transformed
              the dull space into a cool and edgy studio for a group of tattoo
              artists who have a penchant for Funko Pop collectibles. The client
              required plenty of display opportunities to showcase their
              collectibles and artwork, not forgetting to work in some storage
              spaces for their tattoo supplies. Our selection for the wall
              colours, laminates, materials and floorings were carefully
              coordinated to echo the edginess of the client and his business.
              We also placed a great deal of focus on the lighting design, which
              was intended to carry the backbone of the modern industrial vibe.
            </p>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <p>
              <img
                src="/interior/works/artistica/floorplan.jpg"
                alt="Floor Plan"
                className="img_border_black"
              />
            </p>
          </div>
        </div>
        <div className="row row_padding">
          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/artistica/1.jpg"
              alt="1"
            />
            <LookBookDetailsItem
              image="/interior/works/artistica/3.jpg"
              alt="3"
            />
            <LookBookDetailsItem
              image="/interior/works/artistica/5.jpg"
              alt="5"
            />
          </div>

          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/artistica/2.jpg"
              alt="2"
            />
            <LookBookDetailsItem
              image="/interior/works/artistica/4.jpg"
              alt="4"
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
