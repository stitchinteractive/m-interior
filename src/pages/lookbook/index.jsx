// step 1: import
import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../../components/layout"
import { LookBookItem } from "../../components/lookbook-item"
import { graphql } from 'gatsby'

// step 2: define component
const LookBook = ({data}) => {
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
        <div className="row padding_heading animate">
          <div className="col-12">
            <h2 className="text-uppercase pb-4">
            {content?.allContentfulBanner?.nodes[0].header}
            </h2>
            <h4 className="text-uppercase pb-0">
            {content?.allContentfulBanner?.nodes[0].shortDescription}
            </h4>
          </div>
        </div>
      </div>
      {content?.allContentfulLookbook?.nodes?.map((cont) => (
      <div className="animate">
        <LookBookItem
          bg={
            cont.order % 2 == 0
              ? "bg_grey"
              : ""
          }
          area={cont.title}
          content={cont.content}
          link={cont.link}
          image_large={cont.largeImage.url}
          image_small={cont.smallImage.url}
        ></LookBookItem>
      </div>
      ))}
      {/* <div className="animate">
        <LookBookItem
          bg=""
          area="Living Room"
          content="The living room usually houses the most furniture and it can be
            tricky to coordinate the look and feel of every piece. See how you
            can easily create a cohesive look with our modular furniture."
          link="/lookbook/living-room"
          image_large="/lookbook/living_room/1.jpg"
          image_small="/lookbook/living_room/2.jpg"
        ></LookBookItem>
      </div>
      <div className="animate">
        <LookBookItem
          bg="bg_grey"
          area="Bed Room"
          content="Time to kickback and unwind? The key to a better night’s sleep is a clutter-free space and well-ordered furniture arrangements. 
"
          link="/lookbook/bed-room"
          image_large="/lookbook/bed_room/1.jpg"
          image_small="/lookbook/bed_room/2.jpg"
        ></LookBookItem>
      </div>
      <div className="animate">
        <LookBookItem
          bg=""
          area="Study Room"
          content="Say hello to productive days ahead! Keep your spaces organised with the right storage systems, so you can focus on bigger things."
          link="/lookbook/study-room"
          image_large="/lookbook/study_room/1.jpg"
          image_small="/lookbook/study_room/2.jpg"
        ></LookBookItem>
      </div>
      <div className="animate">
        <LookBookItem
          bg="bg_grey"
          area="Dining Room"
          content="More than just a wine and dine area, the dining room is a place to host warm gatherings with your loved ones – which is why it’s equally important to create spaces that’s a feast for the eyes too!"
          link="/lookbook/dining-room"
          image_large="/lookbook/dining_room/1.jpg"
          image_small="/lookbook/dining_room/2.jpg"
        ></LookBookItem>
      </div> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBanner(filter: {section: {eq: "Lookbook"}}) {
      nodes {
        header
        shortDescription
      }
    }
    allContentfulLookbook(sort: {fields: order, order: ASC}) {
      nodes {
        title
        content
        link
        largeImage {
          url
        }
        smallImage {
          url
        }
        order
      }
    }
  }
`

// step 3: export
export default LookBook
