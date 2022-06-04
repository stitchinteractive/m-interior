// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { LookBookDetailsItem } from "../components/lookbook-details-item"

// step 2: define component
const LookBookDetails = () => {
  return (
    <Layout>
      <div className="row">
        <LookBookDetailsItem
          area="Living Room"
          image_1="/lookbook/living_room/1.jpg"
          image_2="/lookbook/living_room/2.jpg"
          image_3="/lookbook/living_room/3.jpg"
          image_4="/lookbook/living_room/4.jpg"
          image_5="/lookbook/living_room/5.jpg"
          image_6="/lookbook/living_room/6.jpg"
          image_7="/lookbook/living_room/7.jpg"
        ></LookBookDetailsItem>
      </div>
    </Layout>
  )
}

// step 3: export
export default LookBookDetails
