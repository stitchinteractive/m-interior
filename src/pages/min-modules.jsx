// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { Membership } from "../components/membership"
import { Testimonials } from "../components/testimonials"
import { NavShop } from "../components/nav-shop"
import { SubBanner } from "../components/subpage-banner"
import { BackToTop } from "../components/back-to-top"

// step 2: define component
const Shop = () => {
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
          <div className="col-lg-3">
            <NavShop />
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col">
                <SubBanner
                  background="/shop/min_modules/banner.jpg"
                  category="Modular Furniture /"
                  sub_category="Min+Modules"
                />
              </div>
            </div>
            <div className="row">
              <h3 className="text-uppercase py-5">Min+Modules Extras</h3>
              <BackToTop />
            </div>
          </div>
        </div>
      </div>
      <div className="animate">
        <Testimonials />
      </div>
      <div className="animate">
        <Membership />
      </div>
    </Layout>
  )
}

// step 3: export
export default Shop
