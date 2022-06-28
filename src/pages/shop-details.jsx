// step 1: import
import React, { useState, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { NumericInput } from "../components/numeric-input"
import { Link } from "gatsby"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
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

  const [quantity, setQuantity] = React.useState(1)

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
          <div className="row row_padding">
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
                  <button type="button" className="btn btn-light">
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
                  <NumericInput
                    aria-label="Quantity"
                    onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
                    onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
                    onChange={(event) => setQuantity(event.currentTarget.value)}
                    value={quantity}
                    min="1"
                    max="20"
                  />
                  <Link to="/" className="ps-5">
                    <button type="button" className="btn btn-tertiary">
                      Add to cart
                    </button>
                  </Link>
                </p>
              </div>
              <p className="pb-1">
                <Link to="/">
                  <button type="button" className="btn btn-light">
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
            <Tab eventKey="about" title="About Min+Modules">
              <h5>FUN AND FREEDOM IN ARRANGING SPACES</h5>
              <p>
                The fun part about Min+Modules is that the modules can be
                effortlessly separated and rearranged to form side tables, TV
                consoles, bookshelves, bedroom chests etc. The magnetic
                connectors between each module allows a smooth and easy
                transition for your spaces.
              </p>
              <h5>ADDS FUNCTIONALITY TO YOUR SPACES</h5>
              <p>
                Designed with high quality and durable materials, the internal
                modules are available in two sizes: 40cm width for compact
                storage and 80cm width for bigger displays, with standard height
                and depth of 40cm. Balancing style with function, the
                Min+Modules is thoughtfully designed with tons of functional
                add-ons from sleek drawers to doors and even space dividers.
              </p>
              <h5>HIGHLY CUSTOMISABLE INSIDE OUT</h5>
              <p>
                Why get a custom-made furniture that comes with a high price
                when you can customise your very own Min+Modules furniture –
                right down to details such as sizes, colours and storage
                compartments. The Min+Modules can check all your boxes and even
                offer more than what you need due to its multi-functional and
                modular nature. Start building your very own Min+Modules
                furniture with our product configurator HERE.
              </p>
            </Tab>
            <Tab eventKey="details" title="Details">
              <div className="row">
                <div class="col-md-6">
                  <h5>Dimensions:</h5>
                  <p>
                    Width: 83cm
                    <br />
                    Height: 170cm
                    <br />
                    Depth: 40cm
                  </p>
                  <h5>WHAT’S INCLUDED IN THIS TALL BOOKSHELF</h5>
                  <ul className="listing_bullet">
                    <li>8 x Small module</li>
                    <li>2 x Full drawer (small)</li>
                    <li>2 x Door</li>
                    <li>2 x Half divider</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h5>MATERIALS:</h5>
                  <p>
                    Modules and external panels: Medium-density fibreboard
                    <br />
                    Doors and drawers: Medium-density fibreboard, aluminium
                    handle
                    <br />
                    Dividers: Plywood
                    <br />
                    Base support: Steel
                    <br />
                    Magnetic connector: Low-powered magnets, silicone
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
              <h5>LEAVE THE HARD WORK TO US – FOR FREE</h5>
              <p>
                We will take care of the installation for you at no additional
                charges, so you can focus your time and energy on sprucing up
                your spaces! Our installation team will deliver the product to
                your place, assemble it right away and position it perfectly at
                your sweet spot.
              </p>
              <p>
                Do note that for set-ups taller than 1.2m, our installation team
                will have to secure and affix it to a wall to ensure stability.
              </p>
              <h5>TIME TO SWITCH THINGS UP?</h5>
              <p>
                If you ever need to rearrange the modules or refresh the
                colours, simply hit us up and we will be on our way to assist
                you.
              </p>
            </Tab>
            <Tab eventKey="samples" title="Get Material Samples">
              <h5>MODULAR CONNECTION</h5>
              <p>
                Acacia Blocks are intuitively designed with magnetic connectors
                so that you can easily attach and detach individual blocks to
                create your own furniture piece. Simply attach the connectors
                onto the side holes of the Acacia Blocks to build your own
                configuration, without the need for drills or fasteners.
              </p>
              <h5>BESPOKE DESIGNS</h5>
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
          </Tabs>
        </div>
      </div>
      <div className="bg_blue font_white">
        <div className="container text-center">
          <div className="row row_padding">
            <div className="col-12">
              <h2 className="text-uppercase pb-3">Meet the Min+Modules</h2>
              <p className="mb-80">
                The Min+Modules is more than just your average furniture piece.
                It's modular.
              </p>
            </div>
            <div className="col-lg-4 font_medium text-uppercase">
              <video width="100%" height="100%" controls>
                <source
                  src="/shop/min_modules/1_module_sizes.mp4"
                  type="video/mp4"
                />
              </video>
              <p className="px-5 pt-3 mb-80">
                TWO MODULE SIZES FOR FLEXIBLE CONFIGURATIONS
              </p>
            </div>
            <div className="col-lg-4 font_medium text-uppercase">
              <video width="100%" height="100%" controls>
                <source
                  src="/shop/min_modules/2_magnetic_connectors.mp4"
                  type="video/mp4"
                />
              </video>
              <p className="px-5 pt-3 mb-80">
                STACK &amp; ARRANGE THE MODULES USING MAGNETIC CONNECTORS
              </p>
            </div>
            <div className="col-lg-4 font_medium text-uppercase">
              <video width="100%" height="100%" controls>
                <source
                  src="/shop/min_modules/3_drawers_dividers.mp4"
                  type="video/mp4"
                />
              </video>
              <p className="px-5 pt-3 mb-80">
                MIX & MATCH BETWEEN doors, drawers & dividers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_grey">
        <div className="container">
          <div class="row row_padding d-flex">
            <div className="col-lg-6 p-5 align-self-center">
              <img src="/shop/min_modules/customise.png" alt="Customise" />
            </div>
            <div className="col-lg-6 align-self-center">
              <h2 className="text-uppercase mb-5">
                Customisation
                <br />
                at your fingertips
              </h2>
              <p class="mb-50">
                Customise your very own Min+Modules furniture with our product
                configurator – right down to details such as sizes, colours and
                storage compartments.
              </p>
              <p>
                <Link to="/">
                  <button type="button" className="btn btn-light">
                    Build your own Min+Modules
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_black font_white">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-7 align-self-center">
              <h2 className="text-uppercase mb-5">
                THERE'S A MIN+MODULE FOR EVERY SPACE
              </h2>
              <p className="mb-50">
                Get inspirations on how to style your spaces with the
                Min+Modules. Regardless of your interior style, the Min+Modules
                can fit into any spaces of yours – meeting all your creative and
                functional needs.
              </p>
              <p>
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-outline-large font_white"
                  >
                    Explore lookbook
                  </button>
                </Link>
              </p>
            </div>
            <div className="col-lg-5">
              <div className="vertical_scroller">
                <p>
                  <img src="/shop/min_modules/lookbook_1.jpg" alt="" />
                </p>
                <p>
                  <img src="/shop/min_modules/lookbook_2.jpg" alt="" />
                </p>
                <p>
                  <img src="/shop/min_modules/lookbook_3.jpg" alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default ShopDetails
