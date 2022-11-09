// step 1: import
import React from "react"
import * as testimonalModule from "./testimonial-item.module.css"
import StarIcon from "../icons/star"
import TickIcon from "../icons/tick"

// step 2: define and export
export function TestimonialItem(props) {
  return (
    <div className={testimonalModule.testimonial_item}>
      <div className="row">
        {/*
        <div className="col-3">
          <img src={props.image} className="avatar" alt="Profile" />
        </div>
        */}
        <div className="col-12">
          <div className="row align-items-center">
            <div className="col-12">
              <h6>{props.name}</h6>
            </div>
            {/*
            <div className="col-12 d-flex">
              {props.stars}
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col pt-4">
          <div className={testimonalModule.review}><p
                  dangerouslySetInnerHTML={{ __html: props.review }}
                ></p></div>
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
          <div className={testimonalModule.info}>{props.date}</div>
        </div>
      </div>
    </div>
  )
}
