// step 1: import
import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { MembershipTable } from "../components/membership-table"
import AsteriskIcon from "../icons/asterisk"
import AsteriskIconBlack from "../icons/asterisk-black"
import Accordion from "react-bootstrap/Accordion"
import { graphql } from 'gatsby'
import parse from 'html-react-parser'

// import module.css
import * as mintClubModule from "./mint-club.module.css"

// step 2: define component
const MintClub = ({data}) => {
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    gsap.utils.toArray(".animate").forEach(function (e) {
      gsap.from(e, {
        duration: 0.8,
        ease: "power1.out",
        opacity: 0,
        y: 100,
        scrollTrigger: e,
        onComplete: () => console.log(e),
      })
    })
  })

  const [content, setContent] = useState(data)

  return (
    <Layout>
      <div>
        <div className="bg_blue animate">
          <div
            id={mintClubModule.banner}
            className="d-flex flex-column justify-content-center align-items-center text-center"
            style={{
              background: `url(${content?.allContentfulBanner?.nodes[0].banner.url}) center center no-repeat`,
              backgroundSize: "cover",
            }}
          >
            {parse(content?.allContentfulBanner?.nodes[0].longDescription.longDescription)}

            {/* <h1 className="text-uppercase pb-2">M.INT club</h1>
            <div className="font_xxl text-uppercase pb-2 font_montserrat">
              <strong>is</strong> <i>more than just </i>
              <strong>a rewards program</strong>
            </div>
            <p className="pb-10">
              Join our community and be a part of something bigger.
            </p>
            <p className="pb-3">Get a 10% off welcome gift when you join us!</p> 
            <p>
              <Link to="/create-account">
                <button
                  type="button"
                  className="btn btn-outline-large btn-white me-3"
                >
                  Join the club
                </button>
              </Link>
              <Link to="/login">
                <button
                  type="button"
                  className="btn btn-outline btn-outline-large"
                >
                  Log In
                </button>
              </Link>
            </p>*/}
          </div>
        </div>
        <div className="bg_black font_white line_height_dense">
          <div className="container">
            <div className="row padding_heading animate">
              <h2 className="text-uppercase pb-5 d-flex justify-content-center align-items-center">
                <div className="pe-3">
                  <AsteriskIcon />
                </div>
                Members-Only Benefits
                <div className="ps-3">
                  <AsteriskIcon />
                </div>
              </h2>
              <div className="col-12 col-md-10 offset-md-1 pt-5 animate">
                <div className="row">
                {content?.allContentfulMembersOnlyBenefits?.nodes?.map((cont) => (
                  <div className="col-12 col-md-6">
                  <div className="row pb-5">
                    <div className="col-2">
                      <img src={cont.image.url} alt={cont.image.title} />
                    </div>
                    <div className="col-10 col-md-9">
                      <h5 className="text-uppercase pb-3">{cont.header}</h5>
                      <p>{cont.content}</p>
                    </div>
                  </div>
                </div>
                ))}
                  {/* <div className="col-12 col-md-6">
                    <div className="row pb-5">
                      <div className="col-2">
                        <img src="/icons/club_discounts.png" alt="Discounts" />
                      </div>
                      <div className="col-10 col-md-9">
                        <h5 className="text-uppercase pb-3">Discounts</h5>
                        <p>Gain access to exclusive discounts and deals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row pb-5">
                      <div className="col-2">
                        <img
                          src="/icons/club_content.png"
                          alt="Exclusive content"
                        />
                      </div>
                      <div className="col-10 col-md-9">
                        <h5 className="text-uppercase pb-3">
                          Exclusive content
                        </h5>
                        <p>
                          Unlock interior style guides and services for members
                          only.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row pb-5">
                      <div className="col-2">
                        <img
                          src="/icons/club_events.png"
                          alt="Events and workshops"
                        />
                      </div>
                      <div className="col-10 col-md-9">
                        <h5 className="text-uppercase pb-3">
                          Events and workshops
                        </h5>
                        <p>
                          Gain access to invite-only experiences and build a
                          community with us.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row pb-5">
                      <div className="col-2">
                        <img src="/icons/club_dibs.png" alt="First dibs" />
                      </div>
                      <div className="col-10 col-md-9">
                        <h5 className="text-uppercase pb-3">First dibs</h5>
                        <p>
                          Be the first to know about deals, product launches and
                          events from us.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg_grey_medium line_height_dense text-center">
          <div className="container">
            <div className="row row_padding">
              <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                <h2 className="text-uppercase fst-italic pb-5">How it works</h2>
              </div>
              {content?.allContentfulHowItWorks?.nodes?.map((cont, index, array) => (
                <div className="col-12 col-md-3">
                <p>
                  <img
                    src={cont.image.url}
                    alt={cont.image.title}
                    className="mx-auto"
                  />
                </p>
                <h4 className={
                            array.length - 1 === index
                              ? "text-uppercase pb-3"
                              : "text-uppercase pb-3 how_it_works"
                          }>{cont.header}</h4>
                <p>
                {cont.content}
                </p>
              </div>
              ))}
              {/* <div className="col-12 col-md-3">
                <p>
                  <img
                    src="/icons/club_join.png"
                    alt="Join"
                    className="mx-auto"
                  />
                </p>
                <h4 className="text-uppercase pb-3 how_it_works">Join</h4>
                <p>
                  Get 10% off your first purchase when you sign up - it’s free!
                </p>
              </div>
              <div className="col-12 col-md-3">
                <p>
                  <img
                    src="/icons/club_earn.png"
                    alt="Earn"
                    className="mx-auto"
                  />
                </p>
                <h4 className="text-uppercase pb-3 how_it_works">Earn</h4>
                <p>Earn points through small goals or purchases</p>
              </div>
              <div className="col-12 col-md-3">
                <p>
                  <img
                    src="/icons/club_redeem.png"
                    alt="Redeem"
                    className="mx-auto"
                  />
                </p>
                <h4 className="text-uppercase pb-3">Redeem</h4>
                <p>Redeem exclusive rewards!</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="bg_grey">
          <div className="container-fluid">
            <div className="row pt-5">
              <h2 className="text-uppercase p-5 d-flex justify-content-center align-items-center text-center">
                <div className="pe-3">
                  <AsteriskIconBlack />
                </div>
                Get exclusive with us
                <div className="ps-3">
                  <AsteriskIconBlack />
                </div>
              </h2>
            </div>
          </div>
          <div className="container-membership">
            <MembershipTable />
          </div>
          <div className="text-center pt-5">
            <a href="/create-account">
              <button className="btn btn-primary-large mb-120">
                Join the club
              </button>
            </a>
          </div>
        </div>
        <div className="bg_white">
          <div className="container">
            <div className="row row_padding">
              <h2 className="text-uppercase pb-5 d-flex justify-content-center align-items-center">
                Frequently asked questions
              </h2>
              <Accordion defaultActiveKey="1">
              {content?.allContentfulFaq?.nodes?.map((cont, index, array) => (
                <Accordion.Item eventKey={cont.order}>
                <Accordion.Header>{cont.header}</Accordion.Header>
                <Accordion.Body>
                {parse(cont.content.content)}
                </Accordion.Body>
              </Accordion.Item>
              ))}
                {/* <Accordion.Item eventKey="1">
                  <Accordion.Header>What is M.INT Club?</Accordion.Header>
                  <Accordion.Body>
                    M.INT Club is more than just a rewards program, it’s a
                    community to empower you to get creative with your spaces
                    and celebrate modularity with us. As a member, you get to
                    earn points to redeem exclusive content and rewards, plus
                    enjoy member-only experiences. You may refer to more
                    information <Link to="/mint-club">here</Link>.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How do I sign up for M.INT Club?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      If you have placed any order from us before or have
                      subscribed to our newsletter as of 31 October 2022, you
                      should have received an email from us with the account
                      activation details. If not, please contact us at&nbsp;
                      <a href="mailto:hello@m-furniture.co">
                        hello@m-furniture.co
                      </a>
                      &nbsp;for assistance.
                    </p>
                    <p>
                      If you're new here, we welcome you to create an account
                      for free <Link to="/create-account">here</Link>.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Do I need to pay any membership fees?
                  </Accordion.Header>
                  <Accordion.Body>
                    Not at all, M.INT Club is free for all to join!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>How do I earn points?</Accordion.Header>
                  <Accordion.Body>
                    There are many ways you can earn points – create an account,
                    leave a review, refer a friend etc. For every $1 spent, you
                    will also earn 2 points. You may log in to your account to
                    view the activities available.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    What can I do with my points?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can redeem them for exciting rewards! Apart from
                    discount vouchers, we have exclusive content and services
                    that you can unlock with your points. You may log in to your
                    account to view the list of rewards available. We are
                    constantly refreshing the rewards to offer better perks for
                    you, so do check in regularly!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Will my points expire?</Accordion.Header>
                  <Accordion.Body>
                    Yes, any unused points will expire after 365 days from the
                    date it is earned. For example, if you earned 100 points on
                    1 August 2022, your points will expire on 1 August 2023.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    Will my tier status be downgraded?
                  </Accordion.Header>
                  <Accordion.Body>
                    No, your tier status will not be downgraded even if you’re
                    inactive. The only way is up!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    Will redeeming rewards affect my tier status?
                  </Accordion.Header>
                  <Accordion.Body>
                    No, points redemption will not affect your tier status.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    Can I transfer/combine points from multiple accounts?
                  </Accordion.Header>
                  <Accordion.Body>
                    No, points are non-transferable so please avoid creating
                    multiple accounts.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    I have made a purchase and/or completed an activity, but I
                    don’t see the earned points in my account. What should I do?
                  </Accordion.Header>
                  <Accordion.Body>
                    Please allow up to 3 working days for the points to be
                    reflected in your account. If you have placed an order, the
                    points will only be processed upon successful delivery of
                    your item(s). If you still have issues viewing your earned
                    points, please contact us at&nbsp;
                    <a href="mailto:hello@m-furniture.co">
                      hello@m-furniture.co
                    </a>
                    &nbsp; for assistance.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    I have engaged your interior design services, do I also get
                    to earn points based on my spending?
                  </Accordion.Header>
                  <Accordion.Body>
                    We regret to inform that points accumulation does not apply
                    for interior design services. Points can only be earned from
                    product purchases. If you have engaged our interior design
                    service and purchased our products, you will earn points
                    based on your product spending.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    How does the referral program work?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Simply log in to your account, go to ‘refer a friend’ page
                      and share your referral code with your friends. The
                      referee must be a new customer with no purchase record and
                      does not have an existing account with us. Kindly note
                      that you cannot share the same billing and shipping
                      information as the referee.
                    </p>
                    <p>
                      Each referee will get to enjoy 15% off their first
                      purchase with a minimum spend of $50. You will earn the
                      referral reward of 200 points only when the referee has
                      completed his/her first order.
                    </p>
                    <p>
                      There is no limit to the number of referrals, so go ahead
                      and invite all your friends and relatives!
                    </p>
                  </Accordion.Body>
                </Accordion.Item> */}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBanner(filter: {section: {eq: "Mint Club"}}) {
      nodes {
        banner {
          url
        }
        longDescription {
          longDescription
        }
      }
    }
    allContentfulMembersOnlyBenefits(sort: {fields: order, order: ASC}) {
      nodes {
        header
        content
        image {
          url
          title
        }
      }
    }
    allContentfulHowItWorks(sort: {fields: order, order: ASC}) {
      nodes {
        header
        content
        image {
          url
          title
        }
      }
    }
    allContentfulFaq(sort: {fields: order, order: ASC}, filter: {type: {eq: "MINT Club"}}) {
      nodes {
        content {
          content
        }
        header
        order
      }
    }
  }
`

// step 3: export
export default MintClub
