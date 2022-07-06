// step 1: import
import * as React from "react"
import { Link } from "gatsby"

// step 2: define
export function BackToTop(props) {
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  return (
    <a
      href="javascript:void(0);"
      className="no_underline"
      onClick={handleClick}
    >
      <div className="d-flex justify-content-center mt-5">
        <img src="/ico_top.png" alt="" width="31" height="31" />
        <div className="ps-3 font_sm text-uppercase font_grey_medium_4 font_letterspacing_1">
          Back To Top
        </div>
      </div>
    </a>
  )
}
