// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { LookBookDetailsItem } from "../components/lookbook-details-item"

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
        <LookBookDetailsItem
          area="Living Room"
          image_1="/lookbook/living_room/1.jpg"
          image_2="/lookbook/living_room/2.jpg"
          image_3="/lookbook/living_room/3.jpg"
          image_4="/lookbook/living_room/4.jpg"
          image_5="/lookbook/living_room/5.jpg"
          image_6="/lookbook/living_room/6.jpg"
          image_7="/lookbook/living_room/7.jpg"
        ></LookBookDetailsItem>
      </div>
    </Layout>
  )
}

// step 3: export
export default LookBookDetails
