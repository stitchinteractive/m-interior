// step 1: import
import React, { useState, useLayoutEffect, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { NumericInput } from "../components/numeric-input"
import { MinQuality } from "../components/min-quality"
import { Testimonials } from "../components/testimonials"
import { ProductList } from "../components/product-list"
import { BackToTop } from "../components/back-to-top"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import { formatPrice } from "../utils/format-price"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Overlay from "react-bootstrap/Overlay"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import isEqual from "lodash.isequal"
import { AddToCart } from "../components/add-to-cart"

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs, Mousewheel } from "swiper"

// import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// step 2: define component
const ShopDetails = ({ pageContext }) => {
  const { product, recommendation } = pageContext
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

  /* autoplay videos */
  const intro1Ref = useRef()
  const intro2Ref = useRef()
  const intro3Ref = useRef()

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#intro_1",
      onEnter: () => intro1Ref.current.play(),
      onEnterBack: () => intro1Ref.current.play(),
      onLeave: () => intro1Ref.current.pause(),
      onLeaveBack: () => intro1Ref.current.pause(),
    })
  }, [])

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#intro_2",
      onEnter: () => intro2Ref.current.play(),
      onEnterBack: () => intro2Ref.current.play(),
      onLeave: () => intro2Ref.current.pause(),
      onLeaveBack: () => intro2Ref.current.pause(),
    })
  }, [])

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#intro_3",
      onEnter: () => intro3Ref.current.play(),
      onEnterBack: () => intro3Ref.current.play(),
      onLeave: () => intro3Ref.current.pause(),
      onLeaveBack: () => intro3Ref.current.pause(),
    })
  }, [])

  // set variant
  const initialVariant = product.variants[0]
  const { client } = React.useContext(StoreContext)

  const [variant, setVariant] = React.useState({ ...initialVariant })
  const [quantity, setQuantity] = React.useState(1)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  )

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.shopifyId
          ) ?? []

        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [productVariant.storefrontId, client.product]
  )

  const handleOptionChange = (index, value) => {
    debugger
    //const value = event.target.value
    console.log(value)

    if (value === "") {
      return
    }

    const currentOptions = [...variant.selectedOptions]

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    }

    const selectedVariant = product.variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions)
    })

    setVariant({ ...selectedVariant })
  }

  React.useEffect(() => {
    checkAvailablity(product.storefrontId)
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId])

  const hasVariants = product.variants.length > 1

  // variables to set swiper
  const [imagesNavSlider, setImagesNavSlider] = useState(null)

  const hasImages = product.images.length > 0
  const hasMultipleImages = true || product.images.length > 1
  const slides = []

  if (hasImages) {
    product.images.forEach((data) => {
      slides.push(data.originalSrc)
      console.log(data.originalSrc)
    })
  }

  const price = formatPrice(
    product.priceRangeV2.maxVariantPrice.currencyCode,
    variant.price
  )

  var details = "NA"
  product.metafields.forEach((data) => {
    if (data.key === "details") {
      details = data.value
    }
  })

  // custom swiper nav
  const swiperRef = useRef(null)
  const buttonRef = useRef(null)

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

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
                  <Link to="/">Min+Modules</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/">{product.title}</Link>
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
                      <img src="/icons/btn_prev.png" alt="Prev" />
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
                      <img src="/icons/btn_next.png" alt="Next" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-12 col-md-8 col-lg-5">
              <h3 className="text-uppercase mb-10">{product.title}</h3>
              <h4 className="text-uppercase font_grey_medium_3 mb-40">
                {price}
              </h4>
              <div
                className="line_height_dense"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              ></div>
              <p>
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-outline btn-black w-100"
                  >
                    Customise this bookshelf
                  </button>
                </Link>
              </p>
              <hr className="my-3" />
              <div className="row mt-3 mb-4">
                <div className="col-4 col-md-3">
                  <div className="d-flex align-items-start">
                    <div>Colour&nbsp;</div>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={
                        <Tooltip id="button-tooltip-2">Color Variants</Tooltip>
                      }
                    >
                      <div className="d-flex pointer align-self-center">
                        <img
                          src="/icons/ico_info.png"
                          alt="Info"
                          width="22"
                          height="22"
                        />
                      </div>
                    </OverlayTrigger>
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <p>
                    <ul className="listing_left_align">
                      {hasVariants &&
                        product.options.map(({ id, name, values }, index) => (
                          <div className="col-8 col-md-9" key={id}>
                            <p>
                              <ul
                                aria-label="Variants"
                                className="listing_left_align"
                              >
                                {values.map((value) => (
                                  <li>
                                    <OverlayTrigger
                                      placement="top"
                                      delay={{ show: 250, hide: 400 }}
                                      overlay={
                                        <Tooltip id="button-tooltip-2">
                                          {value}
                                        </Tooltip>
                                      }
                                    >
                                      <div
                                        onClick={(event) =>
                                          handleOptionChange(0, value)
                                        }
                                        className="d-flex pointer "
                                        value={value}
                                      >
                                        <img
                                          src={
                                            "/icons/color_" +
                                            value
                                              .toString()
                                              .toLowerCase()
                                              .replace(/ /g, "_") +
                                            ".png"
                                          }
                                          alt={value}
                                          width="22"
                                          height="22"
                                          value={value}
                                          className="color_selected"
                                        />
                                      </div>
                                    </OverlayTrigger>
                                  </li>
                                ))}
                              </ul>
                            </p>
                          </div>
                        ))}
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
                  <AddToCart
                    variantId={productVariant.storefrontId}
                    quantity={quantity}
                    available={available}
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
              <p className="pb-1">
                <Link to="/" className="no_underline">
                  <button
                    type="button"
                    className="btn btn-outline btn-black w-100 d-flex justify-content-center"
                  >
                    Get Complimentary Design Service&nbsp;
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={
                        <Tooltip id="button-tooltip-2">
                          Complimentary Design Service
                        </Tooltip>
                      }
                    >
                      <div className="d-flex pointer align-self-center">
                        <img
                          src="/icons/ico_info.png"
                          alt="Info"
                          width="22"
                          height="22"
                        />
                      </div>
                    </OverlayTrigger>
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
              <div
                className="row"
                dangerouslySetInnerHTML={{ __html: details }}
              ></div>
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
            <div className="col-md-8 offset-md-2 col-lg-4 offset-lg-0 font_medium text-uppercase">
              <div className="d-block d-md-none">
                <img
                  src="/shop/min_modules/1_module_sizes.png"
                  alt="Intro Sizes"
                />
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
                  id="intro_1"
                >
                  <source
                    src="/shop/min_modules/1_module_sizes.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <p className="px-5 pt-3 mb-80">
                TWO MODULE SIZES FOR FLEXIBLE CONFIGURATIONS
              </p>
            </div>
            <div className="col-md-8 offset-md-2 col-lg-4 offset-lg-0 font_medium text-uppercase">
              <div className="d-block d-md-none">
                <img
                  src="/shop/min_modules/2_magnetic_connectors.png"
                  alt="Intro Sizes"
                />
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
                  id="intro_2"
                >
                  <source
                    src="/shop/min_modules/2_magnetic_connectors.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <p className="px-5 pt-3 mb-80">
                STACK &amp; ARRANGE THE MODULES USING MAGNETIC CONNECTORS
              </p>
            </div>
            <div className="col-md-8 offset-md-2 col-lg-4 offset-lg-0 font_medium text-uppercase">
              <div className="d-block d-md-none">
                <img
                  src="/shop/min_modules/3_drawers_dividers.png"
                  alt="Intro Sizes"
                />
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
                  id="intro_3"
                >
                  <source
                    src="/shop/min_modules/3_drawers_dividers.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <p className="px-5 pt-3 mb-80">
                MIX & MATCH BETWEEN doors, drawers & dividers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_grey">
        <div className="container">
          <div className="row row_padding d-flex">
            <div className="col-md-6 p-5 align-self-center">
              <img src="/shop/min_modules/customise.png" alt="Customise" />
            </div>
            <div className="col-md-6 align-self-center">
              <h2 className="text-uppercase mb-5">
                Customisation
                <br />
                at your fingertips
              </h2>
              <p className="mb-50">
                Customise your very own Min+Modules furniture with our product
                configurator – right down to details such as sizes, colours and
                storage compartments.
              </p>
              <p>
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-outline btn-outline-large btn-black-large"
                  >
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
          <div className="row row_padding">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-0 align-self-center">
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
                    className="btn btn-outline-large font_white mb-50"
                  >
                    Explore lookbook
                  </button>
                </Link>
              </p>
            </div>
            <div className="col-md-8 offset-md-2 col-lg-5 offset-lg-1 align-self-center">
              <div className="swiper_container">
                <Swiper
                  className="product_list_swiper d-flex align-items-stretch h-100"
                  // install Swiper modules
                  modules={[Navigation, Mousewheel]}
                  spaceBetween={60}
                  loop={true}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    1280: {
                      slidesPerView: 1,
                    },
                  }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  ref={swiperRef}
                >
                  <SwiperSlide>
                    <img src="/shop/min_modules/lookbook_1.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/shop/min_modules/lookbook_2.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/shop/min_modules/lookbook_3.jpg" alt="" />
                  </SwiperSlide>
                </Swiper>
                <div id="go_prev">
                  <button onClick={goPrev}>
                    <img src="/icons/btn_prev.png" alt="Prev" />
                  </button>
                </div>
                <div id="go_next">
                  <button onClick={goNext}>
                    <img src="/icons/btn_next.png" alt="Next" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row row_padding">
          <h2 className="pb-5 text-uppercase text-center">
            Quality you can trust
          </h2>
          <MinQuality />
        </div>
      </div>
      <Testimonials />
      <div className="container">
        <div className="row row_padding">
          <h3 className="text-uppercase py-5">You might also like</h3>
          <ProductList recdata={recommendation} />
          <BackToTop />
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default ShopDetails
