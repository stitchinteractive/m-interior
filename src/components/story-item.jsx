// step 1: import
import React from "react"
import * as storyModule from "./story-item.module.css"

// step 2: define and export
export function StoryItem(props) {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="row align-items-center">
            <div className="col-12">
              <img src={props.img} alt="Story" />
            </div>
          </div>
        </div>
      </div>
      <div className={storyModule.story_item}>
        <div className="row">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-12">
                <h4 className="text-uppercase mb-3">{props.name}</h4>
                <p className="font_light pb-4">{props.date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col pt-4">
            <div className={storyModule.review}>{props.review}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={storyModule.info}>
              <div className="d-flex pt-3">
                <a href="" className="link_underline" rel="noreferrer">
                  Read more &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
