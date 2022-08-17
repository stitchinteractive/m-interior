// step 1: import
import React, { useRef } from "react"
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
  // custom swiper nav
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

  return (
    <div className="swiper_container">
      <Swiper
        className="product_list_swiper d-flex align-items-stretch h-100"
        // install Swiper modules
        modules={[Navigation, Mousewheel]}
        spaceBetween={60}
        loop={true}
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
        ref={swiperRef}
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
        <SwiperSlide>
          <MinQualityItem
            img_src="/shop/min_modules/quality_5.jpg"
            heading="Base Support"
            content="7cm steel legs for substantial stability and ease cleaning under the furniture."
          />
        </SwiperSlide>
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
  )
}
