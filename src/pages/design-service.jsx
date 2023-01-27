// step 1: import
import React, { useLayoutEffect, useState } from "react"
import { Link, navigate } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { useForm, ValidationError } from "@formspree/react"
import uploadcare from "uploadcare-widget/uploadcare.lang.en.min.js"
import { graphql } from 'gatsby'
import parse from 'html-react-parser'

// step 2: define component
const InteriorDesignDetails = ({data}) => {
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

  const [content, setContent] = useState(data)

  return (
    <Layout>
      <div>
        <div className="container">
          <div className="row row_padding">
            <div className="col-12 text-center">
              <h2 className="mb-4 text-uppercase">
              {parse(content?.designBannerTop?.nodes[0].header)}
                {/* EVERYONE IS DIFFERENT, AND SO IS&nbsp; */}
                <span className="highlight">{parse(content?.designBannerTop?.nodes[0].shortDescription)}</span>
              </h2>
              {parse(content?.designBannerTop?.nodes[0].longDescription.longDescription)}
              {/* <p>
                Looking to customise a modular furniture but not sure where to
                start? Need advice on choosing the colour and finishing to match
                your interior? Or just simply curious about what wonders our
                modular furniture can do?
              </p>
              <p>
                Our design consultants are here to help you create that perfect
                fit and look for your space.
              </p> */}
            </div>
            {content?.allContentfulDesignService?.nodes?.map((cont) => (
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <p>
                <img
                  src={cont.image.url}
                  alt={cont.imageText}
                  className="mx-auto"
                />
              </p>
              <h4 className="mb-3 text-uppercase">{cont.header}</h4>
              <p>
              {cont.content}
              </p>
            </div>
            ))}
            {/* <div className="col-12 col-md-6 col-lg-4 text-center">
              <p>
                <img
                  src="/design_service/personal_designer.png"
                  alt="Your personal designer"
                  className="mx-auto"
                />
              </p>
              <h4 className="mb-3 text-uppercase">Your personal designer</h4>
              <p>
                A design consultant will be dedicated to you to answer all your
                queries and assist you in co-creating your furniture design,
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <p>
                <img
                  src="/design_service/styling_advice.png"
                  alt="Styling advice"
                  className="mx-auto"
                />
              </p>
              <h4 className="mb-3 text-uppercase">Styling advice</h4>
              <p>
                Get professional recommendations for furniture configurations,
                colour combinations, storage options and more.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <p>
                <img
                  src="/design_service/3d_design_sketch.png"
                  alt="3D design sketch"
                  className="mx-auto"
                />
              </p>
              <h4 className="mb-3 text-uppercase">3D design sketch</h4>
              <p>
                Complimentary 3D sketch to help you visualise the design
                perfectly in your space, so you can place your order with a
                peace of mind.
              </p>
            </div> */}
          </div>
        </div>
        <div className="bg_grey">
          <div className="container">
            <div className="row row_padding">
              <div className="col-12 col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <h2 className="mb-60 text-uppercase">{parse(content?.designBannerHow?.nodes[0].header)}</h2>
                  </div>
                  {content?.allContentfulDesignServiceHeresHowItGoes?.nodes?.map((cont) => (
                    <>
                      <div className="col-2 col-md-1">
                        <div className="circle">0{cont.order}</div>
                      </div>
                      <div className="col-10 col-md-11 ps-4">
                        <h4>{cont.header}</h4>
                        <p>
                        {cont.content.content}
                        </p>
                      </div>
                    </>
                  ))}

                  {/* <div className="col-2 col-md-1">
                    <div className="circle">01</div>
                  </div>
                  <div className="col-10 col-md-11 ps-4">
                    <h4>Let's Chat</h4>
                    <p>
                      Tell us all about your home and furniture needs – from
                      floorplan to interior style, storage requirements and
                      budget.
                    </p>
                  </div>


                  <div className="col-2 col-md-1">
                    <div className="circle">02</div>
                  </div>
                  <div className="col-10 col-md-11 ps-4">
                    <h4>Design Development</h4>
                    <p>
                      Our team will come up with a design and recommended colour
                      selection, along with a quotation all tailored to your
                      needs. Feel free to schedule an appointment with us for
                      viewing of product or material samples.
                    </p>
                  </div>
                  <div className="col-2 col-md-1">
                    <div className="circle">03</div>
                  </div>
                  <div className="col-10 col-md-11 ps-4">
                    <h4>Welcome your new furniture!</h4>
                    <p>
                      Based on the agreed designs, our team will process the
                      order and arrange for delivery and installation at your
                      convenience. All you gotta do is sit back, relax and enjoy
                      your new space!
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <img
                  src={content?.designBannerHow?.nodes[0].banner.url}
                  alt={parse(content?.designBannerHow?.nodes[0].shortDescription)}
                />
              </div>
            </div>
          </div>
        </div>
        <a id="talk-to-us"></a>
        <div id="consultation_form">
          <div className="container">
            <div className="row row_padding">
              <div className="col-12 col-md-8 offset-md-2">
                <form method="post" onSubmit={handleSubmit} className="row g-3">
                  <div className="col-12">
                    <h2 className="text-uppercase text-center pb-4">
                      Speak To Us
                    </h2>
                    <p className="text-uppercase text-center font_xs font_semibold">
                      LET’S TALK DESIGN, OVER COFFFEE.
                    </p>
                  </div>
                  <div className="col-6">
                    <label htmlFor="input_first_name" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input_first_name"
                      name="firstName"
                      required
                    />
                    <ValidationError
                      prefix="First Name"
                      field="firstName"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="input_first_name" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input_last_name"
                      name="lastName"
                      required
                    />
                    <ValidationError
                      prefix="Last Name"
                      field="lastName"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-6 mt-5">
                    <label htmlFor="input_email" className="form-label">
                      Email
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
                  <div className="col-6 mt-5">
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

                  <div className="col-12 mt-5">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="message"
                      required
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <div className="col-12 mt-5 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={state.submitting}
                    >
                      Submit
                    </button>
                    <ValidationError errors={state.errors} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg_interior d-flex align-items-center"
          style={{
            background:
              `url(${content?.designBannerBottom?.nodes[0].banner.url}) center center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-4 col-lg-6 offset-lg-6">
                <div className="box_overlay">
                  {parse(content?.designBannerBottom?.nodes[0].longDescription.longDescription)}
                  {/* <h2 className="mb-80 text-uppercase">
                    Looking for interior design?
                  </h2>
                  <a href="/interior-design">
                    <button className="btn btn-outline">
                      SEE WHAT WE CAN DO
                    </button>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    designBannerHow:allContentfulBanner(filter: {section: {eq: "Design Service How It Goes"}}) {
      nodes {
        header
        shortDescription
        banner {
          url
        }
      }
    }
    designBannerTop:allContentfulBanner(filter: {section: {eq: "Design Service Top"}}) {
      nodes {
        header
        shortDescription
        longDescription {
          longDescription
        }
      }
    }
    designBannerBottom:allContentfulBanner(filter: {section: {eq: "Design Service Bottom"}}) {
      nodes {
        banner {
          url
        }
        longDescription {
          longDescription
        }
      }
    }
    allContentfulDesignService(sort: {fields: order, order: ASC}) {
      nodes {
        header
        imageText
        image {
          url
        }
        content
      }
    }
    allContentfulDesignServiceHeresHowItGoes(sort: {order: ASC, fields: order}) {
      nodes {
        header
        content {
          content
        }
        order
      }
    }
  }
`

// step 3: export
export default InteriorDesignDetails
