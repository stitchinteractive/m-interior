// step 1: import
import React, { useLayoutEffect } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"

// step 2: define component
const InteriorDesignDetails = () => {
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
      <div>
        <div className="container">
          <div className="row row_padding d-flex align-items-center">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <div className="row">
                <h2 className="text-uppercase mb-60">BLOG POST 1</h2>
                <p className="font_light pb-4">12 March 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="col-12">
                  <Link to="/blog-details">
                    <button
                      type="submit"
                      className="btn btn-light text-uppercase mb-80"
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <p>
                <img src="lookbook/living_room/2.jpg" alt="Design Process" />
              </p>
            </div>
          </div>
        </div>
        <div className="bg_grey">
          <div className="container">
            <div className="row row_padding">
              <div className="col-12 col-md-6 col-lg-4">
                <p>
                  <img
                    src="./lookbook/living_room/2.jpg"
                    alt="Design Process"
                  />
                </p>
                <h4 className="text-uppercase mb-3">BLOG POST 1</h4>
                <p className="font_light pb-4">12 March 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-100">
                  <Link to="/blog-details" className="link_underline">
                    Read more &gt;
                  </Link>
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <p>
                  <img src="lookbook/living_room/2.jpg" alt="Design Process" />
                </p>
                <h4 className="text-uppercase mb-3">BLOG POST 1</h4>
                <p className="font_light pb-4">12 March 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-100">
                  <Link to="/blog-details" className="link_underline">
                    Read more &gt;
                  </Link>
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <p>
                  <img src="lookbook/living_room/2.jpg" alt="Design Process" />
                </p>
                <h4 className="text-uppercase mb-3">BLOG POST 1</h4>
                <p className="font_light pb-4">12 March 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-100">
                  <Link to="/blog-details" className="link_underline">
                    Read more &gt;
                  </Link>
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <p>
                  <img src="lookbook/living_room/2.jpg" alt="Design Process" />
                </p>
                <h4 className="text-uppercase mb-3">BLOG POST 1</h4>
                <p className="font_light pb-4">12 March 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-100">
                  <Link to="/blog-details" className="link_underline">
                    Read more &gt;
                  </Link>
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <p>
                  <img src="lookbook/living_room/2.jpg" alt="Design Process" />
                </p>
                <h4 className="text-uppercase mb-3">BLOG POST 1</h4>
                <p className="font_light pb-4">12 March 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-100">
                  <Link to="/blog-details" className="link_underline">
                    Read more &gt;
                  </Link>
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <p>
                  <img src="lookbook/living_room/2.jpg" alt="Design Process" />
                </p>
                <h4 className="text-uppercase mb-3">BLOG POST 1</h4>
                <p className="font_light pb-4">12 March 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  <Link to="/blog-details" className="link_underline">
                    Read more &gt;
                  </Link>
                </p>
              </div>
              <div className="col-12">
                <nav aria-label="...">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <Link
                        className="page-link"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Previous
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" href="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item" aria-current="page">
                      <Link className="page-link" href="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link className="page-link" href="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default InteriorDesignDetails
