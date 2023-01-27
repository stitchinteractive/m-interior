// step 1: import
import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../../components/layout"
import { LookBookDetailsItem } from "../../components/lookbook-details-item"
import { Link } from "gatsby"
import BackIcon from "../../icons/back"
import { graphql } from 'gatsby'

// step 2: define component
const LookBookDetails = ({data}) => {
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
      <div className="container">
        <div className="row row_padding">
          <div className="col-12">
            <h2 className="text-uppercase pb-7 animate">Dining Room</h2>
          </div>
          <div className="col-12 col-md-6">
          {content?.leftLookbook?.nodes?.map((cont) => (
          <a
            href={cont.link}
            target="_blank"
            rel="noreferrer"
          >
            <LookBookDetailsItem
              image={cont.image.url}
              alt={cont.imageText}
            />
          </a>
          ))}
            {/* <a
              href="/shop/detail/long-tv-console"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/dining_room/1.jpg"
                alt="Dining Room"
              />
            </a>
            <a
              href="/shop/detail/big-module-with-full-drawer"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/dining_room/3.jpg"
                alt="Dining Room"
              />
            </a>
            <a
              href="/shop/detail/full-bookshelf"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/dining_room/5.jpg"
                alt="Dining Room"
              />
            </a> */}
          </div>

          <div className="col-12 col-md-6">
          {content?.rightLookbook?.nodes?.map((cont) => (
          <a
            href={cont.link}
            target="_blank"
            rel="noreferrer"
          >
            <LookBookDetailsItem
              image={cont.image.url}
              alt={cont.imageText}
            />
          </a>
          ))}
            {/* <a
              href="/shop/detail/small-tv-console"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/dining_room/2.jpg"
                alt="Dining Room"
              />
            </a>
            <a href="/shop/detail/big-module" target="_blank" rel="noreferrer">
              <LookBookDetailsItem
                image="/lookbook/dining_room/4.jpg"
                alt="Dining Room"
              />
            </a>
            <a
              href="/shop/detail/acacia-block-bundle-of-10"
              target="_blank"
              rel="noreferrer"
            >
              <LookBookDetailsItem
                image="/lookbook/dining_room/6.jpg"
                alt="Dining Room"
              />
            </a> */}
          </div>

          <div className="d-flex btn_back">
            <BackIcon />
            <Link
              to="/lookbook"
              className="ms-2 font_yellow text-uppercase font_semibold no_underline"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    leftLookbook: allContentfulLookbookItem(
      sort: {fields: order, order: ASC}
      filter: {category: {eq: "Dining Room"}, position: {eq: "Left"}}
    ) {
      nodes {
        category
        image {
          url
        }
        imageText
        link
        position
      }
    }
    rightLookbook: allContentfulLookbookItem(
      sort: {fields: order, order: ASC}
      filter: {category: {eq: "Dining Room"}, position: {eq: "Right"}}
    ) {
      nodes {
        category
        image {
          url
        }
        imageText
        link
        position
      }
    }
  }
`

// step 3: export
export default LookBookDetails
