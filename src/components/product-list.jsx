// step 1: import
import React, { useRef } from "react"
/*
import { Link } from "gatsby"
*/
import { ProductListItem } from "../components/product-list-item"

// import Swiper core and required modules
import { Navigation, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

// step 2: define and export
export function ProductList() {
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
        modules={[Navigation, A11y]}
        spaceBetween={10}
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
        <SwiperSlide className="d-flex flex-column h-100">
          <ProductListItem
            url="/shop-details"
            image="/shop/acacia/acacia_block_1.png"
            name="Acacia Block"
            price="67"
            color_1={
              <li>
                <img src="/icons/color_white.png" alt="" />
              </li>
            }
            color_2={
              <li>
                <img src="/icons/color_grey.png" alt="" />
              </li>
            }
            color_3={
              <li>
                <img src="/icons/color_black.png" alt="" />
              </li>
            }
            color_4={
              <li>
                <img src="/icons/color_blue.png" alt="" />
              </li>
            }
            color_5={
              <li>
                <img src="/icons/color_yellow.png" alt="" />
              </li>
            }
            color_6={
              <li>
                <img src="/icons/color_red.png" alt="" />
              </li>
            }
          />
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column h-100">
          <ProductListItem
            url="/shop-details"
            image="/shop/acacia/acacia_block_bundle_5.png"
            name="Acacia Block - bundle of 5"
            price="285"
            color_1={
              <li>
                <img src="/icons/color_white.png" alt="" />
              </li>
            }
            color_2={
              <li>
                <img src="/icons/color_grey.png" alt="" />
              </li>
            }
            color_3={
              <li>
                <img src="/icons/color_black.png" alt="" />
              </li>
            }
            color_4={
              <li>
                <img src="/icons/color_blue.png" alt="" />
              </li>
            }
            color_5={
              <li>
                <img src="/icons/color_yellow.png" alt="" />
              </li>
            }
            color_6={
              <li>
                <img src="/icons/color_red.png" alt="" />
              </li>
            }
          />
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column h-100">
          <ProductListItem
            url="/shop-details"
            image="/shop/min_modules/tv_console_small.png"
            name="Small Tv Console"
            price="505"
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
        </SwiperSlide>
        <SwiperSlide>
          <ProductListItem
            url="/shop-details"
            image="/shop/min_modules/bookshelf_tall_3.png"
            name="Tall Bookshelf"
            price="1173"
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
        </SwiperSlide>
        <SwiperSlide>
          <ProductListItem
            url="/shop-details"
            image="/shop/acacia_pets/mewwy_go_round.png"
            name="Mewwy Go Round"
            price="288"
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
