// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { Membership } from "../components/membership"
import * as aboutModule from "./about-us.module.css"

// step 2: define component
const AboutUs = () => {
  return (
    <Layout>
      {/* banner */}
      <div
        className={aboutModule.banner}
        style={{
          background: "url(/about/banner.jpg) center center no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      {/* end banner */}

      <div className="bg_grey">
        {/* brand story */}
        <div className="border_bottom">
          <div className="container">
            <div className="row padding_about">
              <div className="d-lg-flex align-items-start">
                <div className="col col-lg-6">
                  <h5 class="text-uppercase pb-2 font_light">Brand Story /</h5>
                  <h2 class="pb-4">More Than Essential</h2>
                  <p>
                    Not your regular furniture shop, we design modular furniture
                    pieces and offer one-stop interior design services. All so
                    you can take full control of your spaces without settling
                    for just 'good enough'.
                  </p>
                  <p>
                    Because we know there’s no one-size-fits-all. We believe
                    that limited space shouldn’t mean limited creativity, and we
                    are here to scrape the idea of getting a furniture that only
                    serves you one purpose or only fits in one spot.
                  </p>
                  <p>
                    Join us in discovering a new way of living and start
                    creating your own spaces with modular concepts!
                  </p>
                  <p>
                    <Link to="/" className="link_underline">
                      Go modular with us &gt;
                    </Link>
                  </p>
                </div>
                <div className="col col-md-6 col-lg-5 offset-lg-1">
                  <img
                    src={"/about/brand_story.jpg"}
                    alt="Brand Story"
                    className="img_border img_overflow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end brand story */}

        {/* what we do */}
        <div className="border_bottom">
          <div class="container">
            <div className="row padding_about">
              <div className="d-lg-flex align-items-start">
                <div className="order-lg-2 col col-lg-6 offset-lg-1">
                  <h5 class="text-uppercase pb-2 font_light">What We Do /</h5>
                  <h2 class="pb-4">More Than Furniture</h2>
                  <p>
                    At M.INT, we take it a step further to offer a tailored
                    experience for every customer in every possible space.
                  </p>

                  <h4>Complimentary Design Service</h4>
                  <p>
                    We are all about creating that perfect fit for your spaces.
                    We offer extensive customisation services for our furniture
                    to meet your needs – get free design and space planning
                    advice from our team of designers.
                  </p>
                  <p class="pb-5">
                    <Link to="/" className="link_underline">
                      Speak to us now &gt;
                    </Link>
                  </p>

                  <h4>Interior Design Service</h4>
                  <p>
                    We don’t just stop at furniture, we are here to transform
                    spaces in every inch of your home. With our in-house
                    interior designers and carpentry team, we offer full service
                    interior design to help create your dream home at every step
                    of the way.
                  </p>
                  <p>
                    <Link to="/" className="link_underline">
                      Book a free consultation &gt;
                    </Link>
                  </p>
                </div>
                <div className="order-lg-1 col col-md-6 col-lg-5 ">
                  <img
                    src={"/about/what_we_do.jpg"}
                    alt="What We Do"
                    className="img_border img_overflow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end what we do */}

        {/* design philosophy */}
        <div className="container">
          <div className="row padding_about">
            <div className="d-lg-flex align-items-start">
              <div className="col col-lg-6">
                <h5 class="text-uppercase pb-2 font_light">
                  Design Philosophy /
                </h5>
                <h2 class="pb-4">More Than Just Design</h2>
                <h4>Exclusively Designed In-house</h4>
                <p class="pb-5">
                  Our designs center around creating a customer-focused solution
                  that allows homeowners to take full control of their spaces
                  creatively and efficiently. Be it through our modular
                  furniture series or interior design, we are dedicated to
                  create purposeful designs for every space.
                </p>
                <h4>Premium Quality You Can Trust</h4>
                <p class="pb-5">
                  Every detail, material and concept is meticulously
                  manufactured and crafted to ensure that we deliver only the
                  best to you. All of our modular furniture products are
                  designed with high quality and durable materials, coupled with
                  fine craftsmanship from our in-house carpentry team.
                </p>
                <h4>Sustainability</h4>
                <p class="pb-5">
                  We aspire to promote the idea of repurposing furniture and to
                  discourage the throwaway culture. The concept of modularity
                  allows the same modules to be rearranged into multiple
                  furniture – saving landfill space and product materials for a
                  better earth.
                </p>
              </div>
              <div className="col col-md-6 col-lg-5 offset-lg-1">
                <img
                  src={"/about/design_philosophy.jpg"}
                  alt="Design Philosophy"
                  className="img_border img_overflow"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end design philosophy */}

        {/* membership */}
        <Membership />
        {/* end membership */}
      </div>
    </Layout>
  )
}

// step 3: export
export default AboutUs
