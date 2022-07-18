// step 1: import
import React, { useState, useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { NumericInput } from "../components/numeric-input"
import { AcaciaIntro } from "../components/acacia-intro"
import { Testimonials } from "../components/testimonials"
import { ProductList } from "../components/product-list"
import { BackToTop } from "../components/back-to-top"
import { Link } from "gatsby"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Overlay from "react-bootstrap/Overlay"
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
    "./shop/acacia/acacia_block_blue.png",
    "./shop/acacia/acacia_block_blue.png",
    "./shop/acacia/acacia_block_blue.png",
    "./shop/acacia/acacia_block_blue.png",
    "./shop/acacia/acacia_block_blue.png",
  ]

  const [quantity, setQuantity] = React.useState(1)

  // init tooltips
  const [show_1, setShow_1] = useState(false)
  const [show_2, setShow_2] = useState(false)
  const [show_3, setShow_3] = useState(false)
  const [show_4, setShow_4] = useState(false)
  const [show_5, setShow_5] = useState(false)
  const [show_6, setShow_6] = useState(false)
  const [show_7, setShow_7] = useState(false)
  const target_1 = useRef(null)
  const target_2 = useRef(null)
  const target_3 = useRef(null)
  const target_4 = useRef(null)
  const target_5 = useRef(null)
  const target_6 = useRef(null)
  const target_7 = useRef(null)

  return (
    <Layout>
      <div className="bg_grey">
        <div className="container">
          <div className="row row_padding">
            <div className="text-uppercase font_xs mb-90">
              <ul className="listing_breadcrumbs ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/">Modular Furniture</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/">Acacia Blocks</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/">Acacia Block</Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-7">
              <section className="slider px-md-5">
                <div className="slider__flex">
                  <div className="slider__col">
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
                        breakpoints={{
                          0: {
                            direction: "horizontal",
                          },
                          768: {
                            direction: "vertical",
                          },
                        }}
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
                  </div>

                  <div className="slider__images">
                    <div className="slider__prev">
                      <img src="./icons/btn_prev.png" alt="Prev" />
                    </div>

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
                      breakpoints={{
                        0: {
                          direction: "horizontal",
                        },
                        768: {
                          direction: "horizontal",
                        },
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

                    <div className="slider__next">
                      <img src="./icons/btn_next.png" alt="Next" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-12 col-md-8 col-lg-5">
              <h3 className="text-uppercase mb-10">Acacia block</h3>
              <h4 className="text-uppercase font_grey_medium_3 mb-40">
                SGD 67
              </h4>
              <div className="line_height_dense">
                <p>
                  Acacia Blocks can be effortlessly connected and stacked using
                  magnetic connectors – giving you fun and freedom to transform
                  your spaces however you like, whenever you like. From storage
                  displays to desk organisers and partitions, it’s all up to
                  your creativity!
                </p>
                <p>
                  Exclusively designed in-house by M.INT to suit your every
                  needs and occasions.
                </p>
              </div>
              <hr className="my-3" />
              <div className="row mt-3 mb-4">
                <div className="col-4 col-md-3">
                  <div className="d-flex align-items-start">
                    <div>Colour&nbsp;</div>
                    <div
                      ref={target_1}
                      onClick={() => setShow_1(!show_1)}
                      className="d-flex pointer align-self-center"
                    >
                      <img
                        src="/icons/ico_info.png"
                        alt="Info"
                        width="22"
                        height="22"
                      />
                    </div>
                    <Overlay
                      target={target_1.current}
                      show={show_1}
                      placement="top"
                    >
                      {(props) => (
                        <Tooltip id="overlay-1" {...props}>
                          Lorem ipsum dolor amet.
                        </Tooltip>
                      )}
                    </Overlay>
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <p>
                    <ul className="listing_left_align">
                      <li>
                        <div
                          ref={target_2}
                          onClick={() => setShow_2(!show_2)}
                          className="d-flex pointer"
                        >
                          <img
                            src="/icons/color_white.png"
                            alt="White"
                            width="22"
                            height="22"
                          />
                        </div>
                        <Overlay
                          target={target_2.current}
                          show={show_2}
                          placement="top"
                        >
                          {(props) => (
                            <Tooltip id="overlay-2" {...props}>
                              Lorem ipsum dolor amet.
                            </Tooltip>
                          )}
                        </Overlay>
                      </li>
                      <li>
                        <div
                          ref={target_3}
                          onClick={() => setShow_3(!show_3)}
                          className="d-flex pointer"
                        >
                          <img
                            src="/icons/color_grey.png"
                            alt=""
                            width="22"
                            height="22"
                          />
                        </div>
                        <Overlay
                          target={target_3.current}
                          show={show_3}
                          placement="top"
                        >
                          {(props) => (
                            <Tooltip id="overlay-3" {...props}>
                              Lorem ipsum dolor amet.
                            </Tooltip>
                          )}
                        </Overlay>
                      </li>
                      <li>
                        <div
                          ref={target_4}
                          onClick={() => setShow_4(!show_4)}
                          className="d-flex pointer"
                        >
                          <img
                            src="/icons/color_black.png"
                            alt=""
                            width="22"
                            height="22"
                          />
                        </div>
                        <Overlay
                          target={target_4.current}
                          show={show_4}
                          placement="top"
                        >
                          {(props) => (
                            <Tooltip id="overlay-4" {...props}>
                              Lorem ipsum dolor amet.
                            </Tooltip>
                          )}
                        </Overlay>
                      </li>
                      <li>
                        <div
                          ref={target_5}
                          onClick={() => setShow_5(!show_5)}
                          className="d-flex pointer"
                        >
                          <img
                            src="/icons/color_blue.png"
                            alt=""
                            width="22"
                            height="22"
                          />
                        </div>
                        <Overlay
                          target={target_5.current}
                          show={show_5}
                          placement="top"
                        >
                          {(props) => (
                            <Tooltip id="overlay-5" {...props}>
                              Lorem ipsum dolor amet.
                            </Tooltip>
                          )}
                        </Overlay>
                      </li>
                      <li>
                        <div
                          ref={target_6}
                          onClick={() => setShow_6(!show_6)}
                          className="d-flex pointer"
                        >
                          <img
                            src="/icons/color_yellow.png"
                            alt=""
                            width="22"
                            height="22"
                          />
                        </div>
                        <Overlay
                          target={target_6.current}
                          show={show_6}
                          placement="top"
                        >
                          {(props) => (
                            <Tooltip id="overlay-6" {...props}>
                              Lorem ipsum dolor amet.
                            </Tooltip>
                          )}
                        </Overlay>
                      </li>
                      <li>
                        <div
                          ref={target_7}
                          onClick={() => setShow_7(!show_7)}
                          className="d-flex pointer"
                        >
                          <img
                            src="/icons/color_red.png"
                            alt=""
                            width="22"
                            height="22"
                          />
                        </div>
                        <Overlay
                          target={target_7.current}
                          show={show_7}
                          placement="top"
                        >
                          {(props) => (
                            <Tooltip id="overlay-7" {...props}>
                              Lorem ipsum dolor amet.
                            </Tooltip>
                          )}
                        </Overlay>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-4 col-md-3">
                  <NumericInput
                    aria-label="Quantity"
                    onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                    onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                    onChange={(event) => setQuantity(event.currentTarget.value)}
                    value={quantity}
                    min="1"
                    max="20"
                  />
                </div>
                <div className="col-8 col-md-9">
                  <Link to="/">
                    <button type="button" className="btn btn-tertiary w-100">
                      Add to cart
                    </button>
                  </Link>
                </div>
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
      <div className="container">
        <div className="row row_padding">
          <Tabs
            defaultActiveKey="about"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="about" title="About Acacia Blocks">
              <h5>MODULAR CONNECTION</h5>
              <p>
                Acacia Blocks are intuitively designed with magnetic connectors
                so that you can easily attach and detach individual blocks to
                create your own furniture piece. Simply attach the connectors
                onto the side holes of the Acacia Blocks to build your own
                configuration, without the need for drills or fasteners.
              </p>
              <h5>BESPOKE DESIGNS </h5>
              <p>
                Acacia Blocks can be flexibly integrated with carpentry works to
                create bespoke designs. Be it a TV console, feature wall or
                partition, Acacia Blocks can fit in everywhere as your creative
                buddy!
              </p>
              <h5>CREATIVELY CUSTOMISABLE TO SUIT YOUR SPACE</h5>
              <p>
                There’s a lot more that you can do with the Acacia Blocks. From
                add-on lightings to removable clear covers and shelf dividers,
                the customisation possibilities are endless.
              </p>
              <p>
                Check out more customisation ideas for the Acacia Blocks below
                and get a complimentary design consultation HERE.
              </p>
            </Tab>
            <Tab eventKey="details" title="Details">
              <div className="row">
                <div className="col-md-6">
                  <h5>DIMENSIONS:</h5>
                  <p>
                    Width: 40cm
                    <br />
                    Height: 35cm
                    <br />
                    Depth: 20cm
                  </p>
                  <h5>WEIGHT</h5>
                  <p>Approx. 4kg per unit </p>
                  <h5>WHAT’S INCLUDED</h5>
                  <ul className="listing_bullet">
                    <li>Each Acacia Block comes with one magnetic connector</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>MATERIALS:</h5>
                  <p>
                    Acacia Block: Medium-density fibreboard
                    <br />
                    Magnetic connector: Low-powered magnet, silicone
                  </p>
                  <h5>CARE INSTRUCTIONS</h5>
                  <ul className="listing_bullet">
                    <li>Maximum load of 100kg per module </li>
                    <li>
                      For daily cleaning, wipe with a soft dry cloth or duster
                    </li>
                    <li>
                      To maintain the furniture condition, wipe the surface
                      frequently with a damp cloth and lightly wipe clean with a
                      dry cloth
                    </li>
                  </ul>
                </div>
              </div>
            </Tab>
            <Tab eventKey="installation" title="Installation">
              <h5>WALL MOUNTING SERVICES</h5>
              <p>
                If you’re looking to take the Acacia Blocks up another level, we
                are happy to provide installation services at a chargeable fee.
                We highly recommend that you leave the work to us (don’t sweat
                it!) as our team will pre-assemble the blocks onto a back panel.
                This way, there won’t be any visible screws on the Acacia Blocks
                as we will be drilling through the back panel instead of the
                blocks.
              </p>
              <p>
                Do note that the Acacia Blocks can only be mounted on solid
                walls to ensure that the set-up is secured firmly and safely.
              </p>
              <h5>CUSTOMISATION SERVICES</h5>
              <p>
                For add-on features such as lightings and clear covers, the cost
                varies depending on the requirements. Speak to us through a
                complimentary design consultation to find out more!
              </p>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bg_blue">
        <div className="container">
          <div className="row row_padding font_white">
            <div className="col-12 col-md-7 order-2 order-md-1">
              <AcaciaIntro />
            </div>
            <div className="col-12 col-md-4 offset-md-1 order-1 order-md-2">
              <h2 className="text-uppercase mb-5">More than just a block</h2>
              <p>
                Want more customisation ideas for the Acacia Blocks? Check out
                our guide below and see how our customers do it!
              </p>
              <p>
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-outline-large font_white mb-50"
                  >
                    Acacia Guide
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_black font_white">
        <div className="container">
          <div className="row row_padding">
            <div className="col-md-8 offset-md-2 col-lg-7 offset-lg-0 align-self-center">
              <h2 className="text-uppercase mb-5">Create your own spaces</h2>
              <p className="mb-50">
                Get inspirations on how to style your spaces with the Acacia
                Blocks. Regardless of your interior style, the Acacia Blocks can
                fit into any spaces of yours – meeting all your creative and
                functional needs.
              </p>
              <p>
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-outline-large font_white mb-50"
                  >
                    Acacia Guide
                  </button>
                </Link>
              </p>
            </div>
            <div className="col-md-8 offset-md-2 col-lg-5 offset-lg-0">
              <img src="/shop/acacia/lookbook_1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <div className="container">
        <div className="row row_padding">
          <h3 className="text-uppercase py-5">You might also like</h3>
          <ProductList />
          <BackToTop />
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default ShopDetails
