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
        <div
          className="bg_interior d-flex align-items-center"
          style={{
            background: "url(./interior/banner.jpg) center center no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-4 col-lg-6 offset-lg-6">
                <div className="box_overlay">
                  <h1 className="mb-150">Make your neighbours jealous.</h1>
                  <Link to="/profile">
                    <button type="submit" className="btn btn-outline">
                      GET A FREE CONSULTATION & QUOTE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 text-center">
              <h2 className="mb-3">Interior Design Is Our Second Nature</h2>
              <p>RESIDENTIAL • COMMERCIAL</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box_interior">
                <div className="vertical_divider d-none"></div>
                <h4 className="mb-3">Creativity at the Core</h4>
                <p>
                  Whether your needs are vast or small, we come with big ideas.
                  We create spaces that are a true reflection of your identity
                  and style – a space that’s uniquely yours!
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box_interior">
                <div className="vertical_divider d-none d-md-block"></div>
                <h4 className="mb-3">In-house Certified Professionals</h4>
                <p>
                  Housing our very own interior designers, carpentry team, wet
                  works and construction workers – no renovation job is beyond
                  our capabilities.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box_interior">
                <div className="vertical_divider d-none d-lg-block"></div>
                <h4 className="mb-3">&gt;10 Years Experience</h4>
                <p>
                  We work closely with our sister company – Trace Design + Build
                  who has long-standing experience in architecture and
                  construction works.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box_interior">
                <div className="vertical_divider d-none"></div>
                <h4 className="mb-3">Excellent Workmanship</h4>
                <p>
                  We deliver only the best to you. Our carpenters are
                  professionally equipped with fine craftsmanship to ensure your
                  spaces don’t just look good, but stays good inside out.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box_interior">
                <div className="vertical_divider d-none d-lg-block"></div>
                <h4 className="mb-3">Transparency</h4>
                <p>
                  We value an open and honest communication. From costings to
                  renovation works, rest assured that you will be well-informed
                  of every nook and cranny. We don’t cut corners!
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box_interior">
                <div className="vertical_divider d-none d-md-block"></div>
                <h4 className="mb-3">Dedicated Customer Service</h4>
                <p>
                  We treat our customers like family – we listen to your needs
                  and we promise to be there at every step of the way from
                  pre-sales to after-sales support.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_grey">
          <div className="container">
            <div className="row row_padding">
              <div className="col-12 col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <h2 className="mb-3">We’ll Make It Fun And Easy</h2>
                  </div>
                  <div className="col-2 col-md-1">
                    <div className="circle">01</div>
                  </div>
                  <div className="col-10 col-md-11 ps-4">
                    <h4>Let's Chat</h4>
                    <p>
                      Tell us about your dream home and everything in between –
                      from floorplan to concept style, requirements and budget.
                    </p>
                  </div>
                  <div className="col-2 col-md-1">
                    <div className="circle">02</div>
                  </div>
                  <div className="col-10 col-md-11 ps-4">
                    <h4>Design Development</h4>
                    <p>
                      Our team will come up with a design and space planning
                      proposal, along with a quotation all tailored to your
                      needs.
                    </p>
                  </div>
                  <div className="col-2 col-md-1">
                    <div className="circle">03</div>
                  </div>
                  <div className="col-10 col-md-11 ps-4">
                    <h4>Colour &amp; Material Selection</h4>
                    <p>
                      Based on the agreed designs, our team will go through the
                      material samples with you and make the best
                      recommendations for your spaces – including advices for
                      fittings and furniture.
                    </p>
                  </div>
                  <div className="col-2 col-md-1">
                    <div className="circle">04</div>
                  </div>
                  <div className="col-10 col-md-11 ps-4">
                    <h4>Renovation Begin!</h4>
                    <p>
                      Let's bring your designs to life. Our designers will
                      oversee the entire renovation process, conduct frequent
                      site visits and quality checks to ensure a smooth
                      execution.
                    </p>
                  </div>
                  <div className="col-2 col-md-1">&nbsp;</div>
                  <div className="col-10 col-md-11 ps-4">
                    <Link to="/profile">
                      <button
                        type="submit"
                        className="btn btn-light text-uppercase mb-80"
                      >
                        Get Started Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <img src="./interior/design_process.jpg" alt="Design Process" />
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
