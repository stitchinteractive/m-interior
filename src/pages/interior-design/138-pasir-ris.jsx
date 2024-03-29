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
            <h2 className="text-uppercase mb-5">138 Pasir Ris, 4-Room HDB</h2>
            <h5 className="text-uppercase mb-3">Dark Contemporary</h5>
            <p>
              Breaking out of the standard HDB home layout, this typical aged
              flat was transformed from a 3 bedder to a dark and cozy
              contemporary space with 2 large bedrooms.
            </p>

            <h5 className="text-uppercase mb-3">Design Intent</h5>
            <p>
              Client's brief was to redesign the layout of the house to suit a
              family of 4 (2 sets of couples). Therefore, our first thoughts
              were to enlarge their individual rooms, and work on the coziness
              and comfort of the shared spaces. The clients preferred dark and
              warm tones, which we have aptly translated across various aspects
              such as wall colours, laminate choices and vinyl flooring.
            </p>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <p>
              <img
                src="/interior/works/138_pasir_ris/floorplan.jpg"
                alt="Floor Plan"
                className="img_border_black"
              />
            </p>
          </div>
        </div>
        <div className="row row_padding">
          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/138_pasir_ris/1.jpg"
              alt="1"
            />
            <LookBookDetailsItem
              image="/interior/works/138_pasir_ris/3.jpg"
              alt="3"
            />
            <LookBookDetailsItem
              image="/interior/works/138_pasir_ris/5.jpg"
              alt="5"
            />
            <LookBookDetailsItem
              image="/interior/works/138_pasir_ris/7.jpg"
              alt="7"
            />
            <LookBookDetailsItem
              image="/interior/works/138_pasir_ris/9.jpg"
              alt="9"
            />
          </div>

          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/interior/works/138_pasir_ris/2.jpg"
              alt="2"
            />
            <LookBookDetailsItem
              image="/interior/works/138_pasir_ris/4.jpg"
              alt="4"
            />
            <LookBookDetailsItem
              image="/interior/works/138_pasir_ris/6.jpg"
              alt="6"
            />
            <LookBookDetailsItem
              image="/interior/works/138_pasir_ris/8.jpg"
              alt="8"
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
