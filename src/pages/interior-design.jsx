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
                        className="btn btn-outline btn-black mb-80"
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
        <div className="container text-center">
          <div className="row row_padding">
            <div className="col-12">
              <h2 className="mb-80">The Spaces We've Transformed</h2>
            </div>
            <div className="col-12 col-md-6 pb-5">
              <Link to="/interior-design-details" className="no_underline">
                <p className="pb-3">
                  <img src="./interior/works/1/1.jpg" alt="" />
                </p>
                <h4>139 Pasir Ris, 4RM</h4>
                <p>Modern Contemporary</p>
              </Link>
            </div>
            <div className="col-12 col-md-6 pb-5">
              <Link to="/interior-design-details" className="no_underline">
                <p className="pb-3">
                  <img src="./interior/works/1/1.jpg" alt="" />
                </p>
                <h4>Treescape Condo, 4RM</h4>
                <p>Modern Contemporary</p>
              </Link>
            </div>
            <div className="col-12 col-md-6 pb-5">
              <Link to="/interior-design-details" className="no_underline">
                <p className="pb-3">
                  <img src="./interior/works/1/1.jpg" alt="" />
                </p>
                <h4>139 Pasir Ris, 4RM</h4>
                <p>Modern Contemporary</p>
              </Link>
            </div>
            <div className="col-12 col-md-6 pb-5">
              <Link to="/interior-design-details" className="no_underline">
                <p className="pb-3">
                  <img src="./interior/works/1/1.jpg" alt="" />
                </p>
                <h4>Treescape Condo, 4RM</h4>
                <p>Modern Contemporary</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg_grey">
          <div className="container">
            <div className="row row_padding">
              <div className="col-12">
                <form className="g-3">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="pb-6 text-center">
                        Get A Free Consultation & Quote
                      </h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 pb-5">
                      <label htmlFor="input_name" className="form-label">
                        Name*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_name"
                      />
                    </div>
                    <div className="col-12 col-md-4 pb-5">
                      <label htmlFor="input_phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_phone"
                      />
                    </div>
                    <div className="col-12 col-md-4 pb-5">
                      <label htmlFor="input_email" className="form-label">
                        Email*
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input_email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 pb-5">
                      <label
                        htmlFor="input_property_type"
                        className="form-label"
                      >
                        Property Type*
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select an option</option>
                        <option value="1">HDB</option>
                        <option value="2">Condominium</option>
                        <option value="3">Landed</option>
                        <option value="4">Commercial</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-4 pb-5">
                      <label
                        htmlFor="input_property_type"
                        className="form-label"
                      >
                        Room Type*
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select an option</option>
                        <option value="1">1-Room</option>
                        <option value="2">2-Room</option>
                        <option value="3">3-Room</option>
                        <option value="4">4-Room</option>
                        <option value="5">5-Room</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-4 pb-5">
                      <label
                        htmlFor="input_key_collection_date"
                        className="form-label"
                      >
                        Key Collection Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="input_key_collection_date"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 pb-5">
                      <label htmlFor="input_budget" className="form-label">
                        Renovation Budget
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select an option</option>
                        <option value="1">Below S$10,000</option>
                        <option value="2">S$10,000 - S$20,000</option>
                        <option value="3">S$20,001 - S$30,000</option>
                        <option value="4">S$30,001 - S$40,000</option>
                        <option value="4">S$40,001 - S$50,000</option>
                        <option value="4">S$50,001 - S$60,000</option>
                        <option value="4">S$60,001 - S$70,000</option>
                        <option value="4">S$70,001 - S$100,000</option>
                        <option value="4">Above S$100,000</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-4 pb-5">
                      <label htmlFor="input_floorplan" className="form-label">
                        Floorplan, if any
                      </label>
                      <div class="input-group mb-3">
                        <input
                          type="file"
                          class="form-control"
                          id="input_floorplan"
                        />
                        <label class="input-group-text" for="input_floorplan">
                          Upload
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 pb-5">
                      <label htmlFor="input_" className="form-label">
                        How did you find us?
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select an option</option>
                        <option value="1">Facebook</option>
                        <option value="2">Instagram</option>
                        <option value="3">Google</option>
                        <option value="4">Friends/family referral</option>
                        <option value="5">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-5">
                      <div class="mb-3">
                        <label for="input_other_info" class="form-label">
                          Other Information
                        </label>
                        <textarea
                          class="form-control"
                          id="input_other_info"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-center">
                      <Link to="/">
                        <button type="submit" className="btn btn-primary mb-80">
                          Submit
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
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
