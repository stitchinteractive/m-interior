// step 1: import
import React, { useLayoutEffect } from "react"
// import * as bootstrap from "bootstrap"
import Accordion from "react-bootstrap/Accordion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"

// step 2: define component
const InteriorDesignDetails = () => {
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

  return (
    <Layout>
      <div class="container">
        <div className="row row_padding animate">
          <div class="col col-lg-8 offset-lg-2">
            <h2 className="text-uppercase heading_line pb-4">
              Frequently Asked Questions
            </h2>
            <h5 class="text-uppercase pb-9">
              M.INT, which values customers first, always offers helpful advice.
            </h5>

            <h5 class="text-uppercase pb-5">General Enquiries</h5>

            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What are the payment methods?
                </Accordion.Header>
                <Accordion.Body>
                  We accept payment via Visa, Mastercard, PayNow, Paypal and
                  bank transfers.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Do you have a showroom or store where I can view the products?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We do not have any physical stores open to the public at the
                    moment. Viewing of products is available at our office, only
                    if an appointment was scheduled beforehand. Please speak to
                    us to arrange for an appointment slot.
                  </p>
                  <p>
                    We have also made sure to include all the necessary product
                    information that you need on our website so you can shop
                    24/7!
                  </p>
                  <p>
                    You may contact us at hello@m-interior.co if you require any
                    further assistance.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <br />
              <h5 class="text-uppercase py-5">Orders</h5>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Can I change my order prior to delivery?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    If you would like to change your order details, please
                    notify us within 48 hours after the order has been placed.
                    Please contact us at hello@m-interior.co with your invoice
                    number for assistance.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Can I add on more item(s) after I have placed the order?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Yes, you may submit another order and notify us within 48
                    hours after the order has been placed so that we can
                    consolidate the orders. Please contact us at
                    hello@m-interior.co with your invoice number for assistance.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  I can’t seem to use my promo code at checkout. What can I do?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Please check if you have entered a valid promo code and if
                    your order has met the terms and conditions of the
                    promotion.
                  </p>
                  <p>
                    Some possible reasons that your code is invalid:
                    <ul className="listing_bullet">
                      <li>Promo code has expired</li>
                      <li>Promo code has reached the redemption limit</li>
                      <li>Minimum spending requirement was not meet</li>
                      <li>Certain items are not qualified for the promotion</li>
                      <li>
                        The selected country for delivery is not valid for the
                        promotion
                      </li>
                    </ul>
                  </p>
                  <p>
                    If you have fulfilled the terms and conditions but still
                    have trouble using the promo code, please contact us at
                    hello@m-interior.co for assistance.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  I have submitted my order but I forgot to use my promo code.
                  What can I do?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Promo codes cannot be applied once order has been submitted.
                    The code has to be entered in the ‘promo code’ field at
                    checkout. If you have forgotten to apply it, you may save
                    the code for your next purchase instead (provided the terms
                    and conditions are met).
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <br />
              <h5 class="text-uppercase py-5">Delivery</h5>

              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  How long do deliveries usually take?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Once payment has been made, we will contact you to inform
                    you about the delivery date and time. For items that are
                    ready stocks and do not require customisation, it will be
                    delivered to you within 3 to 7 working days, unless
                    otherwise stated.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  What are the delivery timings?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Our standard delivery timing is between 9am to 4pm, from
                    Monday to Saturday. If you have any preferred date and time,
                    kindly leave a note upon checkout.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  What are the delivery charges?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We offer free local delivery for all orders above SGD 150.
                    For local orders, there is a flat delivery fee of SGD 10.
                    You may refer to [insert link to shipping page] for more
                    information.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  Do you ship internationally?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We regret to inform that we do not provide delivery to other
                    countries outside of Singapore at the moment.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  What happens if I have missed my delivery?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    If you’re unable to receive the order on the first delivery
                    attempt, we will inform you of the unsuccessful delivery and
                    reschedule another date that is convenient for you.
                  </p>
                  <p>
                    Should the second delivery attempt fail, the third attempt
                    will be chargeable based on our standard shipping rates
                    [insert link to shipping page].
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>
                  I need the products urgently. Can you arrange for an express
                  delivery?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Please contact us at hello@m-interior.co with your invoice
                    number and we will try our best to expedite the order for
                    you. Do note that express fees will be charged accordingly.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>
                  I need the products urgently. Can you arrange for an express
                  delivery?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Please contact us at hello@m-interior.co with your invoice
                    number and we will try our best to expedite the order for
                    you. Do note that express fees will be charged accordingly.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>
                  Will there be additional charges if it is required to climb
                  stairs to deliver to my home?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Not to worry, we will not charge any extra fees for
                    staircase delivery.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <br />
              <h5 class="text-uppercase py-5">After Sales</h5>

              <Accordion.Item eventKey="15">
                <Accordion.Header>
                  Can I exchange or return the item(s)?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Yes, we offer exchanges within 20 days from the date of
                    delivery under specified conditions. You may refer to
                    [insert link to exchange and return page] for more
                    information. Do note that all items sold are non-refundable.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>
                  I received a wrong/defective item(s), what should I do?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We are sorry! Please contact us at hello@m-interior.co with
                    your invoice number and photo of your item(s) for
                    assistance. You may refer to [insert link to exchange and
                    return page] for more information.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>
                  I received a wrong/defective item(s), what should I do?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We are sorry! Please contact us at hello@m-interior.co with
                    your invoice number and photo of your item(s) for
                    assistance. You may refer to [insert link to exchange and
                    return page] for more information.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="18">
                <Accordion.Header>
                  Do you offer warranty for your products?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    No, our products do not come with any warranty. However, if
                    the item(s) received is incorrect or has a manufacturing
                    defect, we are happy to offer exchanges within 20 days from
                    the date of delivery. You may refer to [insert link to
                    exchange and return page] for more information.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <br />
              <h5 class="text-uppercase py-5">M.INT Club Membership</h5>

              <Accordion.Item eventKey="19">
                <Accordion.Header>What is M.INT Club?</Accordion.Header>
                <Accordion.Body>
                  <p>
                    M.INT Club is more than just a rewards program, it’s a
                    community to empower you to get creative with your spaces
                    and celebrate modularity with us. As a member, you get to
                    earn points to redeem exclusive content and rewards, plus
                    enjoy member-only experiences. You may refer to [insert link
                    to M.INT Club main page] for more information.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="20">
                <Accordion.Header>
                  How do I sign up for M.INT Club?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    If you have purchased any products from us or have
                    subscribed to our newsletter as of 31 July 2022, you will be
                    automatically registered as a member. You should have
                    received an email notification with your assigned tier
                    details. If not, please contact us at hello@m-interior.co
                    for assistance.
                  </p>
                  <p>
                    If you’re new here, we welcome you to create an account for
                    free here [insert link to create an account page].
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="21">
                <Accordion.Header>
                  Do I need to pay any membership fees?
                </Accordion.Header>
                <Accordion.Body>
                  <p>Not at all, M.INT Club is free for all to join!</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="22">
                <Accordion.Header>How do I earn points?</Accordion.Header>
                <Accordion.Body>
                  <p>
                    There are many ways you can earn points – create an account,
                    complete your profile, refer a friend etc. For every $1
                    spent, you will also earn 2 points. You may log in to your
                    account to view the activities available.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="23">
                <Accordion.Header>
                  What can I do with my points?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    You can redeem them for exciting rewards! Apart from
                    discount vouchers, we have exclusive content and services
                    that you can unlock with your points. You may log in to your
                    account to view the list of rewards available. We are
                    constantly refreshing the rewards to offer better perks for
                    you, so do check in regularly!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="24">
                <Accordion.Header>Will my points expire?</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Yes, any unused points will expire after 365 days from the
                    date it is earned. For example, if you earned 100 points on
                    1 August 2022, your points will expire on 1 August 2023.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="25">
                <Accordion.Header>
                  Will my tier status be downgraded?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    No, your tier status will not be downgraded even if you’re
                    inactive. The only way is up!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="26">
                <Accordion.Header>
                  Will redeeming rewards affect my tier status?
                </Accordion.Header>
                <Accordion.Body>
                  <p>No, points redemption will not affect your tier status.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="27">
                <Accordion.Header>
                  Can I transfer/combine points from multiple accounts?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    No, points are non-transferable so please avoid creating
                    multiple accounts.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="28">
                <Accordion.Header>
                  Can I transfer/combine points from multiple accounts?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    No, points are non-transferable so please avoid creating
                    multiple accounts.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="29">
                <Accordion.Header>
                  I have made a purchase and/or completed an activity, but I
                  don’t see the earned points in my account. What should I do?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Please allow up to 3 working days for the points to be
                    reflected in your account. If you have placed an order, the
                    points will only be processed upon successful delivery of
                    your item(s). If you still have issues viewing your earned
                    points, please contact us at hello@m-interior.co for
                    assistance.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="30">
                <Accordion.Header>
                  I have engaged your interior design services, do I also get to
                  earn points based on my spending?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We regret to inform that points accumulation does not apply
                    for interior design services. Points can only be earned from
                    product purchases. If you have engaged our interior design
                    service and purchased our products, you will earn points
                    based on your product spending.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="31">
                <Accordion.Header>
                  How does the referral program work?
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Simply log in to your account, go to ‘refer a friend’ page
                    and share your referral code with your friends. The referee
                    must be a new customer with no purchase record and does not
                    have an existing account with us. Kindly note that you
                    cannot share the same billing and shipping information as
                    the referee.
                  </p>
                  <p>
                    Each referee will get to enjoy 15% off their first purchase
                    with a minimum spend of $50. You will earn the referral
                    reward of 200 points only when the referee has completed
                    his/her first order.
                  </p>
                  <p>
                    There is no limit to the number of referrals, so go ahead
                    and invite all your friends and relatives!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default InteriorDesignDetails
