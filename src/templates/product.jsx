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
import { Link, graphql, useStaticQuery } from "gatsby"
import { StoreContext } from "../context/store-context"
import { formatPrice } from "../utils/format-price"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Overlay from "react-bootstrap/Overlay"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import isEqual from "lodash.isequal"
import { AddToCart } from "../components/add-to-cart"
import { AcaciaIntro } from "../components/acacia-intro"
import { useQuery, gql } from '@apollo/client';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs, Mousewheel, HashNavigation } from "swiper"

// import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

const GET_RECOMMENDED = gql`
query($handle: ID!) {
  productRecommendations(productId: $handle) {
    id
  }
}
`

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

  //debugger
  const {loading, error, data} = useQuery(GET_RECOMMENDED, {
    variables: {handle: product.shopifyId}
  });
  
  const recommendList = []
  if(data) {
    data.productRecommendations.forEach((rc, index) => {
      recommendList.push(rc.id)
    })
  }

  console.log(recommendList)
  const rc = recommendation.filter((node) => recommendList.some(r => r === node.node.shopifyId)) ?? []
  console.log(rc)

  // set variant
  //debugger
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

  const handleOptionChange = (index, value, event) => {
    debugger
    //const value = event.target.value
    console.log(event)

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

    if(index == 0) {
      imagesNavSlider.snapGrid = imagesNavSlider.slidesGrid.slice(0);
      const clickedIndex = altText.indexOf(value)
      if(clickedIndex != -1)
        imagesNavSlider.slideTo(clickedIndex)
    }
    
    const variant_options = Array.from(
      document.getElementsByClassName("variant_options_"+index)
    )
    variant_options.map((vo) => {
      vo.classList.remove("color_selected")
    })
    event.currentTarget.classList.toggle("color_selected")
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
  const altText = []

  if (hasImages) {
    //debugger
    product.images.forEach((data, index) => {
      slides.push(data.originalSrc)
      if (data.altText) altText.push(data.altText)
      else altText.push(index)
      //console.log(data.originalSrc)
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

  const selectedCategory1 = product.collections[0]?.metafields.find((mf) => {
    return isEqual("category", mf.key)
  })
  const selectedPath1 = product.collections[0]?.metafields.find((mf) => {
    return isEqual("path", mf.key)
  })
  const showMaterialSamples = product.collections[0]?.metafields.find((mf) => {
    return isEqual("show_material_samples", mf.key)
  })
  const showCustomizeButton = product.collections[0]?.metafields.find((mf) => {
    return isEqual("show_customize_button", mf.key)
  })
  const showDetails = product.collections[0]?.metafields.find((mf) => {
    return isEqual("show_details", mf.key)
  })
  const showInstallation = product.collections[0]?.metafields.find((mf) => {
    return isEqual("show_installation", mf.key)
  })
  const showAbout = product.collections[0]?.metafields.find((mf) => {
    return isEqual("show_about", mf.key)
  })
  const showBanner = product.collections[0]?.metafields.find((mf) => {
    return isEqual("show_banner", mf.key)
  })
  const showComplimentary = product.collections[0]?.metafields.find((mf) => {
    return isEqual("show_complimentary", mf.key)
  })
  const deliveryLeadTime = product.collections[0]?.metafields.find((mf) => {
    return isEqual("delivery_lead_time", mf.key)
  })
  const aboutContentStr = product.collections[0]?.metafields.find((mf) => {
    return isEqual("about_content", mf.key)
  })
  const installContentStr = product.collections[0]?.metafields.find((mf) => {
    return isEqual("installation_content", mf.key)
  })


  var category1 = selectedCategory1?.value ?? "NA"
  var path1 = selectedPath1?.value ?? ""
  if (path1 === "shop") {
    path1 = "/shop/" + product.collections[0]?.handle
  } else {
    path1 = "/shop/" + path1 + "/" + product.collections[0]?.handle
  }
  //debugger
  var showSamples = (showMaterialSamples?.value === "true" || showMaterialSamples === undefined) ? true : false
  var showButton = (showCustomizeButton?.value === "true" || showCustomizeButton === undefined) ? true : false
  var showDet = (showDetails?.value === "true" || showDetails === undefined) ? true : false
  var showIns = (showInstallation?.value === "true" || showInstallation === undefined) ? true : false
  var showAbt = (showAbout?.value === "true" || showAbout === undefined) ? true : false
  var showBannr = (showBanner?.value === "true" || showBanner === undefined) ? true : false
  var showComp = (showComplimentary?.value === "true" || showComplimentary === undefined) ? true : false
  var deliverLT = deliveryLeadTime?.value ?? ""
  var aboutTitle = "About " + product.collections[0]?.title
  var aboutContent = aboutContentStr?.value ?? ""
  var installContent = installContentStr?.value ?? ""
  const handle = product.collections[0]?.handle

  /* autoplay videos */
  const intro1Ref = useRef()
  const intro2Ref = useRef()
  const intro3Ref = useRef()

  useEffect(() => {
    if(showBannr) {
      if(handle.includes("acacia")) {

      } else {
        ScrollTrigger.create({
          trigger: "#intro_1",
          onEnter: () => intro1Ref.current.play(),
          onEnterBack: () => intro1Ref.current.play(),
          onLeave: () => intro1Ref.current.pause(),
          onLeaveBack: () => intro1Ref.current.pause(),
        })
  
        ScrollTrigger.create({
          trigger: "#intro_2",
          onEnter: () => intro2Ref.current.play(),
          onEnterBack: () => intro2Ref.current.play(),
          onLeave: () => intro2Ref.current.pause(),
          onLeaveBack: () => intro2Ref.current.pause(),
        })
  
        ScrollTrigger.create({
          trigger: "#intro_3",
          onEnter: () => intro3Ref.current.play(),
          onEnterBack: () => intro3Ref.current.play(),
          onLeave: () => intro3Ref.current.pause(),
          onLeaveBack: () => intro3Ref.current.pause(),
        })
      }
    }
    
  }, [])

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
                  <Link to="/shop">Shop</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to={path1}>{product.collections[0]?.title}</Link>
                </li>
                <li>/</li>
                <li>{product.title}</li>
              </ul>
            </div>

            <div className="col-12 col-lg-7">
              <section className="slider px-md-5">
                <div className="slider__flex">
                  <div className="slider__col">
                    <div className="slider__thumbs">
                      <Swiper
                        onSwiper={setImagesNavSlider}
                        hashNavigation={{
                          watchState: true,
                        }}
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
                        modules={[Navigation, Thumbs, HashNavigation]}
                      >
                        {slides.map((slide, index) => {
                          return (
                            <SwiperSlide key={index} data-hash={index}>
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
                      hashNavigation={{
                        watchState: true,
                      }}
                      direction="horizontal"
                      slidesPerView={1}
                      spaceBetween={32}
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
                      modules={[Navigation, Thumbs, Mousewheel, HashNavigation]}
                    >
                      {slides.map((slide, index) => {
                        return (
                          <SwiperSlide key={index} data-hash={index}>
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
              {showButton ? (
                <p>
                <Link to="/contact-us">
                  <button
                    type="button"
                    className="btn btn-outline btn-black w-100"
                  >
                    Customise this item
                  </button>
                </Link>
              </p>
              ) : (
                <p></p>
              )}
              
              <hr className="my-3" />
              <div className="row mt-3 mb-4">
                <div className="col-4 col-md-3">
                {hasVariants &&
                        product.options.map(({ id, name, values }, index) => (
                  <div className="d-flex align-items-start">
                    <div>{name}&nbsp;</div>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={
                        <Tooltip id="button-tooltip-2">
                          Looking for more? Contact us to customise your colour
                          combination.
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
                  </div>
                ))}
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
                                          handleOptionChange(index, value, event)
                                        }
                                        className={"d-flex pointer variant_options_"+index}
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
                                          className=""
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
              {showComp ? (
                <p className="pb-1">
                <Link to="/contact-us" className="no_underline">
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
                          Need help? Get a free consultation from our designers!
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
              ) : (
                <p></p>
              )}
              
              <em className="font_xs font_grey_medium_2">
                {deliverLT}
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
            {
              showAbt ? (
              <Tab eventKey="about" title={aboutTitle}>
                <div
                dangerouslySetInnerHTML={{ __html: aboutContent }}
                ></div>
              </Tab>
              ) : (
                <div></div>
              )
            }
            {
              showDet ? (
              <Tab eventKey="details" title="Details">
              <div
                className="row"
                dangerouslySetInnerHTML={{ __html: details }}
              ></div>
              </Tab>
              ) : (
                <div></div>
              )
            }
            {
              showIns ? (
              <Tab eventKey="installation" title="Installation">
              <div
                dangerouslySetInnerHTML={{ __html: installContent }}
                ></div>
            </Tab>
              ) : (
                <div></div>
              )
            }
            { showSamples ? (
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
            ) : (
            <div></div>
            )}
          </Tabs>
        </div>
      </div>

      {showBannr ? (
        handle.includes('acacia') ? (
      <div>
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
      </div>
          ) : (
      <div>
        <div className="bg_blue_medium font_white">
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
      </div>
          )
      
      ): (
        <div></div>
      )}

      <Testimonials />
      <div className="container">
        <div className="row row_padding">
          <h3 className="text-uppercase py-5">You might also like</h3>
          <ProductList recdata={rc} />
          <BackToTop />
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default ShopDetails
