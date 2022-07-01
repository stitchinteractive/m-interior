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
            <h2 className="text-uppercase heading_line pb-4">Shipping</h2>
            <p>
              <strong>
                Enjoy free local delivery for all orders above SGD 150.
              </strong>
            </p>
            <h5>Local Delivery</h5>
            <ul className="listing_bullet">
              <li>
                For orders within Singapore, delivery fee will be charged at a
                flat rate of SGD 10.
              </li>
              <li>
                The standard delivery timing is between 9am to 4pm, from Monday
                to Saturday.
              </li>
              <li>
                We deliver island wide except for restricted areas. Additional
                fees apply for deliveries to Sentosa.
              </li>
            </ul>

            <br />

            <h5>International Shipping</h5>
            <ul className="listing_bullet">
              <li>
                We regret to inform that we do not provide delivery to other
                countries outside of Singapore at the moment.
              </li>
            </ul>

            <br />

            <h5>Terms & Conditions</h5>
            <ul className="listing_bullet">
              <li>
                If you’re unable to receive the order on the first delivery
                attempt, we will inform you of the unsuccessful delivery and
                reschedule another date that is convenient for you
              </li>
              <li>
                Should the second delivery attempt fail, the third attempt will
                be chargeable based on our standard shipping rates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default InteriorDesignDetails
