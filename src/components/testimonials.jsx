// step 1: import
import React from "react"
import { Link } from "gatsby"
import { TestimonialItem } from "../components/testimonial-item"

// import Swiper core and required modules
import { Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

// step 2: define and export
export function Testimonials() {
  return (
    <div className="bg_grey">
      <div className="container-fluid">
        <div className="row padding_testimonial">
          <div className="col text-center">
            <h2 className="pb-5 text-uppercase">Hear from our customers</h2>
            <div>
              <p className="pb-10">
                <Link to="/">
                  <button type="button" className="btn btn-light">
                    Write a review
                  </button>
                </Link>
              </p>
            </div>
          </div>
          <div className="col">
            <div>
              <Swiper
                className="testimonial_swiper"
                // install Swiper modules
                modules={[Scrollbar, A11y]}
                spaceBetween={60}
                scrollbar={{ draggable: true }}
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
                  <TestimonialItem />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
