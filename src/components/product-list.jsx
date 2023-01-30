// step 1: import
import React, { useRef } from "react"
/*
import { Link } from "gatsby"
*/
import { ProductListItem } from "../components/product-list-item"

// import Swiper core and required modules
import { Navigation, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

// step 2: define and export
export function ProductList(props) {
  // custom swiper nav
  const swiperRef = useRef(null)
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
  //debugger
  //const [bestsellers, setBestsellers] = React.useState(props.bsdata)
  //const [recommendation, setRecommendation] = React.useState(props.recdata)

  const bestsellers = props.bsdata
  const recommendation = props.recdata

  // if(props.bsdata) {
  //   alert("bestseller")
  // } else {
  //   alert("recommendation")
  // }

  //console.log(bestsellers.edges.length)


  return (
    <div className="swiper_container">
      <Swiper
        className="product_list_swiper d-flex align-items-stretch h-100"
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={10}
        loop={false}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        ref={swiperRef}
      >
        { props.bsdata && bestsellers?.map((product) => (
        <SwiperSlide className="d-flex flex-column h-100">
          <ProductListItem
            url={"/shop/detail/"+product.node.handle}
            image={product.node.media[0]?.preview.image.originalSrc}
            bgimage={product.node.media[1]?.preview.image.originalSrc}
            name={product.node.title}
            price={product.node.priceRangeV2.minVariantPrice.amount}
            variants={product.node.variants}
            options={product.node.options}
          />
        </SwiperSlide>
        ))}
        { props.recdata && recommendation?.map((product) => (
        <SwiperSlide className="d-flex flex-column h-100">
          <ProductListItem
            url={"/shop/detail/"+product.node.handle}
            image={product.node.media[0]?.preview.image.originalSrc}
            bgimage={product.node.media[1]?.preview.image.originalSrc}
            name={product.node.title}
            price={product.node.priceRangeV2.minVariantPrice.amount}
            variants={product.node.variants}
            options={product.node.options}
          />
        </SwiperSlide>
        ))}
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
  )
}
