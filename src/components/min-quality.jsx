// step 1: import
import React from "react"
import { Link } from "gatsby"
import { MinQualityItem } from "./min-quality-item"

// import Swiper core and required modules
import { Navigation, Mousewheel } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// step 2: define and export
export function MinQuality() {
  return (
    <div className="bg_white">
      <div className="container-fluid">
        <div className="row padding_testimonial">
          <div className="col text-center">
            <h2 className="pb-5 text-uppercase">Quality you can trust</h2>
          </div>
          <div className="col">
            <div>
              <Swiper
                className="testimonial_swiper"
                // install Swiper modules
                modules={[Navigation, Mousewheel]}
                navigation={true}
                mousewheel={true}
                spaceBetween={60}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <MinQualityItem
                    img_src="/shop/min_modules/quality_1.jpg"
                    heading="Premium Material"
                    content="Solid and scratch-resistant to ensure your furniture don't just look good, but stays good inside out."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MinQualityItem
                    img_src="/shop/min_modules/quality_2.jpg"
                    heading="Safe Magnets"
                    content="Magnetic connectors made of safe and low-powered magnets with silicone protection."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MinQualityItem
                    img_src="/shop/min_modules/quality_3.jpg"
                    heading="Soft Closing"
                    content="Smooth and silent closing reduces stress on doors and drawers – protecting them from wear and tear."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MinQualityItem
                    img_src="/shop/min_modules/quality_4.jpg"
                    heading="Sleek Handles"
                    content="Matte aluminium full-length handles for easy grip that minimises your push and pull work."
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
