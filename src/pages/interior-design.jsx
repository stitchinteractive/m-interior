// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { LookBookDetailsItem } from "../components/lookbook-details-item"

// step 2: define component
const InteriorDesignDetails = () => {
  return (
    <Layout>
      <div className="row_padding_sides">
        <div className="row row_padding">
          <div className="col-md-5">
            <h2 class="text-uppercase">Treescape condo, 4-room sadsdsadsdsa</h2>
            <h5 class="text-uppercase">Modern Contemporary</h5>
            <p>
              M.INT missions are Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-md-7">
            <img src="/interior/living_room/floor_plan.jpg" alt="Floor Plan" />
          </div>
        </div>
      </div>
      <div className="row_padding_sides bg_grey">
        <div className="row row_padding">
          <LookBookDetailsItem
            image_1="/interior/living_room/1.jpg"
            image_2="/interior/living_room/2.jpg"
            image_3="/interior/living_room/3.jpg"
            image_4="/interior/living_room/4.jpg"
            image_5="/interior/living_room/5.jpg"
            image_6="/interior/living_room/6.jpg"
            image_7="/interior/living_room/7.jpg"
          ></LookBookDetailsItem>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default InteriorDesignDetails
