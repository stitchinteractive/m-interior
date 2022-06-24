// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { Membership } from "../components/membership"
import { ProductListItem } from "../components/product-list-item"
import { Testimonials } from "../components/testimonials"
import { NavShop } from "../components/nav_shop"
import { ImgCard } from "../components/img-card"
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
            <div className="row d-flex">
              <div className="col p-0 d-flex h-100">
                <Link to="/" className="d-flex w-100 h-100 no_underline">
                  <ImgCard
                    background="/shop/categories/min_modules.jpg"
                    category="Modular Furniture /"
                    sub_category="Min+Modules"
                  />
                </Link>
              </div>
            </div>
            <div className="row">
              <div class="col-md-4">
                <ProductListItem
                  image="/shop/min_modules/bedside_table_small_2.png"
                  name="Small Side Table"
                  price="205"
                />
              </div>
              <div class="col-md-4">
                <ProductListItem
                  image="/shop/min_modules/bookshelf_tall_3.png"
                  name="Tall bookshelf"
                  price="205"
                />
              </div>
              <div class="col-md-4">
                <ProductListItem
                  image="/shop/min_modules/bedroom_chest_small.png"
                  name="Small Bedroom Chest"
                  price="205"
                />
              </div>
            </div>
            <div className="row">
              <div class="col-md-4">
                <ProductListItem
                  image="/shop/min_modules/bookshelf_full.png"
                  name="Full Bookshelf"
                  price="205"
                />
              </div>
              <div class="col-md-8">
                <ProductListItem
                  image="/shop/min_modules/tv_console_small_2.png"
                  name="Small Tv Console"
                  price="205"
                />
              </div>
            </div>
            <div class="row">
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
