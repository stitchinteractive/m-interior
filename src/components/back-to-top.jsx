// step 1: import
import * as React from "react"
import { Link } from "gatsby"

// step 2: define
export function BackToTop(props) {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Link to="/" className="d-flex no_underline">
        <img src="/ico_top.png" alt="" width="31" height="31" />
        <div className="ps-2 font_sm font_grey_medium_4">Back To Top</div>
      </Link>
    </div>
  )
}
