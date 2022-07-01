// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { Link } from "gatsby"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { Membership } from "../components/membership"
import { Testimonials } from "../components/testimonials"
import { ProductListItem } from "../components/product-list-item"
import SearchIcon from "../icons/search"

// step 2: define component
const Shop = () => {
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
      <div className="container">
        <div className="row row_padding">
          <div className="col-12 col-lg-6 offset-lg-3">
            <div className="input-group my-3">
              <input
                type="text"
                className="form-control-sm txt_search"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search"
              />
              <button className="btn btn_search" type="button">
                <Link to="/search-results">
                  <SearchIcon />
                </Link>
              </button>
            </div>
          </div>
          <div className="col-12 text-center">
            Popular Search Terms:
            <Link to="/" className="px-3">
              Acacia Blocks
            </Link>
            <Link to="/" className="px-3">
              TV Console
            </Link>
            <Link to="/" className="px-3">
              Side Table
            </Link>
          </div>
        </div>
      </div>
      <div className="bg_grey_medium_5">
        <div className="container">
          <div className="row row_padding">
            <div className="col-12">
              <div className="row mb-100">
                <div className="col-12">
                  <div className="font_lg text-uppercase font_semibold mb-5">
                    There are 3 results found.
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <ProductListItem
                    url="/shop-details"
                    image="/shop/min_modules/bedside_table_small_2.png"
                    name="Small Side Table"
                    price="205"
                    color_1={
                      <li>
                        <img src="/icons/color_brown_white.png" alt="" />
                      </li>
                    }
                    color_2={
                      <li>
                        <img src="/icons/color_black.png" alt="" />
                      </li>
                    }
                    color_3={
                      <li>
                        <img src="/icons/color_dark_brown_white.png" alt="" />
                      </li>
                    }
                    color_4={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_5={
                      <li>
                        <img src="/icons/color_white_grey.png" alt="" />
                      </li>
                    }
                    color_6={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_7={
                      <li>
                        <img src="/icons/color_black_grey.png" alt="" />
                      </li>
                    }
                    color_8={
                      <li>
                        <img src="/icons/color_blue_yellow.png" alt="" />
                      </li>
                    }
                    color_9={
                      <li>
                        <img src="/icons/color_brown_black.png" alt="" />
                      </li>
                    }
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <ProductListItem
                    url="/shop-details"
                    image="/shop/min_modules/bookshelf_tall_3.png"
                    name="Tall Bookshelf"
                    price="205"
                    color_1={
                      <li>
                        <img src="/icons/color_brown_white.png" alt="" />
                      </li>
                    }
                    color_2={
                      <li>
                        <img src="/icons/color_black.png" alt="" />
                      </li>
                    }
                    color_3={
                      <li>
                        <img src="/icons/color_dark_brown_white.png" alt="" />
                      </li>
                    }
                    color_4={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_5={
                      <li>
                        <img src="/icons/color_white_grey.png" alt="" />
                      </li>
                    }
                    color_6={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_7={
                      <li>
                        <img src="/icons/color_black_grey.png" alt="" />
                      </li>
                    }
                    color_8={
                      <li>
                        <img src="/icons/color_blue_yellow.png" alt="" />
                      </li>
                    }
                    color_9={
                      <li>
                        <img src="/icons/color_brown_black.png" alt="" />
                      </li>
                    }
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <ProductListItem
                    url="/shop-details"
                    image="/shop/min_modules/bedroom_chest_small.png"
                    name="Small Bedroom Chest"
                    price="205"
                    color_1={
                      <li>
                        <img src="/icons/color_brown_white.png" alt="" />
                      </li>
                    }
                    color_2={
                      <li>
                        <img src="/icons/color_black.png" alt="" />
                      </li>
                    }
                    color_3={
                      <li>
                        <img src="/icons/color_dark_brown_white.png" alt="" />
                      </li>
                    }
                    color_4={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_5={
                      <li>
                        <img src="/icons/color_white_grey.png" alt="" />
                      </li>
                    }
                    color_6={
                      <li>
                        <img src="/icons/color_black_white.png" alt="" />
                      </li>
                    }
                    color_7={
                      <li>
                        <img src="/icons/color_black_grey.png" alt="" />
                      </li>
                    }
                    color_8={
                      <li>
                        <img src="/icons/color_blue_yellow.png" alt="" />
                      </li>
                    }
                    color_9={
                      <li>
                        <img src="/icons/color_brown_black.png" alt="" />
                      </li>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animate">
        <Testimonials />
      </div>
      <div className="animate">
        <Membership />
      </div>
    </Layout>
  )
}

// step 3: export
export default Shop
