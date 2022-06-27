// step 1: import
import React from "react"
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
  return (
    <div>
      <div className="row">
        <div className="col">
          <div>
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
                  image="/shop/acacia/acacia_block_1.png"
                  name="Acacia Block"
                  price="67"
                />
              </SwiperSlide>
              <SwiperSlide className="d-flex flex-column h-100">
                <ProductListItem
                  image="/shop/acacia/acacia_block_bundle_5.png"
                  name="Acacia Block - bundle of 5"
                  price="285"
                />
              </SwiperSlide>
              <SwiperSlide className="d-flex flex-column h-100">
                <ProductListItem
                  image="/shop/min_modules/tv_console_small.png"
                  name="Small Tv Console"
                  price="505"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductListItem
                  image="/shop/min_modules/bookshelf_tall_3.png"
                  name="Tall Bookshelf"
                  price="1173"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductListItem
                  image="/shop/acacia_pets/mewwy_go_round.png"
                  name="Mewwy Go Round"
                  price="288"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
