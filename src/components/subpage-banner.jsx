// step 1: import
import * as React from "react"

// step 2: define
export function SubBanner(props) {
  return (
    <div
      className="sub_banner"
      style={{
        background: "url(" + props.background + ") center center no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay h-100">
        <div className="row">
          <div className="col-md-6 offset-md-6">
            <div className="text-end">
              <div className="text-uppercase font_sm">{props.category}</div>
              <h2 className="text-uppercase mb-3">{props.sub_category}</h2>
              <p className="font_medium">
                Customise your own furniture with flexible configurations such
                as sizes, colours and storage requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="scroll_down font_xs font_black font_medium text-uppercase">
          <div className="d-flex">
            <img
              src="/icons/scroll_down.png"
              className="me-2"
              alt="Scroll down"
            />
            Scroll down to explore
          </div>
        </div>
      </div>
    </div>
  )
}
