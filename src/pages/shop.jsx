// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { Membership } from "../components/membership"
import { ProductList } from "../components/product-list"
import { Testimonials } from "../components/testimonials"
import { NavShop } from "../components/nav-shop"
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
          <div className="col-md-5 col-lg-3 animate">
            <NavShop />
          </div>
          <div className="col-md-7 col-lg-9">
            <div className="row padding_shop d-flex">
              <div className="col-lg-7 p-0 p-md-0 d-flex h-100 animate">
                <Link to="/" className="d-flex w-100 h-100 no_underline">
                  <ImgCard
                    background="/shop/categories/min_modules.jpg"
                    category="Modular Furniture /"
                    sub_category="Min+Modules"
                  />
                </Link>
              </div>
              <div className="col-lg-5 p-0 p-md-0 animate">
                <Link to="/" className="d-flex w-100 h-100 no_underline">
                  <ImgCard
                    background="/shop/categories/acacia.jpg"
                    category="Modular Furniture /"
                    sub_category="Acacia Blocks "
                  />
                </Link>
              </div>
            </div>
            <div className="row padding_shop d-flex">
              <div className="col-lg-5 p-0 p-md-0 d-flex h-100 animate">
                <Link to="/" className="d-flex w-100 h-100 no_underline">
                  <ImgCard
                    background="/shop/categories/acacia_pets.jpg"
                    category="Pet Furniture /"
                    sub_category="Acacia For Pets"
                  />
                </Link>
              </div>
              <div className="col-lg-7 p-0 p-md-0 animate">
                <Link to="/" className="d-flex w-100 h-100 no_underline">
                  <ImgCard
                    background="/shop/categories/accessories.jpg"
                    category="Home Decor /"
                    sub_category="Accessories"
                  />
                </Link>
              </div>
            </div>
            <div className="row mt-140 animate">
              <div className="col-12">
                <h3 className="text-uppercase pb-5">Best Sellers1</h3>
                <ProductList />
                <BackToTop />
              </div>
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
