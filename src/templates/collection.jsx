// step 1: import
import React, { useState, useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { Membership } from "../components/membership"
import { Testimonials } from "../components/testimonials"
import { NavShop } from "../components/nav-shop"
import { ProductListItem } from "../components/product-list-item"
import { SubBanner } from "../components/subpage-banner"
import { BackToTop } from "../components/back-to-top"
import isEqual from "lodash.isequal"
import lodash from "lodash"

// import Swiper core and required modules
import { Navigation, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

// step 2: define component
const Shop = ({ pageContext, location }) => {
  const { collection, productCount, addons } = pageContext

  const params = new URLSearchParams(location.search);
  const sortby = params.get("sortby");
  //alert(sortby)
  debugger
  var products = []
  if(sortby === null || sortby === "bestselling") {
    products = collection.products
  } else {
    if (sortby === "lowtohigh") {
      products = lodash.orderBy(collection.products, function(o) {
        return parseFloat(o.priceRangeV2.maxVariantPrice.amount);
      }, ['asc'])
    } else if (sortby === "hightolow") {
      products = lodash.orderBy(collection.products, function(o) {
        return parseFloat(o.priceRangeV2.maxVariantPrice.amount);
      }, ['desc'])
    } else if (sortby === "AtoZ") {
      products = lodash.orderBy(collection.products, 'title', ['asc'])
    } else if (sortby === "ZtoA") {
      products = lodash.orderBy(collection.products,  'title', ['desc'])
    }
    //products = allProducts
  }
  console.log(products)

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

  const swiperRef = useRef(null)
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  debugger

  console.log(addons)

  const selectedCategory = collection.metafields.find((mf) => {
    return isEqual("category", mf.key)
  })

  var category = selectedCategory?.value ?? "NA"

  const selectedDescription = collection.metafields.find((mf) => {
    return isEqual("category_description", mf.key)
  })

  var description = selectedDescription?.value ?? "NA"

  return (
    <Layout>
      <div className="container">
        <div className="row row_padding">
          <div className="col-md-5 col-lg-3 animate">
            <NavShop />
          </div>
          <div className="col-md-7 col-lg-9">
            <div className="row mb-5">
              <div className="col">
                <SubBanner
                  background={collection.image?.originalSrc}
                  category={category}
                  sub_category={collection.title}
                />
              </div>
            </div>
            <div className="row mb-5">
              <p>
                {description}
              </p>
            </div>
            <div className="row mb-100">
              {products.map((product) => (
                <div className="col-12 col-lg-4 mb-4">
                  <ProductListItem
                    url={"/shop/detail/" + product.handle}
                    image={product.images[0]?.originalSrc}
                    bgimage={product.images[1]?.originalSrc}
                    name={product.title}
                    price={product.priceRangeV2.minVariantPrice.amount}
                    variants={product.variants}
                    options={product.options}
                  />
                </div>
              ))}
              {/*
              <div className="col-12 col-lg-8 mb-4">
                <ProductListItem
                  url="/shop-details"
                  image="/shop/min_modules/tv_console_small_2.png"
                  name="Small Tv Console"
                  price="205"
                  color_1={
                    <li>
                      <img src="/icons/color_brown_white.png" alt="" />
                    </li>
                  }
                  color_2={
                    <li>
                      <img src="/icons/color_black.png" alt="" />
                    </li>
                  }
                  color_3={
                    <li>
                      <img src="/icons/color_dark_brown_white.png" alt="" />
                    </li>
                  }
                  color_4={
                    <li>
                      <img src="/icons/color_black_white.png" alt="" />
                    </li>
                  }
                  color_5={
                    <li>
                      <img src="/icons/color_white_grey.png" alt="" />
                    </li>
                  }
                  color_6={
                    <li>
                      <img src="/icons/color_black_white.png" alt="" />
                    </li>
                  }
                  color_7={
                    <li>
                      <img src="/icons/color_black_grey.png" alt="" />
                    </li>
                  }
                  color_8={
                    <li>
                      <img src="/icons/color_blue_yellow.png" alt="" />
                    </li>
                  }
                  color_9={
                    <li>
                      <img src="/icons/color_brown_black.png" alt="" />
                    </li>
                  }
                />
              </div>
              */}
            </div>
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase py-5">Min+Modules Extras</h3>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="swiper_container">
                    <Swiper
                      className="product_list_swiper d-flex align-items-stretch h-100"
                      // install Swiper modules
                      modules={[Navigation, A11y]}
                      spaceBetween={10}
                      loop={false}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                        },
                        992: {
                          slidesPerView: 2,
                        },
                        1280: {
                          slidesPerView: 3,
                        },
                      }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                      ref={swiperRef}
                    >
                      {addons[0].node.products.map((product) => (
                        <SwiperSlide className="d-flex flex-column h-100">
                          <ProductListItem
                            url={"/shop/detail/" + product.handle}
                            image={product.images[0]?.originalSrc}
                            bgimage={product.images[1]?.originalSrc}
                            name={product.title}
                            price={product.priceRangeV2.minVariantPrice.amount}
                            variants={product.variants}
                            options={product.options}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div id="go_prev">
                      <button onClick={goPrev}>
                        <img src="/icons/btn_prev.png" alt="Prev" />
                      </button>
                    </div>
                    <div id="go_next">
                      <button onClick={goNext}>
                        <img src="/icons/btn_next.png" alt="Next" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <BackToTop />
                </div>
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
