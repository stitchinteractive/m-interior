// step 1: import
import * as React from "react"
import { Link } from "gatsby"

// step 2: define
export function InteriorItem(props) {
  return (
    <div className="animate">
      <div className={props.bg}>
        <div className="container">
          <div className="row row_padding">
            <div className="d-md-flex align-items-center">
              <div className="col-12 col-md-6">
                <h1 className="heading_boxed mb-3">{props.number}</h1>
                <h3 className="text-uppercase mb-4">{props.project_name}</h3>
                <p>{props.content}</p>
                <Link to={props.url}>
                  <button type="submit" className="btn btn-light mb-5">
                    Step in
                  </button>
                </Link>
              </div>
              <div class="col-12 col-md-6 ps-md-5">
                <img src={props.image} alt="Interior Design" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
