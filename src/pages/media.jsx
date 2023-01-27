// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { Link } from "gatsby"
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
            <div className="row mb-100">
              <div className="d-md-flex align-items-center">
                <div className="col-12 col-md-6">
                  <p>
                    <img src="/media/today.jpg" alt="Today Online" />
                  </p>
                </div>
                <div className="col-12 col-md-5 offset-md-1">
                  <p>
                    <img src="/media/logo_today.png" alt="Today Online" />
                  </p>
                  <p className="font_xs font_montserrat_medium pb-2">
                    19 November 2021
                  </p>
                  <p>
                    We are proud to be mentioned as part of a SG Cares Giving
                    Week article. M.INT is listed under the Collaborate for Good
                    directory as one of the brands committed to making a social
                    impact. Our initiative to donate 10% of proceeds from Acacia
                    for Pets products to the Cat Welfare Society was highlighted
                    to encourage consumers to shop for good.
                  </p>
                  <p>
                    <a
                      href="https://www.todayonline.com/brand-spotlight/support-local-help-others-benefit-all"
                      className="link_underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read more &gt;
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-100">
              <div className="d-md-flex align-items-center">
                <div className="col-12 col-md-5">
                  <p>
                    <img
                      src="/media/logo_home_decor.png"
                      alt="Home &amp; Decor"
                    />
                  </p>
                  <p className="font_xs font_montserrat_medium pb-2">
                    9 July 2021
                  </p>
                  <p>
                    Acacia for Pets was featured in Home & Decor's top picks for
                    chic pet furniture. We are honoured to be listed as one of
                    the stylish and practical pet furniture in Singapore,
                    alongside other esteemed brands.
                  </p>
                  <p>
                    <a
                      href="https://www.homeanddecor.com.sg/gallery/10-chic-pet-furniture-pieces-that-blend-into-any-home/"
                      className="link_underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read more &gt;
                    </a>
                  </p>
                </div>
                <div className="col-12 col-md-6 offset-md-1">
                  <img src="/media/home_decor.jpg" alt="Home &amp; Decor" />
                </div>
              </div>
            </div>
            <div className="row mb-100">
              <div className="d-md-flex align-items-center">
                <div className="col-12 col-md-6">
                  <p>
                    <img src="/media/square_room.jpg" alt="SquareRooms" />
                  </p>
                </div>
                <div className="col-12 col-md-5 offset-md-1">
                  <p>
                    <img src="/media/logo_square_rooms.png" alt="SquareRooms" />
                  </p>
                  <p className="font_xs font_montserrat_medium pb-2">
                    June 2021
                  </p>
                  <p>
                    Acacia for Pets was featured in SquareRooms magazine for
                    June 2021 issue, which highlighted our pet furniture as the
                    perfect builds for pets ergonomically and aesthetically.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-100">
              <div className="d-md-flex align-items-center">
                <div className="col-12 col-md-5">
                  <p>
                    <img
                      src="/media/logo_pets_magazine.png"
                      alt="Pets Magazine"
                    />
                  </p>
                  <p className="font_xs font_montserrat_medium pb-2">
                    June 2021
                  </p>
                  <p>
                    Our very first media event for the launch of Acacia for Pets
                    was a huge success, thanks to the attendance of media
                    representatives and influencers. The Pets Magazine team had
                    joined us for an afternoon of fun at Neko No Niwa cat cafe –
                    exploring our pet furniture with the resident cats.
                  </p>
                </div>
                <div className="col-12 col-md-6 offset-md-1">
                  <img src="/media/pets_magazine.jpg" alt="Pets Magazine" />
                </div>
              </div>
            </div>
            <div className="row mb-100">
              <div className="d-md-flex align-items-center">
                <div className="col-12 col-md-6">
                  <p>
                    <img
                      src="/media/straits_times.jpg"
                      alt="The Straits Times"
                    />
                  </p>
                </div>
                <div className="col-12 col-md-5 offset-md-1">
                  <p>
                    <img
                      src="/media/logo_straits_times.png"
                      alt="The Straits Times"
                    />
                  </p>
                  <p className="font_xs font_montserrat_medium pb-2">
                    8 May 2021
                  </p>
                  <p>
                    Featured in Mother’s Day 2021 segment, the Acacia Blocks was
                    introduced as a space management system perfect for
                    homeowners to organise their stuff. The article also
                    highlighted our hexagon design inspired by honeycombs, which
                    is the most efficient shape in nature.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-100">
              <div className="d-md-flex align-items-center">
                <div className="col-12 col-md-5">
                  <p>
                    <img
                      src="/media/logo_home_decor.png"
                      alt="Home &amp; Decor"
                    />
                  </p>
                  <p className="font_xs font_montserrat_medium pb-2">
                    1 May 2021
                  </p>
                  <p>
                    We are proud that the Acacia Blocks have made its way into
                    NOC's shophouse office/Sylvia's home. We love how the blocks
                    were cleverly configured as space dividers and storage
                    display – perfectly integrated into the bright and airy
                    interior.
                  </p>
                  <p>
                    <a
                      href="https://www.homeanddecor.com.sg/gallery/night-owl-cinematics-ceo-sylvia-recreates-her-childhood-kampung-home-with-a-glass-roofed-kitchen-and-over-50-plants/"
                      className="link_underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read more &gt;
                    </a>
                  </p>
                </div>
                <div className="col-12 col-md-6 offset-md-1">
                  <img src="/media/home_decor_2.jpg" alt="Home &amp; Decor" />
                </div>
              </div>
            </div>
            <div className="row mb-100">
              <div className="d-md-flex align-items-center">
                <div className="col-12 col-md-6">
                  <p>
                    <img src="/media/pets_magazine_2.jpg" alt="Pets Magazine" />
                  </p>
                </div>
                <div className="col-12 col-md-5 offset-md-1">
                  <p>
                    <img
                      src="/media/logo_pets_magazine.png"
                      alt="Pets Magazine"
                    />
                  </p>
                  <p className="font_xs font_montserrat_medium pb-2">
                    March 2021
                  </p>
                  <p>
                    Acacia for Pets was featured in the Pets Magazine shopping
                    guide, and recommended as a great shopping deal for all pet
                    owners to grab for their furkids.
                  </p>
                  <p>
                    <a
                      href="https://www.petsmagazine.com.sg/a/gift-guide/1459/march-2021-for-pets"
                      className="link_underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read more &gt;
                    </a>
                  </p>
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
