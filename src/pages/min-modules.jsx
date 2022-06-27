// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { Membership } from "../components/membership"
import { Testimonials } from "../components/testimonials"
import { NavShop } from "../components/nav-shop"
import { ProductListItem } from "../components/product-list-item"
import { SubBanner } from "../components/subpage-banner"
import { BackToTop } from "../components/back-to-top"

// import Swiper core and required modules
import { Navigation, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

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
            <div className="row mb-4">
              <div className="col">
                <SubBanner
                  background="/shop/min_modules/banner.jpg"
                  category="Modular Furniture /"
                  sub_category="Min+Modules"
                />
              </div>
            </div>
            <div className="row mb-100">
              <div class="col-12 col-md-6 col-lg-4 mb-4">
                <ProductListItem
                  url="/shop-details"
                  image="/shop/min_modules/bedside_table_small_2.png"
                  name="Small Side Table"
                  price="205"
                  color_1={
                    <li>
                      <img src="/icons/color_brown_white.png" />
                    </li>
                  }
                  color_2={
                    <li>
                      <img src="/icons/color_black.png" />
                    </li>
                  }
                  color_3={
                    <li>
                      <img src="/icons/color_dark_brown_white.png" />
                    </li>
                  }
                  color_4={
                    <li>
                      <img src="/icons/color_black_white.png" />
                    </li>
                  }
                  color_5={
                    <li>
                      <img src="/icons/color_white_grey.png" />
                    </li>
                  }
                  color_6={
                    <li>
                      <img src="/icons/color_black_white.png" />
                    </li>
                  }
                  color_7={
                    <li>
                      <img src="/icons/color_black_grey.png" />
                    </li>
                  }
                  color_8={
                    <li>
                      <img src="/icons/color_black_yellow.png" />
                    </li>
                  }
                  color_9={
                    <li>
                      <img src="/icons/color_brown_black.png" />
                    </li>
                  }
                />
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-4">
                <ProductListItem
                  url="/shop-details"
                  image="/shop/min_modules/bookshelf_tall_3.png"
                  name="Tall Bookshelf"
                  price="205"
                  color_1={
                    <li>
                      <img src="/icons/color_brown_white.png" />
                    </li>
                  }
                  color_2={
                    <li>
                      <img src="/icons/color_black.png" />
                    </li>
                  }
                  color_3={
                    <li>
                      <img src="/icons/color_dark_brown_white.png" />
                    </li>
                  }
                  color_4={
                    <li>
                      <img src="/icons/color_black_white.png" />
                    </li>
                  }
                  color_5={
                    <li>
                      <img src="/icons/color_white_grey.png" />
                    </li>
                  }
                  color_6={
                    <li>
                      <img src="/icons/color_black_white.png" />
                    </li>
                  }
                  color_7={
                    <li>
                      <img src="/icons/color_black_grey.png" />
                    </li>
                  }
                  color_8={
                    <li>
                      <img src="/icons/color_black_yellow.png" />
                    </li>
                  }
                  color_9={
                    <li>
                      <img src="/icons/color_brown_black.png" />
                    </li>
                  }
                />
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-4">
                <ProductListItem
                  url="/shop-details"
                  image="/shop/min_modules/bedroom_chest_small.png"
                  name="Small Bedroom Chest"
                  price="205"
                  color_1={
                    <li>
                      <img src="/icons/color_brown_white.png" />
                    </li>
                  }
                  color_2={
                    <li>
                      <img src="/icons/color_black.png" />
                    </li>
                  }
                  color_3={
                    <li>
                      <img src="/icons/color_dark_brown_white.png" />
                    </li>
                  }
                  color_4={
                    <li>
                      <img src="/icons/color_black_white.png" />
                    </li>
                  }
                  color_5={
                    <li>
                      <img src="/icons/color_white_grey.png" />
                    </li>
                  }
                  color_6={
                    <li>
                      <img src="/icons/color_black_white.png" />
                    </li>
                  }
                  color_7={
                    <li>
                      <img src="/icons/color_black_grey.png" />
                    </li>
                  }
                  color_8={
                    <li>
                      <img src="/icons/color_black_yellow.png" />
                    </li>
                  }
                  color_9={
                    <li>
                      <img src="/icons/color_brown_black.png" />
                    </li>
                  }
                />
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-4">
                <ProductListItem
                  url="/shop-details"
                  image="/shop/min_modules/bookshelf_full.png"
                  name="Full Bookshelf"
                  price="205"
                  color_1={
                    <li>
                      <img src="/icons/color_brown_white.png" />
                    </li>
                  }
                  color_2={
                    <li>
                      <img src="/icons/color_black.png" />
                    </li>
                  }
                  color_3={
                    <li>
                      <img src="/icons/color_dark_brown_white.png" />
                    </li>
                  }
                  color_4={
                    <li>
                      <img src="/icons/color_black_white.png" />
                    </li>
                  }
                  color_5={
                    <li>
                      <img src="/icons/color_white_grey.png" />
                    </li>
                  }
                  color_6={
                    <li>
                      <img src="/icons/color_black_white.png" />
                    </li>
                  }
                  color_7={
                    <li>
                      <img src="/icons/color_black_grey.png" />
                    </li>
                  }
                  color_8={
                    <li>
                      <img src="/icons/color_black_yellow.png" />
                    </li>
                  }
                  color_9={
                    <li>
                      <img src="/icons/color_brown_black.png" />
                    </li>
                  }
                />
              </div>
              <div class="col-12 col-lg-8 mb-4">
                <ProductListItem
                  url="/shop-details"
                  image="/shop/min_modules/tv_console_small_2.png"
                  name="Small Tv Console"
                  price="205"
                  color_1={
                    <li>
                      <img src="/icons/color_brown_white.png" />
                    </li>
                  }
                  color_2={
                    <li>
                      <img src="/icons/color_black.png" />
                    </li>
                  }
                  color_3={
                    <li>
                      <img src="/icons/color_dark_brown_white.png" />
                    </li>
                  }
                  color_4={
                    <li>
                      <img src="/icons/color_black_white.png" />
                    </li>
                  }
                  color_5={
                    <li>
                      <img src="/icons/color_white_grey.png" />
                    </li>
                  }
                  color_6={
                    <li>
                      <img src="/icons/color_black_white.png" />
                    </li>
                  }
                  color_7={
                    <li>
                      <img src="/icons/color_black_grey.png" />
                    </li>
                  }
                  color_8={
                    <li>
                      <img src="/icons/color_black_yellow.png" />
                    </li>
                  }
                  color_9={
                    <li>
                      <img src="/icons/color_brown_black.png" />
                    </li>
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase py-5">Min+Modules Extras</h3>
              </div>
              <div className="row">
                <div className="col-12">
                  <Swiper
                    className="product_list_swiper d-flex align-items-stretch h-100"
                    // install Swiper modules
                    modules={[Navigation, A11y]}
                    spaceBetween={10}
                    navigation
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      1280: {
                        slidesPerView: 3,
                      },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    <SwiperSlide className="d-flex flex-column h-100">
                      <ProductListItem
                        url="/shop-details"
                        image="/shop/acacia/acacia_block_1.png"
                        name="Min+Modules Sample Kit"
                        price="15"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex flex-column h-100">
                      <ProductListItem
                        url="/shop-details"
                        image="/shop/acacia/acacia_block_bundle_5.png"
                        name="Big Module"
                        price="100"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex flex-column h-100">
                      <ProductListItem
                        url="/shop-details"
                        image="/shop/min_modules/tv_console_small.png"
                        name="Door"
                        price="35"
                        color_1={
                          <li>
                            <img src="/icons/color_white.png" />
                          </li>
                        }
                        color_2={
                          <li>
                            <img src="/icons/color_grey_light.png" />
                          </li>
                        }
                        color_3={
                          <li>
                            <img src="/icons/color_black.png" />
                          </li>
                        }
                        color_4={
                          <li>
                            <img src="/icons/color_blue_dark.png" />
                          </li>
                        }
                        color_5={
                          <li>
                            <img src="/icons/color_yellow.png" />
                          </li>
                        }
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ProductListItem
                        url="/shop-details"
                        image="/shop/min_modules/bookshelf_tall_3.png"
                        name="Small Module"
                        price="60"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ProductListItem
                        url="/shop-details"
                        image="/shop/acacia_pets/mewwy_go_round.png"
                        name="Big Module"
                        price="100"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <ProductListItem
                        url="/shop-details"
                        image="/shop/acacia_pets/mewwy_go_round.png"
                        name="Door"
                        price="35"
                      />
                    </SwiperSlide>
                  </Swiper>
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
