// step 1: import
import * as React from "react"
import { Link } from "gatsby"

// step 2: define
export function Reward(props) {
  return (
    <div
      className="reward"
      style={{
        backgroundImage: `url(` + props.image_url + `)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="d-flex align-items-end">
        <div className="me-auto">
          {props.discount} off
          <br />
          {props.points} Points
        </div>

        <div className="text-uppercase">
          <Link to="/">Redeem &gt;</Link>
        </div>
      </div>
    </div>
  )
}
