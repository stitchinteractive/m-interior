// step 1: import
import * as React from "react"
import { Link } from "gatsby"

// import components
import { Layout } from "../components/layout"
import { TestimonialItem } from "../components/testimonial-item"
import { Membership } from "../components/membership"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

// import module.css
import * as indexModule from "./index.module.css"

// step 2: define
const HomePage = () => {
  return (
    <Layout>
      <div className="bg_black font_white">
        {/* banner for mobile */}
        <div className="d-md-none">
          <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide
              className={`${indexModule.banner_home} d-flex flex-column justify-content-center align-items-start h-100`}
            >
              <div className="text-center h-100">
                <div>
                  <img src="/home/banner_1.jpg" alt="Acacia Blocks" />
                </div>
                <div className={indexModule.padding_banner}>
                  <h1 className="text-uppercase pb-3">Acacia Blocks</h1>
                  <p className="pb-5">
                    Find fun and freedom in transforming your spaces with our
                    modular furniture series. Simply connect, stack and mount
                    the blocks to build your own creative storage display.
                  </p>
                  <p>
                    <Link to="/">
                      <button
                        type="button"
                        className="btn btn-outline btn-outline-large"
                      >
                        Discover More
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`${indexModule.banner_home} d-flex flex-column justify-content-center align-items-start h-100`}
            >
              <div className="text-center h-100">
                <div>
                  <img src="/home/banner_2.jpg" alt="M.INT club" />
                </div>
                <div className={indexModule.padding_banner}>
                  <h1 className="text-uppercase pb-3">M.INT club</h1>
                  <p>
                    <div className="text-uppercase pb-3">
                      <strong>is</strong> <i>more than just </i>
                      <strong>a rewards program</strong>
                    </div>
                  </p>
                  <p className="pb-5">
                    Join our community and be a part of something bigger.
                  </p>
                  <p>
                    <Link to="/">
                      <button
                        type="button"
                        className="btn btn-outline btn-outline-large"
                      >
                        Join now and enjoy 10% off your first purchase
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`${indexModule.banner_home} d-flex flex-column justify-content-center align-items-start h-100`}
            >
              <div className="text-center h-100">
                <div>
                  <img src="/home/banner_3.jpg" alt="Free delivery" />
                </div>
                <div className={indexModule.padding_banner}>
                  <h1 className="text-uppercase">Free delivery to your door</h1>
                  <p className="pb-5">
                    Enjoy free delivery when you spend over $150 in a single
                    purchase.
                  </p>
                  <p>
                    <Link to="/">
                      <button
                        type="button"
                        className="btn btn-outline btn-outline-large"
                      >
                        Shop Now
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* banner for mobile */}
        {/* banner for tablets and larger screens */}
        <div className="d-none d-md-block">
          <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide
              className={`${indexModule.banner_home} d-flex flex-column justify-content-center align-items-start h-100`}
              style={{
                background: "url(/home/banner_1.jpg) center center no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-start h-100">
                <h1 className="text-uppercase pb-3">Acacia Blocks</h1>
                <p className="font_lg pb-9">
                  Find fun and freedom in transforming your spaces with our
                  modular furniture series. Simply connect, stack and mount the
                  blocks to build your own creative storage display.
                </p>
                <p>
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-outline btn-outline-large"
                    >
                      Discover More
                    </button>
                  </Link>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={`${indexModule.banner_home} d-flex flex-column justify-content-center align-items-start h-100`}
              style={{
                background: "url(/home/banner_2.jpg) center center no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-uppercase pb-3">M.INT club</h1>
              <p>
                <div className="font_xxl text-uppercase">
                  <strong>is</strong> <i>more than just </i>
                  <strong>a rewards program</strong>
                </div>
              </p>
              <p className="font_lg pb-9">
                Join our community and be a part of something bigger.
              </p>
              <p>
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-outline btn-outline-large"
                  >
                    Join now and enjoy 10% off your first purchase
                  </button>
                </Link>
              </p>
            </SwiperSlide>
            <SwiperSlide
              className={`${indexModule.banner_home} d-flex flex-column justify-content-center align-items-start h-100`}
              style={{
                background: "url(/home/banner_3.jpg) center center no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h1 className="text-uppercase pb-3">
                Free delivery to your door
              </h1>
              <p className="font_lg pb-9">
                Enjoy free delivery when you spend over $150 in a single
                purchase.
              </p>
              <p>
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-outline btn-outline-large"
                  >
                    Shop Now
                  </button>
                </Link>
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* end banner for tablets and larger screens */}
        <div id="container_min_modules" className="container">
          <div className="d-none d-md-block">
            <div className="row row_padding">
              <div className="col-12 col-md-8 col-lg-6">
                <h1 className="text-uppercase pb-7">Min+Modules</h1>
                <p className="font_lg font_grey_light">
                  Min+Modules is a series of modular furniture exclusively
                  designed in-house by M.INT. Each module is connected by
                  magnetic connectors which allows flexible arrangements to suit
                  your needs and spaces.
                </p>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-end bd-highlight mb-3">
                  <div className="padding_min_module flex-fill bd-highlight text-center">
                    <p>
                      <img src="/home/1.png" alt="" />
                    </p>
                    <p>
                      <Link to="/">
                        <button type="button" className="btn btn-outline">
                          Small side table
                        </button>
                      </Link>
                    </p>
                  </div>
                  <div className="padding_min_module flex-fill bd-highlight text-center">
                    <p>
                      <img src="/home/2.png" alt="" />
                    </p>
                    <p>
                      <Link to="/">
                        <button type="button" className="btn btn-outline">
                          Large side table
                        </button>
                      </Link>
                    </p>
                  </div>
                  <div className="padding_min_module flex-fill bd-highlight text-center">
                    <p>
                      <img src="/home/3.png" alt="" />
                    </p>
                    <p>
                      <Link to="/">
                        <button type="button" className="btn btn-outline">
                          Small bedroom chest
                        </button>
                      </Link>
                    </p>
                  </div>
                  <div className="padding_min_module flex-fill bd-highlight text-center">
                    <p>
                      <img src="/home/4.png" alt="" />
                    </p>
                    <p>
                      <Link to="/">
                        <button type="button" className="btn btn-outline">
                          Tall bookshelf
                        </button>
                      </Link>
                    </p>
                  </div>
                  <div className="padding_min_module flex-fill bd-highlight text-center">
                    <p>
                      <img src="/home/5.png" alt="" />
                    </p>
                    <p>
                      <Link to="/">
                        <button type="button" className="btn btn-outline">
                          Full bookshelf
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row_padding">
            <div className="col-md-6">
              <h1 className="text-uppercase">Two Sizes.</h1>
              <div className="text_indent">
                <h2 className="text-uppercase mb-4">Endless Configurations.</h2>
                <p>Stack and arrange the modules in any way you want.</p>
              </div>
            </div>
            <div className="col-md-6">
              <video width="100%" height="100%" controls>
                <source src="/home/intro_sizes.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="row row_padding">
            <div className="col-md-6 order-2 order-md-1">
              <video width="100%" height="100%" controls>
                <source src="/home/intro_connectors.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <h2 className="text-uppercase">Magnetic</h2>
              <div className="text_indent">
                <h2 className="text-uppercase mb-4">Connectors.</h2>
                <p>
                  Each module is connected by magnetic connectors which allows
                  flexible arrangements to suit your needs and spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="row row_padding">
            <div className="col-md-6">
              <h1 className="text-uppercase">Flexible</h1>
              <div className="text_indent">
                <h2 className="text-uppercase mb-4">Storage Compartments.</h2>
                <p>
                  Choose from a selection of doors, drawers and space dividers
                  to satisfy your storage requirements.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <video width="100%" height="100%" controls>
                <source src="/home/intro_storage.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="row row_padding">
            <div className="col-md-6 order-2 order-md-1">
              <video width="100%" height="100%" controls>
                <source src="/home/intro_colours.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <h2 className="text-uppercase">Your Space.</h2>
              <div className="text_indent">
                <h1 className="text-uppercase mb-4">Your Style.</h1>
                <p>
                  From wood grains to solid colours and patterns, mix and match
                  to form the perfect combination that suit your interior style.
                </p>
              </div>
            </div>
          </div>
          <div class="row row_padding row-flex">
            <div class="col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5">
              <div class="content_100 bg_blue text-center">
                <h3 className="pb-10">
                  Why compromise when you can customise?
                </h3>
                <p>
                  <Link to="/">
                    <button type="button" className="btn btn-outline">
                      Build your own Min+Modules
                    </button>
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5">
              <div class="content_100 bg_blue">
                <p className="p-5">
                  <img src="/home/1.png" alt="" className="mx-auto" />
                </p>
              </div>
            </div>
            <div class="col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5">
              <div class="content_100 bg_blue text-center">
                <h3 className="pb-10">There’s a Min+Module for every space.</h3>
                <p>
                  <Link to="/">
                    <button type="button" className="btn btn-outline">
                      Explore Lookbook
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row_padding">
          <div className="col text-center">
            <h2 className="pb-5 text-uppercase">As featured on</h2>
          </div>
          <div className="col">
            <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center bd-highlight mb-3">
              <div className="padding_featured">
                <img
                  src="/home/logo_straits_times.png"
                  alt="The Straits Times"
                />
              </div>
              <div className="padding_featured">
                <img src="/home/logo_today.png" alt="Today" />
              </div>
              <div className="padding_featured">
                <img src="/home/logo_home_decor.png" alt="Home Decor" />
              </div>
              <div className="padding_featured">
                <img src="/home/logo_pets.png" alt="Pets" />
              </div>
              <div className="padding_featured">
                <img src="/home/logo_squarerooms.png" alt="Square Rooms" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_grey">
        <div className="container-fluid">
          <div className="row padding_testimonial">
            <div className="col text-center">
              <h2 className="pb-5 text-uppercase">Hear from our customers</h2>
              <p class="pb-10">
                <Link to="/">
                  <button type="button" className="btn btn-light">
                    Write a review
                  </button>
                </Link>
              </p>
            </div>
            <div className="col">
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
      <Membership />
    </Layout>
  )
}

// step 3: export
export default HomePage
