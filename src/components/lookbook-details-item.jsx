// step 1: import
import * as React from "react"

// step 2: define
export function LookBookDetailsItem(props) {
  return (
    <p className="animate">
      <img src={props.image} alt={props.alt} />
    </p>
  )
}
