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
export function AcaciaIntro() {
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
          1280: {
            slidesPerView: 2,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        ref={swiperRef}
      >
        <SwiperSlide>
          <MinQualityItem
            img_src="/shop/acacia/intro_1.jpg"
            heading="Shelf Dividers"
            content="Get organised with these shelf dividers that can be slotted perfectly into the Acacia Blocks."
          />
        </SwiperSlide>
        <SwiperSlide>
          <MinQualityItem
            img_src="/shop/acacia/intro_2.jpg"
            heading="Cove lights"
            content="Brighten up your spaces with cove lights around the Acacia Blocks, so there’s never a dull corner."
          />
        </SwiperSlide>
        <SwiperSlide>
          <MinQualityItem
            img_src="/shop/acacia/intro_3.jpg"
            heading="Inner lights"
            content="Get that inner glow! Enhance your display and accentuate your spaces with inner lights."
          />
        </SwiperSlide>
        <SwiperSlide>
          <MinQualityItem
            img_src="/shop/acacia/intro_4.jpg"
            heading="Clear covers"
            content="Protect your treasured collectibles from dust by adding on removable clear acrylic covers."
          />
        </SwiperSlide>
        <SwiperSlide>
          <MinQualityItem
            img_src="/shop/acacia/intro_5.jpg"
            heading="Bespoke Designs"
            content="Flexible integrations with carpentry works to create a statement piece."
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
