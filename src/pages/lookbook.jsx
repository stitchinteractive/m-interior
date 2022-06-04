// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { LookBookItem } from "../components/lookbook-item"

// step 2: define component
const LookBook = () => {
  return (
    <Layout>
      <div className="row_padding_sides">
        <div className="row row_padding">
          <div className="col-12">
            <h2 class="text-uppercase pb-4">
              There’s 101 ways you can go modular with us.
            </h2>
            <h6 class="text-uppercase pb-0">
              Shop the look below and get inspirations for your space.
            </h6>
          </div>
        </div>
      </div>
      <LookBookItem
        bg=""
        area="Living Room"
        content="The living room usually houses the most furniture and it can be
            tricky to coordinate the look and feel of every piece. See how you
            can easily create a cohesive look with our modular furniture."
        link="/lookbook-details"
        image_large="/lookbook/living_room/1.jpg"
        image_small="/lookbook/living_room/2.jpg"
      ></LookBookItem>
      <LookBookItem
        bg="bg_grey"
        area="Bed Room"
        content="Time to kickback and unwind? The key to a better night’s sleep is a clutter-free space and well-ordered furniture arrangements. 
"
        link="/lookbook-details"
        image_large="/lookbook/bed_room/1.jpg"
        image_small="/lookbook/bed_room/2.jpg"
      ></LookBookItem>
      <LookBookItem
        bg=""
        area="Study Room"
        content="Say hello to productive days ahead! Keep your spaces organised with the right storage systems, so you can focus on bigger things."
        link="/lookbook-details"
        image_large="/lookbook/study_room/1.jpg"
        image_small="/lookbook/study_room/2.jpg"
      ></LookBookItem>
      <LookBookItem
        bg="bg_grey"
        area="Dining Room"
        content="More than just a wine and dine area, the dining room is a place to host warm gatherings with your loved ones – which is why it’s equally important to create spaces that’s a feast for the eyes too!"
        link="/lookbook-details"
        image_large="/lookbook/dining_room/1.jpg"
        image_small="/lookbook/dining_room/2.jpg"
      ></LookBookItem>
    </Layout>
  )
}

// step 3: export
export default LookBook
