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
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-6">
                  <img src="/media/straits_times.jpg" alt="The Straits Times" />
                </div>
                <div className="col-5 offset-lg-1">
                  <p>
                    <img
                      src="/media/logo_straits_times.png"
                      alt="The Straits Times"
                    />
                  </p>
                  <h4 className="mb-3">The Straits Times</h4>
                  <p>
                    Featured in mother's day special segment, the Acacia M.I.N.T
                    Blocks are highlighted as space management system good for
                    small home owners. Able to stack, mount and flip, the
                    hexagon shape is efficient and looks great!
                  </p>
                  <p>
                    <Link to="/" className="link_underline">
                      Read more &gt;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-5">
                  <p>
                    <img src="/media/logo_square_rooms.png" alt="SquareRooms" />
                  </p>
                  <h4 className="mb-3">SquareRooms</h4>
                  <p>
                    The M.I.N.T Blocks Pet Series was featured in SquareRooms,
                    which aggregates hottest trends for home makeovers,
                    inspirations and design ideas for aesthetic homes. Furniture
                    trends are fast becoming multi-functional yet beautiful, we
                    can do the same for pets at home too!
                  </p>
                  <p>
                    <Link to="/" className="link_underline">
                      Read more &gt;
                    </Link>
                  </p>
                </div>
                <div className="col-6 offset-lg-1">
                  <img src="/media/square_rooms.jpg" alt="SquareRooms" />
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-6">
                  <p>
                    <img src="/media/pets_magazine.jpg" alt="Pets Magazine" />
                  </p>
                </div>
                <div className="col-5 offset-lg-1">
                  <p>
                    <img
                      src="/media/logo_pets_magazine.png"
                      alt="Pets Magazine"
                    />
                  </p>
                  <h4 className="mb-3">Pets Magazine</h4>
                  <p>
                    Featuring our launch event for M.I.N.T Blocks Pet Series at
                    Neko No Niwa. Raymond from Pets Magazine joined us for an
                    afternoon of fun learning cat language via play and how pet
                    towers are beneficial for cats and their owners.
                  </p>
                  <p>
                    <Link to="/" className="link_underline">
                      Read more &gt;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-5">
                  <p>
                    <img
                      src="/media/logo_home_decor.png"
                      alt="Home and Decor"
                    />
                  </p>
                  <h4 className="mb-3">Home and Decor</h4>
                  <p>
                    M.I.N.T Blocks Pet Series featured in Home and Decor’s
                    e-shopping guide for chic pet furniture. Listed as one of
                    the more aesthetic looking pet furniture you can get in
                    Singapore, Minthe(d) is being mentioned together with other
                    esteemed designer brands for pets interior needs.
                  </p>
                  <p>
                    <Link to="/" className="link_underline">
                      Read more &gt;
                    </Link>
                  </p>
                </div>
                <div className="col-6 offset-lg-1">
                  <p>
                    <img src="/media/home_decor.jpg" alt="Home and Decor" />
                  </p>
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-6">
                  <p>
                    <img src="/media/noc.jpg" alt="Night Owl Cinematics" />
                  </p>
                </div>
                <div className="col-5 offset-lg-1">
                  <p>
                    <img src="/media/logo_noc.png" alt="Night Owl Cinematics" />
                  </p>
                  <h4 className="mb-3">Night Owl Cinematics</h4>
                  <p>
                    Proud to be part of the new office/Sylvia’s crib, the Acacia
                    M.I.N.T Blocks made its way into the lovely space, cleverly
                    as room dividers and storage for Sylvia’s favourites, Porky
                    (‘stuff) and books! Clean, modular, multi-functional, there
                    are many ways to utilise the blocks, but this is a fresh new
                    take!
                  </p>
                  <p>
                    <Link to="/" className="link_underline">
                      Read more &gt;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="d-flex align-items-center">
                <div className="col-5">
                  <p>
                    <img
                      src="/media/logo_pets_magazine.png"
                      alt="Pets Magazine"
                    />
                  </p>
                  <h4 className="mb-3">Pets Magazine</h4>
                  <p>
                    M.I.N.T Blocks Pet Series were shortlisted to be part of the
                    shopping guide for pet owners on Pets Magazine article
                    online, amongst other trendy brands of the season.
                  </p>
                  <p>
                    <Link to="/" className="link_underline">
                      Read more &gt;
                    </Link>
                  </p>
                </div>
                <div className="col-6 offset-lg-1">
                  <p>
                    <img src="/media/pets_magazine_2.jpg" alt="Pets Magazine" />
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
