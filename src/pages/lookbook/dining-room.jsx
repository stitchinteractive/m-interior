// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../../components/layout"
import { LookBookDetailsItem } from "../../components/lookbook-details-item"
import { Link } from "gatsby"
import BackIcon from "../../icons/back"

// step 2: define component
const LookBookDetails = () => {
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
        <div className="row row_padding">
          <div className="col-12">
            <h2 className="text-uppercase pb-7 animate">Dining Room</h2>
          </div>
          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/lookbook/dining_room/1.jpg"
              alt="Dining Room"
            />
            <LookBookDetailsItem
              image="/lookbook/dining_room/3.jpg"
              alt="Dining Room"
            />
            <LookBookDetailsItem
              image="/lookbook/dining_room/5.jpg"
              alt="Dining Room"
            />
          </div>

          <div className="col-12 col-md-6">
            <LookBookDetailsItem
              image="/lookbook/dining_room/2.jpg"
              alt="Dining Room"
            />
            <LookBookDetailsItem
              image="/lookbook/dining_room/4.jpg"
              alt="Dining Room"
            />
            <LookBookDetailsItem
              image="/lookbook/dining_room/6.jpg"
              alt="Dining Room"
            />
          </div>

          <div className="d-flex btn_back">
            <BackIcon />
            <Link
              to="/lookbook"
              className="ms-2 font_yellow text-uppercase font_semibold no_underline"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default LookBookDetails
