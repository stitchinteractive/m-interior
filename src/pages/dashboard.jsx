// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { NavAccount } from "../components/nav_account"
import { Link } from "gatsby"
import { MembershipTable } from "../components/membership-table"
import AsteriskIcon from "../icons/asterisk"
import AsteriskIconBlack from "../icons/asterisk-black"
import * as ProfileModule from "./profile.module.css"

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs, Mousewheel, HashNavigation } from "swiper"

// import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// step 2: define component
const Profile = () => {
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
      <div className="bg_grey">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 col-md-6 col-lg-3 bg_white p-5 mb-5">
              <div className="d-flex align-items-center mb-5">
                <div className={ProfileModule.initials}>JS</div>
                <div className="d-flex flex-column">
                  <div className={ProfileModule.customer_name}>
                    <div className="font_grey_medium_3">Hello.</div>
                    <div className="font_xl font_semibold text-uppercase">
                      James Smith
                    </div>
                  </div>
                </div>
              </div>
              <NavAccount />
            </div>
            <div className="col-12 col-md-6 col-lg-9 px-md-5">
              <div className="row mb-4">
                <div
                  className="col-12 sub_banner_dashboard"
                  style={{
                    background:
                      "url(/account/banner_dashboard.jpg) center center no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="overlay h-100">
                    <div className="text-uppercase">
                      <h5 className="mb-0">Welcome Back</h5>
                      <h3 className="mb-0">James Smith</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-60">
                <div className="col-md-7 line_height_dense text-uppercase d-flex justify-content-start p-3">
                  <div className="row">
                    <div className="col-2 align-self-end">
                      <img src="/icons/club_insider.png" alt="My Tier" />
                    </div>
                    <div className="col-2 align-self-end">
                      My
                      <br />
                      Tier
                    </div>
                    <div className="col-8">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-self-center">
                          <h4 className="mb-0 me-5">Insider</h4>
                          <div className="font_xs text-end">
                            2,456 Points to next tier
                          </div>
                        </div>
                      </div>
                      <div className="align-self-end mt-3">
                        <div className="bg_progress">
                          <div className="progress"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 bg_grey_medium_6 line_height_dense text-uppercase d-flex justify-content-between p-3">
                  <div className="align-self-end">
                    My
                    <br />
                    Points
                  </div>
                  <div className="align-self-end">
                    <h2 className="mb-0">1,305</h2>
                  </div>
                  <div className="align-self-end font_xs">
                    <Link to="/" className="no_underline">
                      Earn more &gt;
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <h3 className="text-uppercase pb-6">Featured Rewards</h3>
                <div className="slider__default">
                  <div className="slider__prev">
                    <img src="/icons/btn_prev.png" alt="Prev" />
                  </div>

                  <Swiper
                    hashNavigation={{
                      watchState: true,
                    }}
                    direction="horizontal"
                    slidesPerView={3}
                    spaceBetween={10}
                    mousewheel={true}
                    HashNavigation={true}
                    navigation={{
                      nextEl: ".slider__next",
                      prevEl: ".slider__prev",
                    }}
                    breakpoints={{
                      0: {
                        direction: "horizontal",
                      },
                      768: {
                        direction: "horizontal",
                      },
                    }}
                    className="swiper-container2"
                    modules={[Navigation, Mousewheel, HashNavigation]}
                  >
                    <SwiperSlide key="1" data-hash="1">
                      <div className="slider__image">
                        <img src="/profile.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key="2" data-hash="2">
                      <div className="slider__image">
                        <img src="/profile.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key="3" data-hash="3">
                      <div className="slider__image">
                        <img src="/profile.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key="4" data-hash="4">
                      <div className="slider__image">
                        <img src="/profile.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key="5" data-hash="5">
                      <div className="slider__image">
                        <img src="/profile.jpg" alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="slider__next">
                    <img src="/icons/btn_next.png" alt="Next" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_blue">
        <div className="container">
          <div className="row row_padding">
            <h2 className="text-uppercase pb-5 d-flex justify-content-center align-items-center font_white">
              <div className="pe-3">
                <AsteriskIcon />
              </div>
              Creator Stories
              <div className="ps-3">
                <AsteriskIcon />
              </div>
            </h2>
          </div>
        </div>
      </div>
      <div className="bg_grey">
        <div className="container">
          <div className="row row_padding">
            <h2 className="text-uppercase pb-5 d-flex justify-content-center align-items-center">
              <div className="pe-3">
                <AsteriskIconBlack />
              </div>
              Get exclusive with us
              <div className="ps-3">
                <AsteriskIconBlack />
              </div>
            </h2>
            <MembershipTable />
            <div className="text-center pt-5">
              <button className="btn btn-primary-large mb-80">
                Join the club
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default Profile
