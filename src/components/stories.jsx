// step 1: import
import React from "react"
import { Link } from "gatsby"
import { StoryItem } from "../components/story-item"

// import Swiper core and required modules
import { Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

// step 2: define and export
export function Stories() {
  return (
    <div className="container-fluid">
      <div className="row">
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
              height={500}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <StoryItem
                  img="/account/creator_story.jpg"
                  name="Meet Annika - a Bearbrick Collector"
                  review="Great furniture provided, loved the quality and design!"
                  date="18 July 2022"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StoryItem
                  img="/account/creator_story.jpg"
                  name="Meet Annika - a Bearbrick Collector"
                  review="Great furniture provided, loved the quality and design!"
                  date="18 July 2022"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StoryItem
                  img="/account/creator_story.jpg"
                  name="Meet Annika - a Bearbrick Collector"
                  review="Great furniture provided, loved the quality and design!"
                  date="18 July 2022"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StoryItem
                  img="/account/creator_story.jpg"
                  name="Meet Annika - a Bearbrick Collector"
                  review="Great furniture provided, loved the quality and design!"
                  date="18 July 2022"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StoryItem
                  img="/account/creator_story.jpg"
                  name="Meet Annika - a Bearbrick Collector"
                  review="Great furniture provided, loved the quality and design!"
                  date="18 July 2022"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
