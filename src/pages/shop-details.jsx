// step 1: import
import React, { useRef, useState, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { Link } from "gatsby"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs, Mousewheel } from "swiper"

// import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// step 2: define component
const ShopDetails = () => {
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

  // variables to set swiper
  const [imagesNavSlider, setImagesNavSlider] = useState(null)

  const slides = [
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1081",
    "https://picsum.photos/1920/1082",
    "https://picsum.photos/1920/1083",
    "https://picsum.photos/1920/1084",
  ]

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Mid-tone wood & white gloss
    </Tooltip>
  )

  return (
    <Layout>
      <div className="bg_grey">
        <div className="container">
          <div className="row padding_heading">
            <div className="text-uppercase font_xs">
              <ul className="listing_breadcrumbs">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/">Min+Modules</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/">Tall Bookshelf</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row pt-3 pb-5">
            <div className="col-12 col-lg-7">
              <section className="slider">
                <div className="slider__flex">
                  <div className="slider__col">
                    <div className="slider__prev">Prev</div>

                    <div className="slider__thumbs">
                      <Swiper
                        onSwiper={setImagesNavSlider}
                        direction="vertical"
                        spaceBetween={24}
                        slidesPerView={3}
                        navigation={{
                          nextEl: ".slider__next",
                          prevEl: ".slider__prev",
                        }}
                        className="swiper-container1"
                        modules={[Navigation, Thumbs]}
                      >
                        {slides.map((slide, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <div className="slider__image">
                                <img src={slide} alt="" />
                              </div>
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                    </div>

                    <div className="slider__next">Next</div>
                  </div>

                  <div className="slider__images">
                    <Swiper
                      thumbs={{ swiper: imagesNavSlider }}
                      direction="horizontal"
                      slidesPerView={1}
                      spaceBetween={32}
                      mousewheel={true}
                      navigation={{
                        nextEl: ".slider__next",
                        prevEl: ".slider__prev",
                      }}
                      className="swiper-container2"
                      modules={[Navigation, Thumbs, Mousewheel]}
                    >
                      {slides.map((slide, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div className="slider__image">
                              <img src={slide} alt="" />
                            </div>
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-12 col-lg-5">
              <h3 className="text-uppercase">Tall Bookshelf</h3>
              <h4 className="text-uppercase font_grey_medium_3 mb-40">
                SGD 1,173
              </h4>
              <p>
                Not your regular bookshelf, the Min+Modules is a modular
                furniture series exclusively designed in-house by M.INT. Each
                module is connected by magnetic connectors which allows flexible
                arrangements to suit your needs and spaces.
              </p>
              <p>
                Did you know that you can build a side table, TV console and
                bedroom chest with the same modules in this bookshelf?
              </p>
              <p>
                <Link to="/">
                  <button type="button" className="btn btn-light w-100">
                    Customise this bookshelf
                  </button>
                </Link>
              </p>
              <hr className="my-3" />
              <p>
                <ul class="listing_left_align">
                  <li>Colour:</li>
                  <li>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <img src="/icons/color_brown_white.png" alt="" />
                    </OverlayTrigger>
                  </li>
                  <li>
                    <img src="/icons/color_dark_brown_white.png" alt="" />
                  </li>
                  <li>
                    <img src="/icons/color_black.png" alt="" />
                  </li>
                  <li>
                    <img src="/icons/color_white_grey.png" alt="" />
                  </li>
                  <li>
                    <img src="/icons/color_black_white.png" alt="" />
                  </li>
                  <li>
                    <img src="/icons/color_blue_white.png" alt="" />
                  </li>
                  <li>
                    <img src="/icons/color_black_grey.png" alt="" />
                  </li>
                  <li>
                    <img src="/icons/color_blue_yellow.png" alt="" />
                  </li>
                  <li>
                    <img src="/icons/color_brown_black.png" alt="" />
                  </li>
                </ul>
              </p>
              <div className="d-flex">
                <p className="pb-3">
                  <Link to="/">
                    <button type="button" className="btn btn-tertiary me-3">
                      Add to cart
                    </button>
                  </Link>
                  <Link to="/">
                    <button type="button" className="btn btn-tertiary">
                      Add to cart
                    </button>
                  </Link>
                </p>
              </div>
              <p className="pb-1">
                <Link to="/">
                  <button type="button" className="btn btn-light w-100">
                    Get Complimentary Design Service
                  </button>
                </Link>
              </p>
              <em className="font_xs font_grey_medium_2">
                *Delivery lead time is around 3-4 weeks
              </em>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default ShopDetails
