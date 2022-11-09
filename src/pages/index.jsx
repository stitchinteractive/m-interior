// step 1: import
import React, { useEffect, useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"

// import components
import { Layout } from "../components/layout"
import { Membership } from "../components/membership"
import { Testimonials } from "../components/testimonials"

// import Swiper core and required modules
import { Pagination, A11y } from "swiper"
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
  gsap.registerPlugin(ScrollTrigger)

  /* autoplay videos */
  const intro1Ref = useRef()

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#intro_sizes",
      onEnter: () => intro1Ref.current.play(),
      onEnterBack: () => intro1Ref.current.play(),
      onLeave: () => intro1Ref.current.pause(),
      onLeaveBack: () => intro1Ref.current.pause(),
    })
  }, [])

  const intro2Ref = useRef()

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#intro_connectors",
      onEnter: () => intro2Ref.current.play(),
      onEnterBack: () => intro2Ref.current.play(),
      onLeave: () => intro2Ref.current.pause(),
      onLeaveBack: () => intro2Ref.current.pause(),
    })
  }, [])

  const intro3Ref = useRef()

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#intro_storage",
      onEnter: () => intro3Ref.current.play(),
      onEnterBack: () => intro3Ref.current.play(),
      onLeave: () => intro3Ref.current.pause(),
      onLeaveBack: () => intro3Ref.current.pause(),
    })
  }, [])

  const intro4Ref = useRef()

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#intro_colours",
      onEnter: () => intro4Ref.current.play(),
      onEnterBack: () => intro4Ref.current.play(),
      onLeave: () => intro4Ref.current.pause(),
      onLeaveBack: () => intro4Ref.current.pause(),
    })
  }, [])

  const bannerRef = useRef(null)
  const minLeadInRef = useRef(null)
  const furniture1Ref = useRef(null)
  const furniture2Ref = useRef(null)
  const furniture3Ref = useRef(null)
  const furniture4Ref = useRef(null)
  const furniture5Ref = useRef(null)
  const furniture1TextRef = useRef(null)
  const furniture2TextRef = useRef(null)
  const furniture3TextRef = useRef(null)
  const furniture4TextRef = useRef(null)
  const furniture5TextRef = useRef(null)
  const sizes1Ref = useRef(null)
  const sizes2Ref = useRef(null)
  const connectors1Ref = useRef(null)
  const connectors2Ref = useRef(null)
  const compartments1Ref = useRef(null)
  const compartments2Ref = useRef(null)
  const style1Ref = useRef(null)
  const style2Ref = useRef(null)
  const minCta1Ref = useRef(null)
  const minCta2Ref = useRef(null)
  const minCta3Ref = useRef(null)
  const featured1Ref = useRef(null)
  const featured2Ref = useRef(null)
  const testimonialsRef = useRef(null)
  const memberRef = useRef(null)

  // wait until DOM has been rendered
  useLayoutEffect(() => {
    const banner = bannerRef.current
    gsap.fromTo(
      banner,
      { autoAlpha: 0, y: -100 },
      {
        autoAlpha: 1,
        y: 0,
        delay: 0.5,
        scrollTrigger: {
          trigger: banner,
          start: "top center",
        },
      }
    )

    const furniture_1 = furniture1Ref.current
    gsap.fromTo(
      furniture_1,
      { x: 0 },
      {
        ease: "none",
        x: 0,
        delay: 1,
        scrollTrigger: {
          trigger: "#container_min_modules",
          start: "top center",
          end: "400px center",
          toggleActions: "restart none reverse reset",
          scrub: true,
        },
      }
    )

    const furniture_2 = furniture2Ref.current
    gsap.fromTo(
      furniture_2,
      { x: -50, y: -50 },
      {
        ease: "none",
        x: 0,
        y: 0,
        delay: 1.2,
        scrollTrigger: {
          trigger: "#container_min_modules",
          start: "top center",
          end: "400px center",
          scrub: true,
        },
      }
    )

    const furniture_3 = furniture3Ref.current
    gsap.fromTo(
      furniture_3,
      { x: -100, y: -100 },
      {
        ease: "none",
        x: 0,
        y: 0,
        delay: 1.4,
        scrollTrigger: {
          trigger: "#container_min_modules",
          start: "top center",
          end: "400px center",
          toggleActions: "restart none reverse reset",
          scrub: true,
        },
      }
    )

    const furniture_4 = furniture4Ref.current
    gsap.fromTo(
      furniture_4,
      { x: -150, y: -150 },
      {
        ease: "none",
        x: 0,
        y: 0,
        delay: 1.6,
        scrollTrigger: {
          trigger: "#container_min_modules",
          start: "top center",
          end: "400px center",
          toggleActions: "restart none reverse reset",
          scrub: true,
        },
      }
    )

    const furniture_5 = furniture5Ref.current
    gsap.fromTo(
      furniture_5,
      { x: -200, y: -200 },
      {
        ease: "none",
        x: 0,
        y: 0,
        delay: 1.8,
        scrollTrigger: {
          trigger: "#container_min_modules",
          start: "top center",
          end: "400px center",
          toggleActions: "restart none reverse reset",
          scrub: true,
        },
      }
    )

    const min_lead_in = minLeadInRef.current
    gsap.fromTo(
      min_lead_in,
      { autoAlpha: 0, ease: "none", x: -100 },
      {
        autoAlpha: 1,
        ease: "none",
        x: 0,
        scrollTrigger: {
          trigger: "#container_min_modules_content",
          start: "top center",
          end: "center center",
          toggleActions: "restart none none none",
        },
      }
    )

    const furniture_1_text = furniture1TextRef.current
    gsap.fromTo(
      furniture_1_text,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        ease: "none",
        delay: 0.8,
        scrollTrigger: {
          trigger: "#container_min_modules",
          start: "450px center",
          toggleActions: "restart none reverse reset",
        },
      }
    )

    const furniture_2_text = furniture2TextRef.current
    gsap.fromTo(
      furniture_2_text,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        ease: "none",
        delay: 0.8,
        scrollTrigger: {
          trigger: "#container_min_modules",
          start: "450px center",
          toggleActions: "restart none reverse reset",
        },
      }
    )

    const furniture_3_text = furniture3TextRef.current
    gsap.fromTo(
      furniture_3_text,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        ease: "none",
        delay: 0.8,
        scrollTrigger: {
          trigger: "#container_min_modules",
          start: "450px center",
          toggleActions: "restart none reverse reset",
        },
      }
    )

    const furniture_4_text = furniture4TextRef.current
    gsap.fromTo(
      furniture_4_text,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        ease: "none",
        delay: 0.8,
        scrollTrigger: {
          trigger: "#container_min_modules",
          start: "450px center",
          toggleActions: "restart none reverse reset",
        },
      }
    )

    const furniture_5_text = furniture5TextRef.current
    gsap.fromTo(
      furniture_5_text,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        ease: "none",
        delay: 0.8,
        scrollTrigger: {
          trigger: "#container_min_modules",
          start: "450px center",
          toggleActions: "restart none reverse reset",
        },
      }
    )

    const sizes_1 = sizes1Ref.current
    gsap.fromTo(
      sizes_1,
      { autoAlpha: 0, x: -100 },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: sizes_1,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const sizes_2 = sizes2Ref.current
    gsap.fromTo(
      sizes_2,
      { autoAlpha: 0, x: 100 },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: sizes_2,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const connectors_1 = connectors1Ref.current
    gsap.fromTo(
      connectors_1,
      { autoAlpha: 0, x: -100 },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: connectors_1,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const connectors_2 = connectors2Ref.current
    gsap.fromTo(
      connectors_2,
      { autoAlpha: 0, x: 100 },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: connectors_2,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const compartments_1 = compartments1Ref.current
    gsap.fromTo(
      compartments_1,
      { autoAlpha: 0, x: -100 },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: compartments_1,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const compartments_2 = compartments2Ref.current
    gsap.fromTo(
      compartments_2,
      { autoAlpha: 0, x: 100 },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: compartments_2,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const style_1 = style1Ref.current
    gsap.fromTo(
      style_1,
      { autoAlpha: 0, x: -100 },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: style_1,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const style_2 = style2Ref.current
    gsap.fromTo(
      style_2,
      { autoAlpha: 0, x: 100 },
      {
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: style_2,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const min_cta_1 = minCta1Ref.current
    gsap.fromTo(
      min_cta_1,
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: min_cta_1,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const min_cta_2 = minCta2Ref.current
    gsap.fromTo(
      min_cta_2,
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        delay: 0.4,
        scrollTrigger: {
          trigger: min_cta_2,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const min_cta_3 = minCta3Ref.current
    gsap.fromTo(
      min_cta_3,
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        delay: 0.8,
        scrollTrigger: {
          trigger: min_cta_3,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const featured_1 = featured1Ref.current
    gsap.fromTo(
      featured_1,
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: featured_1,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const featured_2 = featured2Ref.current
    gsap.fromTo(
      featured_2,
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        delay: 0.4,
        scrollTrigger: {
          trigger: featured_2,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const testimonials = testimonialsRef.current
    gsap.fromTo(
      testimonials,
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: testimonials,
          start: "top center",
          end: "bottom center",
        },
      }
    )

    const member = memberRef.current
    gsap.fromTo(
      member,
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        delay: 0.8,
        scrollTrigger: {
          trigger: member,
          start: "top center",
          end: "bottom center",
        },
      }
    )
  })

  return (
    <Layout>
      <div className="bg_black font_white">
        {/* banner */}
        <div ref={bannerRef}>
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
                <p>
                  Find fun and freedom in transforming your spaces with our
                  modular furniture series. Simply connect, stack and mount the
                  blocks to build your own creative storage display.
                </p>
                <p>
                  <Link to="/shop/modular-furniture/acacia-blocks">
                    <button type="button" className="btn btn-outline-large">
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
              <p>Join our community and be a part of something bigger.</p>
              <p>
                <Link to="/create-account">
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
              <p>
                Enjoy free delivery when you spend over $150 in a single
                purchase.
              </p>
              <p>
                <Link to="/shop">
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
        {/* end banner */}
        <div id="container_min_modules" className="container">
          <div className="d-none d-md-block">
            <div className="row row_padding">
              <div className="col-12 col-md-8 col-lg-6 box">
                <h1 className="text-uppercase pb-7">Min+Modules</h1>
                <div ref={minLeadInRef}>
                  <p className="font_lg font_grey_light font_letterspacing_1">
                    Min+Modules is a series of modular furniture exclusively
                    designed in-house by M.INT. Each module is connected by
                    magnetic connectors which allows flexible arrangements to
                    suit your needs and spaces.
                  </p>
                </div>
              </div>
              <div id="container_min_modules_content" className="col-12">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-end bd-highlight mb-3">
                  <div className="padding_min_module flex-fill bd-highlight text-center">
                    <div ref={furniture1Ref}>
                      <p>
                        <img src="/home/1.png" alt="" />
                      </p>
                    </div>
                    <div ref={furniture1TextRef}>
                      <p>
                        <Link to="/shop/detail/small-side-table-i">
                          <button type="button" className="btn btn-outline">
                            Small side table
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="padding_min_module flex-fill bd-highlight text-center">
                    <div ref={furniture2Ref}>
                      <p>
                        <img src="/home/2.png" alt="" />
                      </p>
                    </div>
                    <div ref={furniture2TextRef}>
                      <p>
                        <Link to="/shop/detail/large-side-table">
                          <button type="button" className="btn btn-outline">
                            Large side table
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="padding_min_module flex-fill bd-highlight text-center">
                    <div ref={furniture3Ref}>
                      <p>
                        <img src="/home/3.png" alt="" />
                      </p>
                    </div>
                    <div ref={furniture3TextRef}>
                      <p>
                        <Link to="/shop/detail/small-bedroom-chest">
                          <button type="button" className="btn btn-outline">
                            Small bedroom chest
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="padding_min_module flex-fill bd-highlight text-center">
                    <div ref={furniture4Ref}>
                      <p>
                        <img src="/home/4.png" alt="" />
                      </p>
                    </div>
                    <div ref={furniture4TextRef}>
                      <p>
                        <Link to="/shop/detail/tall-bookshelf">
                          <button type="button" className="btn btn-outline">
                            Tall bookshelf
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="padding_min_module flex-fill bd-highlight text-center">
                    <div ref={furniture5Ref}>
                      <p>
                        <img src="/home/5.png" alt="" />
                      </p>
                    </div>
                    <div ref={furniture5TextRef}>
                      <p>
                        <Link to="/shop/detail/full-bookshelf">
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
        </div>
        <div className="container">
          <div className="row row_padding">
            <div className="col-md-6" ref={sizes1Ref}>
              <h1 className="text-uppercase">Two Sizes.</h1>
              <div className="text_indent">
                <h3 className="text-uppercase mb-4">Endless Configurations.</h3>
                <p className="font_letterspacing_1">
                  Stack and arrange the modules in any way you want.
                </p>
              </div>
            </div>
            <div className="col-md-6" ref={sizes2Ref}>
              <div className="d-block d-md-none">
                <img src="/home/intro_sizes.png" alt="Intro Sizes" />
              </div>
              <div className="d-none d-md-block">
                <video
                  width="100%"
                  height="100%"
                  playsinline
                  autoplay
                  defaultmuted
                  muted
                  loop
                  controls="false"
                  ref={intro1Ref}
                  id="intro_sizes"
                >
                  <source src="/home/intro_sizes.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="row row_padding">
            <div className="col-md-6 order-2 order-md-1" ref={connectors1Ref}>
              <div className="d-block d-md-none">
                <img src="/home/intro_connectors.png" alt="Intro Connectors" />
              </div>
              <div className="d-none d-md-block">
                <video
                  width="100%"
                  height="100%"
                  playsinline
                  autoplay
                  defaultmuted
                  muted
                  loop
                  controls="false"
                  ref={intro2Ref}
                  id="intro_connectors"
                >
                  <source src="/home/intro_connectors.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2" ref={connectors2Ref}>
              <h3 className="text-uppercase">Magnetic</h3>
              <div className="text_indent">
                <h3 className="text-uppercase mb-4">Connectors.</h3>
                <p className="font_letterspacing_1">
                  Each module is connected by magnetic connectors which allows
                  flexible arrangements to suit your needs and spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="row row_padding">
            <div className="col-md-6" ref={compartments1Ref}>
              <h1 className="text-uppercase">Flexible</h1>
              <div className="text_indent">
                <h3 className="text-uppercase mb-4">Storage Compartments.</h3>
                <p className="font_letterspacing_1">
                  Choose from a selection of doors, drawers and space dividers
                  to satisfy your storage requirements.
                </p>
              </div>
            </div>
            <div className="col-md-6" ref={compartments2Ref}>
              <div className="d-block d-md-none">
                <img src="/home/intro_storage.png" alt="Intro Storage" />
              </div>
              <div className="d-none d-md-block">
                <video
                  width="100%"
                  height="100%"
                  playsinline
                  autoplay
                  defaultmuted
                  muted
                  loop
                  controls="false"
                  ref={intro3Ref}
                  id="intro_storage"
                >
                  <source src="/home/intro_storage.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="row row_padding">
            <div className="col-md-6 order-2 order-md-1" ref={style1Ref}>
              <div className="d-block d-md-none">
                <img src="/home/intro_colours.png" alt="Intro Colours" />
              </div>
              <div className="d-none d-md-block">
                <video
                  width="100%"
                  height="100%"
                  playsinline
                  autoplay
                  defaultmuted
                  muted
                  loop
                  controls="false"
                  ref={intro4Ref}
                  id="intro_colours"
                >
                  <source src="/home/intro_colours.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2" ref={style2Ref}>
              <h3 className="text-uppercase">Your Space.</h3>
              <div className="text_indent">
                <h1 className="text-uppercase mb-4">Your Style.</h1>
                <p className="font_letterspacing_1">
                  From wood grains to solid colours and patterns, mix and match
                  to form the perfect combination that suit your interior style.
                </p>
              </div>
            </div>
          </div>
          <div className="row row_padding row-flex">
            <div className="col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5">
              <div className="content_100 bg_blue text-center" ref={minCta1Ref}>
                <h3 className="pb-10">
                  Why compromise when you can customise?
                </h3>
                <p>
                  <Link to="/contact-us">
                    <button type="button" className="btn btn-outline-large">
                      Build your own Min+Modules
                    </button>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5">
              <div className="content_100 bg_blue" ref={minCta2Ref}>
                <p className="p-md-2">
                  <img
                    src="/home/rotating_sizes.gif"
                    alt="Min+Modules"
                    className="mx-auto"
                  />
                </p>
              </div>
            </div>
            <div className="col-md-8 offset-md-2 col-lg-4 offset-lg-0 mb-5">
              <div className="content_100 bg_blue text-center" ref={minCta3Ref}>
                <h3 className="pb-10">There's a Min+Module for every space.</h3>
                <p>
                  <Link to="/lookbook">
                    <button type="button" className="btn btn-outline-large">
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
          <div className="col text-center" ref={featured1Ref}>
            <h2 className="pb-5 text-uppercase">As featured on</h2>
          </div>
          <div className="col" ref={featured2Ref}>
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
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <div ref={memberRef}>
        <Membership />
      </div>
    </Layout>
  )
}

// step 3: export
export default HomePage
