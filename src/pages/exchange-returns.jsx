// step 1: import
import React, { useLayoutEffect } from "react"
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
      <div className="container">
        <div className="row row_padding animate">
          <div className="col col-lg-8 offset-lg-2">
            <h2 className="text-uppercase heading_line pb-4">
              Exchange &amp; Returns
            </h2>
            <h5>
              We are happy to offer exchanges within 20 days from date of
              delivery, if the following conditions are met:
            </h5>
            <ul className="listing_bullet">
              <li>Item purchased has a manufacturing defect</li>
              <li>Item received is incorrect from order</li>
              <li>Item is in its original packing, new condition and unused</li>
              <li>
                Photo of the defect and/or incorrect item within 20 days from
                date of delivery
              </li>
            </ul>

            <br />

            <h5>Terms &amp; conditions:</h5>
            <ul className="listing_bullet">
              <li>All items are valid for one-time exchange only</li>
              <li>
                M.INT reserves the right to reject any exchanges if the item
                does not meet all of the above conditions and if it is deemed
                unfit for exchange due to wear and tear, misuse and damage by
                customers etc.
              </li>
            </ul>

            <div className="bg_grey text-center p-5 font_semibold">
              For all exchange requests or after sales enquiry, please contact
              hello@m-interior.co for assistance. Please note that all items
              sold are non-refundable.
            </div>

            <hr />

            <h2 className="text-uppercase heading_line pb-4">
              Cancellation of order
            </h2>
            <strong>
              If you would like to cancel your order, please notify us within 48
              hours after the order has been placed. Do note that order cannot
              be cancelled once it has been arranged for delivery. A full refund
              of your item(s) will be made with no additional charges, within 14
              working days.
            </strong>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default InteriorDesignDetails
