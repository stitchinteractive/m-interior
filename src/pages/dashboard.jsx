// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { NavAccount } from "../components/nav_account"
import { Link } from "gatsby"
import { Reward } from "../components/reward"
import { MembershipTable } from "../components/membership-table"
import { MembershipTableCurrent } from "../components/membership-table-current"
import AsteriskIcon from "../icons/asterisk"
import AsteriskIconBlack from "../icons/asterisk-black"
import * as ProfileModule from "./profile.module.css"

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Mousewheel, HashNavigation } from "swiper"

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
          <div className="row padding_heading">
            <div className="col-12 col-md-5 col-lg-3 bg_white p-5 mb-5">
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
            <div className="col-12 col-md-7 col-lg-9 ps-md-5">
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
                      <h3 className="mb-0 font_semibold">James Smith</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-60">
                <div className="col-12 col-lg-7 line_height_dense text-uppercase d-flex justify-content-start p-3">
                  <div className="row">
                    <div className="col-3 col-md-2 align-self-end pb-3 pb-md-0">
                      <img src="/icons/club_insider.png" alt="My Tier" />
                    </div>
                    <div className="col-3 col-md-2 align-self-end pb-3 pb-md-0">
                      My
                      <br />
                      Tier
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-self-center">
                          <h4 className="mb-0 me-5 font_semibold">Insider</h4>
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
                <div className="col-12 col-lg-5 bg_grey_medium_6 line_height_dense text-uppercase d-flex justify-content-between p-3 mt-4 mt-lg-0">
                  <div className="align-self-end">
                    My
                    <br />
                    Points
                  </div>
                  <div className="align-self-end">
                    <h2 className="mb-0">1,305</h2>
                  </div>
                  <div className="align-self-end font_xs">
                    <Link to="/earn-points" className="no_underline">
                      Earn more &gt;
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <h4 className="text-uppercase pb-6">Featured Rewards</h4>
                <div className="slider__default">
                  <div className="slider__prev">
                    <img src="/icons/btn_prev.png" alt="Prev" />
                  </div>

                  <Swiper
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
                      320: {
                        slidesPerView: 1,
                      },
                      1024: {
                        slidesPerView: 2,
                      },
                      1440: {
                        slidesPerView: 3,
                      },
                    }}
                    className="swiper-container2"
                    modules={[Navigation, Mousewheel, HashNavigation]}
                  >
                    <SwiperSlide key="1" data-hash="1">
                      <div className="slider__image">
                        <Reward
                          image_url="account/bg_reward.jpg"
                          discount="$2"
                          points="100"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key="2" data-hash="2">
                      <div className="slider__image">
                        <Reward
                          image_url="account/bg_reward.jpg"
                          discount="$5"
                          points="250"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key="3" data-hash="3">
                      <div className="slider__image">
                        <Reward
                          image_url="account/bg_reward.jpg"
                          discount="$10"
                          points="500"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key="4" data-hash="4">
                      <div className="slider__image">
                        <Reward
                          image_url="account/bg_reward.jpg"
                          discount="$20"
                          points="1000"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide key="5" data-hash="5">
                      <div className="slider__image">
                        <Reward
                          image_url="account/bg_reward.jpg"
                          discount="$30"
                          points="1500"
                        />
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
      {/*
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
      */}
      <div className="bg_grey">
        <div className="container-fluid">
          <div className="row pt-5">
            <h2 className="text-uppercase p-5 d-flex justify-content-center align-items-center text-center">
              <div className="pe-3">
                <AsteriskIconBlack />
              </div>
              M.INT club tiers
              <div className="ps-3">
                <AsteriskIconBlack />
              </div>
            </h2>
          </div>
        </div>
        <div className="container-membership">
          <MembershipTableCurrent />
        </div>
        <div className="text-center pt-5">
          <a href="/create-account">
            <button className="btn btn-primary-large mb-120">
              Earn Points
            </button>
          </a>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default Profile
