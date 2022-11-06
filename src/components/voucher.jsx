// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";
import ArrowNext from "../icons/arrow-next"

// step 2: define
export function Voucher(props) {
  return (
    <div className="col-12 col-lg-4 mb-4">
      {
        props.type === "FacebookShareCampaign" ? (
          <a class="swell-campaign-link no_underline"
            data-campaign-id={props.id}
            data-display-mode="direct"
            href="javascript:void(0)">
              <div className="voucher">
                  <h5 className="mb-3 text-uppercase">{props.heading}</h5>
                  <div className="mb-0">{props.points}</div>
                  <div className="inline-block">
                    <FacebookIcon size={32} round />
                  </div>
                  <div className="note">{props.note}</div>
                </div>
          </a>
        ) : (
          props.type === "FacebookPageVisitCampaign" ? (
            <a class="swell-campaign-link no_underline"
              data-campaign-id={props.id}
              data-display-mode="direct"
              href="javascript:void(0)">
                <div className="voucher">
                  <h5 className="mb-3 text-uppercase">{props.heading}</h5>
                  <div className="mb-0">{props.points}</div>
                  <div className="inline-block">
                    <ArrowNext />
                  </div>
                  <div className="note">{props.note}</div>
                </div>
            </a>
          ) : (
            <Link to={props.type === "YotpoReviewCampaign" ? "/review" : props.type === "ReferralCampaign" ? "/refer-a-friend " : "/earn-points"} className="no_underline">
              <div className="voucher">
                <h5 className="mb-3 text-uppercase">{props.heading}</h5>
                <div className="mb-0">{props.points}</div>
                <div className="inline-block">
                  <ArrowNext />
                </div>
                <div className="note">{props.note}</div>
              </div>
            </Link>
          )
        )
      }
          
    </div>
  )
}
