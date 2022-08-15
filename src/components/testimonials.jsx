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
                <Link to="/contact-us">
                  <button
                    type="button"
                    className="btn btn-outline-large btn-black-large"
                  >
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
                height={500}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <TestimonialItem
                    image="/profile.jpg"
                    name="Evelyn N"
                    review="Great furniture provided, loved the quality and design!"
                    date="18 July 2022"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem
                    image="/profile.jpg"
                    name="Eric"
                    review="Hi there! First time engage an ID to renovate my shop. Shared some of my ideas with ID Jeslyn and her team. Although this project is during Covid period but they are still able to get the job done in time. Love the creativity and planning. Everything went smoothly. Love the outcome. Thank you!"
                    date="27 April 2022"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem
                    image="/profile.jpg"
                    name="Chun Hsin Ler"
                    review="Purchased a customized glass display cabinet.. quite amazed to receive warm and very positive services from the staff... good product quality too.. keep this up.."
                    date="18 April 2022"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem
                    image="/profile.jpg"
                    name="Victoria"
                    review="Most of the people that came to my house like the door display cabinet. And I have shared your Instagram with at least three others who asked. They are impressed by how we can have blocks and carpentry combined."
                    date="20 September 2021"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem
                    image="/profile.jpg"
                    name="Carol Tan"
                    review="Christabel is very helpful from the start till the end. Even though there's some hiccups after delivery but she solved them immediately. I will strongly recommend that you have to let them install for you to have the perfect look! Thanks Christabel for all your prompt reply and action!"
                    date="19 July 2021"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem
                    image="/profile.jpg"
                    name="Shahreezan Shariff"
                    review="Christabel is very helpful and patient with lots of questions when enquired. Never fails to give ideas and recommendations. Shelves are easy to fix and I love it. Thumbs up!!!"
                    date="8 March 2021"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem
                    image="/profile.jpg"
                    name="Cheong Sook Mei"
                    review="I had multiple queries and all got answered in record time. Purchase experience was extremely pleasant and products were a delight! Assembly was very easy as well. Thumbs up!! I also recently had a creative workspace installed (featured on the webpage) and the service was impeccable as usual and had a lot of great ideas from the M.INT team. Design, quality of the solution and installation is equally impressive. Highly recommended!"
                    date="10 February 2021"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem
                    image="/profile.jpg"
                    name="Lily Ong"
                    review="The staff, Ms Christabel, was responsive and patient to answer all my queries. The team even helped to do a sketch on how the actual blocks will turn out in my son's room. Both my son and myself really love the blocks so much and we even installed the LED lights with it, which looks very COOL. The workers arrived punctually to install the blocks and everything was completed within 30 mins. Highly recommended."
                    date="2 December 2020"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem
                    image="/profile.jpg"
                    name="Shayna Wong"
                    review="Second time ordering so now I have 3 of these stools! Excellent service and would definitely recommend. I wanted 2 more dark greys but they only had 1 left. They offered to lend us a light grey one until they restocked the dark grey and would exchange it for me then. Thank you so much!"
                    date="21 October 2020"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem
                    image="/profile.jpg"
                    name="Weilong Hong"
                    review="Quality product! The finish is good and the material is strong."
                    date="17 October 2020"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialItem
                    image="/profile.jpg"
                    name="Shayna Wong"
                    review="Amazing service! I’ve ordered 3 stools from them and though there was a small issue with the delivery at first, they were quick to solve the problem. They made sure that the stools were delivered and were enthusiastic in their replies. They offered to change the colors of cushions when I wanted a different color too. Very happy to be a customer of M.INT. Apart from the top notch service, their stools are really cool and complete the look of my modern themed apartment and I like that they serve as good storage space too. Thank you so much! Would highly recommend."
                    date="3 October 2020"
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
