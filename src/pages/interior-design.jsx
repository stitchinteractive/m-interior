// step 1: import
import React, { useLayoutEffect } from "react"
import { Link, navigate } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { useForm, ValidationError } from "@formspree/react"
import uploadcare from "uploadcare-widget/uploadcare.lang.en.min.js"

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

  const [state, handleSubmit] = useForm("xjvzkwky")

  if (state.succeeded) {
    navigate("/thank-you")
  }

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
                  <a href="/interior-design#consultation_form">
                    <button type="submit" className="btn btn-outline">
                      GET A FREE CONSULTATION & QUOTE
                    </button>
                  </a>
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
                    <a href="/interior-design#consultation_form">
                      <button
                        type="submit"
                        className="btn btn-outline btn-black mb-80"
                      >
                        Get Started Now
                      </button>
                    </a>
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
              <Link
                to="/interior-design/138-pasir-ris"
                className="no_underline"
              >
                <p className="pb-3">
                  <img src="./interior/works/138_pasir_ris/1.jpg" alt="" />
                </p>
                <h4>138 Pasir Ris, 4-Room HDB</h4>
                <p>Dark Contemporary</p>
              </Link>
            </div>
            <div className="col-12 col-md-6 pb-5">
              <Link to="/interior-design/treescape" className="no_underline">
                <p className="pb-3">
                  <img src="./interior/works/treescape/1.jpg" alt="" />
                </p>
                <h4>Treescape, 3-Bedroom Condo</h4>
                <p>Modern Contemporary</p>
              </Link>
            </div>
            <div className="col-12 col-md-6 pb-5">
              <Link to="/interior-design/artistica" className="no_underline">
                <p className="pb-3">
                  <img src="./interior/works/artistica/1.jpg" alt="" />
                </p>
                <h4>Artistica Tattoo Studio, Shophouse</h4>
                <p>Modern Industrial</p>
              </Link>
            </div>
          </div>
        </div>
        <div id="consultation_form" className="bg_grey">
          <div className="container">
            <div className="row row_padding">
              <div className="col-12">
                <form method="post" onSubmit={handleSubmit} className="g-3">
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
                        name="name"
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
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
                        name="phone"
                        required
                      />
                      <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
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
                        name="email"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
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
                        name="propertyType"
                        required
                      >
                        <option value="" selected>
                          Select an option
                        </option>
                        <option value="HDB">HDB</option>
                        <option value="Condominium">Condominium</option>
                        <option value="Landed">Landed</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                      <ValidationError
                        prefix="Property Type"
                        field="propertyType"
                        errors={state.errors}
                      />
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
                        name="roomType"
                        required
                      >
                        <option value="" selected>
                          Select an option
                        </option>
                        <option value="1-Room">1-Room</option>
                        <option value="2-Room">2-Room</option>
                        <option value="3-Room">3-Room</option>
                        <option value="4-Room">4-Room</option>
                        <option value="5-Room">5-Room</option>
                      </select>
                      <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                      />
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
                        name="keyCollectionDate"
                        required
                      />
                      <ValidationError
                        prefix="Key Collection Date"
                        field="keyCollectionDate"
                        errors={state.errors}
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
                        name="renovationBudget"
                        required
                      >
                        <option value="" selected>
                          Select an option
                        </option>
                        <option value="Below 10000">Below S$10,000</option>
                        <option value="10000-20000">S$10,000 - S$20,000</option>
                        <option value="20001-30000">S$20,001 - S$30,000</option>
                        <option value="30001-40000">S$30,001 - S$40,000</option>
                        <option value="40001-50000">S$40,001 - S$50,000</option>
                        <option value="50001-60000">S$50,001 - S$60,000</option>
                        <option value="60001-70000">S$60,001 - S$70,000</option>
                        <option value="70001-100000">
                          S$70,001 - S$100,000
                        </option>
                        <option value="Above 100000">Above S$100,000</option>
                      </select>
                      <ValidationError
                        prefix="Renovation Budget"
                        field="renovationBudget"
                        errors={state.errors}
                      />
                    </div>
                    <div className="col-12 col-md-4 pb-5">
                      <label htmlFor="input_floorplan" className="form-label">
                        Floorplan, if any
                      </label>
                      <div class="input-group mb-3">
                        <input
                          type="hidden"
                          role="uploadcare-uploader"
                          data-public-key="b73d7dc0f38191790b2a"
                          data-tabs="file camera url facebook gdrive gphotos"
                          name="floorplan"
                        />
                        {/* <input
                          type="file"
                          class="form-control"
                          id="input_floorplan"
                          name="floorplan"
                        />
                        <label class="input-group-text" for="input_floorplan">
                          Upload
                        </label> */}
                      </div>
                    </div>
                    <div className="col-12 col-md-4 pb-5">
                      <label htmlFor="input_" className="form-label">
                        How did you find us?
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        name="howDidYouFindUs"
                        required
                      >
                        <option value="" selected>
                          Select an option
                        </option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Google">Google</option>
                        <option value="Friends/family referral">
                          Friends/family referral
                        </option>
                        <option value="Others">Others</option>
                      </select>
                      <ValidationError
                        prefix="How did you find us"
                        field="howDidYouFindUs"
                        errors={state.errors}
                      />
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
                          name="other"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary mb-80"
                        disabled={state.submitting}
                      >
                        Submit
                      </button>
                      <ValidationError errors={state.errors} />
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
