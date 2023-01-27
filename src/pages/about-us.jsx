// step 1: import
import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { Membership } from "../components/membership"
import * as aboutModule from "./about-us.module.css"
import { graphql } from 'gatsby'
import parse from 'html-react-parser'

// step 2: define component
const AboutUs = ({data}) => {
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

  const [content, setContent] = useState(data)

  return (
    <Layout>
      {/* banner */}
      <div
        className={`${aboutModule.banner} animate`}
        style={{
          background: `url(${content?.allContentfulBanner?.nodes[0].banner.url}) center center no-repeat`,
          backgroundSize: "cover",
        }}
      ></div>
      {/* end banner */}

      <div className="bg_grey animate">
      {content?.allContentfulAboutUs?.nodes?.map((cont) => (
        <div className="border_bottom">
          <div className="container animate">
            <div className="row padding_about">
              <div className="d-lg-flex align-items-start">
                <div className={
                            cont.direction === "Left"
                              ? "col col-lg-6"
                              : "order-lg-2 col col-lg-6 offset-lg-1"
                          }>
                  {parse(cont.content.content)}
                </div>
                <div className=
                {
                  cont.direction === "Left"
                    ? "col col-md-6 col-lg-5 offset-lg-1"
                    : "order-lg-1 col col-md-6 col-lg-5 "
                }> 
                  <img
                    src={cont.image.url}
                    alt={cont.title}
                    className="img_border img_overflow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

        {/* brand story */}
        
        {/* end brand story */}

        {/* what we do */}
        
        {/* end what we do */}

        {/* design philosophy */}
        
        {/* end design philosophy */}

        {/* membership */}
        <div className="animate">
          <Membership />
        </div>
        {/* end membership */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBanner(filter: {section: {eq: "About Us"}}) {
      nodes {
        banner {
          url
        }
      }
    }
    allContentfulAboutUs(sort: {fields: order, order: ASC}) {
      nodes {
        title
        image {
          url
        }
        content {
          content
        }
        direction
      }
    }
  }
`

// step 3: export
export default AboutUs
