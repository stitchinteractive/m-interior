// step 1: import
import React, { useLayoutEffect } from "react"
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
      <div className="container">
        <div className="row row_padding animate">
          <div className="col">
            <h2 className="text-uppercase heading_line mb-60">Media</h2>
          </div>
          <div className="container animate">
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-6">
                  <img src="lookbook/study_room/1.jpg" alt="" />
                </div>
                <div className="col-5 offset-lg-1">
                  <h4 className="mb-3">The Straits Times</h4>
                  <p>
                    Featured in mother’s day special segment, the Acacia M.I.N.T
                    Blocks are highlighted as space management system good for
                    small home owners. Able to stack, mount and flip, the
                    hexagon shape is efficient and looks great!
                  </p>
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-5">
                  <h4 className="mb-3">The Straits Times</h4>
                  <p>
                    Featured in mother’s day special segment, the Acacia M.I.N.T
                    Blocks are highlighted as space management system good for
                    small home owners. Able to stack, mount and flip, the
                    hexagon shape is efficient and looks great!
                  </p>
                </div>
                <div className="col-6 offset-lg-1">
                  <img src="lookbook/study_room/1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-6">
                  <img src="lookbook/study_room/1.jpg" alt="" />
                </div>
                <div className="col-5 offset-lg-1">
                  <h4 className="mb-3">The Straits Times</h4>
                  <p>
                    Featured in mother’s day special segment, the Acacia M.I.N.T
                    Blocks are highlighted as space management system good for
                    small home owners. Able to stack, mount and flip, the
                    hexagon shape is efficient and looks great!
                  </p>
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-5">
                  <h4 className="mb-3">The Straits Times</h4>
                  <p>
                    Featured in mother’s day special segment, the Acacia M.I.N.T
                    Blocks are highlighted as space management system good for
                    small home owners. Able to stack, mount and flip, the
                    hexagon shape is efficient and looks great!
                  </p>
                </div>
                <div className="col-6 offset-lg-1">
                  <img src="lookbook/study_room/1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-6">
                  <img src="lookbook/study_room/1.jpg" alt="" />
                </div>
                <div className="col-5 offset-lg-1">
                  <h4 className="mb-3">The Straits Times</h4>
                  <p>
                    Featured in mother’s day special segment, the Acacia M.I.N.T
                    Blocks are highlighted as space management system good for
                    small home owners. Able to stack, mount and flip, the
                    hexagon shape is efficient and looks great!
                  </p>
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-5">
                  <h4 className="mb-3">The Straits Times</h4>
                  <p>
                    Featured in mother’s day special segment, the Acacia M.I.N.T
                    Blocks are highlighted as space management system good for
                    small home owners. Able to stack, mount and flip, the
                    hexagon shape is efficient and looks great!
                  </p>
                </div>
                <div className="col-6 offset-lg-1">
                  <img src="lookbook/study_room/1.jpg" alt="" />
                </div>
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
