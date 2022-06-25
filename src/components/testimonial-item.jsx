// step 1: import
import React from "react"
import * as testimonalModule from "./testimonial-item.module.css"
import StarIcon from "../icons/star"
import TickIcon from "../icons/tick"

// step 2: define and export
export function TestimonialItem() {
  return (
    <div className={testimonalModule.testimonial_item}>
      <div className="row">
        <div className="col-3">
          <img src="/profile.jpg" className="avatar" alt="Profile" />
        </div>
        <div className="col-9">
          <div className="row align-items-center">
            <div class="col-12">
              <h6>John D.</h6>
            </div>
            <div class="col-12 d-flex">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col pt-4">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-7">
          <div className={testimonalModule.info}>
            <div className="d-flex pt-3">
              <TickIcon /> &nbsp; Verified Customer
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 text-md-end pt-3">
          <div className={testimonalModule.info}>Jan 15, 2022</div>
        </div>
      </div>
    </div>
  )
}
