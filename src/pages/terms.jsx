// step 1: import
import React, { useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
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
      <div className="container">
        <div className="row row_padding animate">
          <div className="col col-lg-8 offset-lg-2">
            <h2 className="text-uppercase heading_line mb-60">Terms of Use</h2>
            <h5>A. General</h5>
            <ol className="listing_bullet">
              <li>
                We are&nbsp;
                <strong>Minthedimensions Pte. Ltd. UEN No. 201928809W</strong>,
                a company incorporated in Singapore at
                <strong>
                  &nbsp;62 Ubi Road 1 #07-20 Oxley Bizhub 2 Singapore 408734
                </strong>
                .
              </li>
              <li>
                These terms and conditions (&quot;T&amp;Cs&quot;) apply to
                &nbsp;
                <Link to="https://www.m-furniture.co">www.m-furniture.co</Link>
                &nbsp; (the &quot;Site&quot;) and form the terms and conditions
                on which we provide products and services to you. Please read
                through the T&amp;Cs carefully before you use the Site. By using
                the Site, you agree that you have read the T&amp;Cs and agree to
                be bound by the T&amp;Cs.
              </li>
              <li>
                We may from time to time revise the T&amp;Cs (which are
                incorporated by reference into the T&amp;Cs) at our sole
                discretion and without notice to you. The revised T&amp;Cs shall
                be effective from the date of posting on the Site and your
                continued use of the Site indicates your agreement to the
                T&amp;Cs as posted. We advise that you check for updates to the
                T&amp;Cs and/or guidelines before using the Site.
              </li>
              <li>
                Our <Link to="/">Privacy Policy</Link> is incorporated by
                reference into the T&amp;Cs. By using the Site, you agree that
                you have read the Privacy Policy and agree to be bound by it.
              </li>
              <li>
                You may contact us by email at&nbsp;
                <Link to="mailto:hello@m-furniture.co">
                  hello@m-furniture.co
                </Link>
                &nbsp;if you have any questions about the T&amp;Cs.
              </li>
              <li>
                By using this Site, you warrant that (a) you are at least 18
                years of age, or if you are below 18 years of age you are under
                the supervision of your parent or legal guardian or they have
                given consent for your use of the Site; and (b) all information
                supplied by you to us is current, complete, true and accurate.
              </li>

              <hr />

              <h5>B. Definitions</h5>
              <li>
                &quot;Force Majeure Event&quot; means acts of God, acts of war,
                terrorism or civil unrest, industrial action, fire, flood,
                elements of weather or health epidemics declared by the World
                Health Organisation or any other event beyond the reasonable
                control of a Party and which affects the general public of the
                Party's local jurisdiction.
              </li>
              <li>
                &quot;Intellectual Property Rights&quot; means all intellectual
                property rights whether registered or not, including but not
                limited to copyright, trademarks or business names, design
                rights, logos, patents, know-how, trade secrets and database
                rights related to and in connection with the Site, our services
                or our products.
              </li>
              <li>
                &quot;Personal Data&quot; means any data about a user who can be
                identified from that data, or from that data and other
                information that we have or are likely to have access to.
              </li>
              <li>
                &quot;We&quot;, &quot;us&quot;, &quot;our&quot; means
                Minthedimensions Pte. Ltd; &quot;you&quot;, &quot;your&quot; or
                &quot;user&quot; means any user of the Site and/or our services;
                and &quot;party&quot; means of them.
              </li>

              <hr />

              <h5>C. User Account</h5>
              <li>
                You are required to create and maintain an account with us in
                order to use our services.
              </li>
              <li>
                By creating an account with us, you:
                <ol type="a">
                  <li>
                    Agree to provide and maintain current, complete, true and
                    accurate information about yourself. You agree that your
                    failure to provide current, complete, true and accurate
                    information about yourself may affect your ability to use
                    our services, including accessing the Site.
                  </li>
                  <li>
                    Consent to us collecting, retaining, processing and using
                    your Personal Data in accordance with our Privacy Policy.
                  </li>
                  <li>
                    Agree that it is your responsibility to keep your account
                    details, including your login details and password,
                    confidential at all times. Please contact us if you suspect
                    that your account's security is at risk, or that there has
                    been unauthorised use or access of your account.
                  </li>
                  <li>
                    Agree that you may not transfer your account to any party
                    without our prior written consent.
                  </li>
                  <li>
                    Agree that you are fully responsible and liable for the
                    acts, omissions and other activities of any other persons
                    you have authorised to access or use your account on your
                    behalf, regardless of whether such persons acted according
                    to your instructions.
                  </li>
                  <li>
                    Agree that we will not be liable for any loss or damage
                    arising from your failure to comply with these provisions.
                  </li>
                </ol>
              </li>
              <li>
                We reserve the right to refuse registration or de-register your
                account at our sole discretion without having to assign any
                reason.
              </li>

              <hr />

              <h5>D. Intellectual Property Rights</h5>
              <li>
                We are the owner or licensee of all Intellectual Property Rights
                in the Site and the content published on it. No part of the Site
                or any content of the Site may be reproduced, republished,
                distributed, transferred, mirrored, framed, hyperlinked,
                transmitted or otherwise used or stored in any server, system or
                equipment in any form without our prior written consent.
              </li>

              <hr />

              <h5>E. Advertisements and Links to Third Party Websites</h5>
              <li>
                Advertisements on the Site do not constitute our endorsement or
                recommendation of the advertised product, service or
                organisation and we disclaim all liability in relation to
                information or content posted on the Site by advertisers.
              </li>
              <li>
                The Site may contain links to external third party websites that
                are not owned or operated or affiliated with us. You acknowledge
                and agree that these links are provided for your convenience
                only and do not represent our endorsement or recommendation of
                the third party. You agree that we have no control over the
                content of external third party websites and we assume no
                liability for the content on these websites, including its
                truth, completeness, accuracy or reliability, or the
                consequences of accessing these websites. You are advised to
                review the terms of use and privacy policies of these websites
                and contact these third parties if you have any questions.
              </li>

              <hr />

              <h5>F. Cookies</h5>
              <li>
                We use cookies and similar technologies to provide better
                services to you, such as to (a) obtain information about your
                preferences, online movements and Internet use; (b) improve our
                Site by tracking website analytics; (c) measure the
                effectiveness of our online content, advertisements and other
                communication; and (d) enhance user experience.
              </li>
              <li>
                Your access or use of the Site with a cookie-enabled browser
                constitutes your agreement and consent to our use of cookies and
                similar technologies. You may disable cookies and similar
                technologies at any time, but this may affect the services we
                provide you.
              </li>

              <hr />

              <h5>G. Prohibited Activities</h5>
              <li>
                You shall not:
                <ol type="a">
                  <li>
                    use the Site in breach of the law or for any illegal
                    purpose;
                  </li>
                  <li>
                    post or transmit any content or material that infringes
                    third party intellectual property rights, is confidential,
                    untrue, fraudulent, stolen, obscene, pornographic,
                    defamatory, libelous, abusive, threatening, offensive or
                    otherwise objectionable in our sole opinion or that is
                    illegal under any applicable law;
                  </li>
                  <li>
                    collect any data from the Site other than in compliance with
                    the T&amp;Cs; and
                  </li>
                  <li>
                    use any software, device or other instrument to attempt to
                    interfere with another's use and enjoyment of the Site, gain
                    unauthorized access or take any action that could impair,
                    disable, corrupt, overburden or otherwise interfere with the
                    proper working of the Site, another computer network or
                    system connected to the Site, or another's computer or
                    mobile device, including through the use or upload of any
                    software or material that you know or have reason to suspect
                    contains malicious code, Trojans, viruses or other harmful
                    material or components.
                  </li>
                </ol>
                <hr />
                <h5>H. Product Availability, Pricing and Descriptions</h5>
                <li>
                  You acknowledge and agree that all orders for products are
                  subject to availability and that we may remove products from
                  our Site at our sole discretion. All products are intended for
                  domestic use only and not for commercial or industrial use
                  unless otherwise stated.
                </li>
                <li>
                  The images of products on our Site are for illustrative
                  purposes only and may vary from the actual products. We do not
                  warrant that information made available on our Site including
                  product descriptions are error-free, complete, reliable or
                  accurate.
                </li>
                <li>
                  Due to the nature of wood, products made with wood are unique
                  and may vary in characteristics such as colour, grain, marks
                  and tonality even if they are made from the same piece of
                  wood. You expressly agree that such variations are not
                  defects.
                </li>
                <li>
                  We reserve the right to amend the price of products from time
                  to time at our sole discretion and without notice to you.
                </li>
                <hr />
                <h5>I. Orders &amp; Payment</h5>
                <li>
                  You may place an order for a product by following the shopping
                  process on our Site and making payment.
                </li>
                <li>
                  The price payable by you for the product shall be the price
                  listed on the Site at the time your order is transmitted to
                  us. If we discover an error in pricing, we will notify you as
                  soon as possible and you will have the option of cancelling
                  the order or confirming the order at the correct price. We
                  will treat the order as cancelled if we are unable to contact
                  you within 48 hours. Unless otherwise stated, all prices are
                  subject to applicable taxes and delivery charges.
                </li>
                <li>
                  Your order will only be accepted by us when we send you an
                  order confirmation email. No contract in respect of the
                  purchase of a product will come into existence between you and
                  us until your order has been accepted by us.
                </li>
                <li>
                  Except for customized orders, you may cancel an order within
                  48 hours after the order has been placed, and we will issue
                  you a full refund. Please note that orders cannot be cancelled
                  once it has been arranged for delivery.
                </li>
                <li>
                  We reserve the right not to accept your order at our sole
                  discretion without any liability, including for reasons such
                  as insufficient stock. In the event your order is not
                  accepted, we will issue you a full refund.
                </li>
                <li>
                  Payment for orders may be made via PayPal, PayNow and bank
                  transfers. By placing an order, you represent and warrant that
                  you are the owner of the PayPal or bank account or are duly
                  authorized to use the said account for the purchase of the
                  product. You acknowledge and agree that payment is processed
                  by third party payment system providers and we do not process
                  or retain any payment information. By using the Site, you
                  expressly agree that we are not responsible or liable for any
                  acts, omissions or defaults of third party payment system
                  providers.
                </li>
                <hr />
                <h5>J. Delivery</h5>
                <li>
                  You will be informed of the delivery options and delivery
                  costs during checkout. Upon confirmation of your order, we
                  will inform you of the estimated delivery time and date for
                  your order via email. You agree that time is not of the
                  essence with respect to delivery and that neither we nor our
                  agents shall be liable for any delay.
                </li>
                <li>
                  Orders are delivered by our local delivery partner to the
                  address specified in your order. You expressly agree that you
                  are solely responsible for ensuring the accuracy of your order
                  and that we are not responsible if the address stated in the
                  order is incorrect.
                </li>
                <li>
                  We reserve the right to cancel your order if you fail to take
                  delivery of the product(s).
                </li>
                <li>
                  You agree that it is your responsibility to ensure that the
                  product(s) can fit into lifts, doorways, ceiling heights,
                  corridors and staircases without issue before ordering the
                  product(s) for delivery.
                </li>
                <li>
                  However, if delivery is unsuccessful as the product(s) could
                  not fit into the lifts, doorways, ceiling heights, corridors
                  or staircases of the address specified in the order, a
                  mandatory surcharge may apply at our discretion.
                </li>
                <li>
                  Delivery via staircases and tight spaces including narrow
                  corridors and low ceiling areas will be at your own risk.
                </li>
                <li>
                  You agree that knocks and bumps are unavoidable during
                  delivery and delivery is at your own risk.
                </li>
                <hr />
                <h5>K. Returns</h5>
                <li>
                  All products sold are non-refundable. We only accept exchanges
                  if the product received has a manufacturing defect and/or is
                  incorrect based on your order.
                </li>
                <li>
                  To return your product for an exchange, please email us at
                  <Link to="mailto:hello@m-furniture.co">
                    hello@m-furniture.co
                  </Link>
                  . The product must be returned to us in its original condition
                  and packaging, together with your receipt within 20 days of
                  receiving the product. Please note that delivery of the
                  product back to our warehouse will be at your cost while the
                  delivery of the replacement product will not be charged.
                </li>
                <li>
                  We reserve the right not to accept your returned product if
                  the product is returned to us outside the 20 days return
                  period or in an unacceptable condition. In this event, we may
                  deliver it back to you at your cost.
                </li>
                <hr />
                <h5>L. Risk and Title</h5>
                <li>
                  The product(s) will be at your risk from the time of
                  self-collection or delivery to the address specified in the
                  order. Ownership of the product(s) will only pass to you when
                  we receive full payment of all sums due in respect of the
                  product(s), including delivery charges of returned products
                  rejected by us.
                </li>
                <hr />
                <h5>M. Warranties and Liability</h5>
                <li>
                  You agree that your use and/or access of the Site and our
                  services is at your sole risk. The products, services and
                  information on the Site are provided on an &quot;as is&quot;
                  and &quot;as available&quot; basis. We disclaim all implied
                  and express warranties relating to our services and our
                  products, including but not limited to any implied warranties
                  or implied terms as to our products' merchantability, quality,
                  non-infringement or fitness for purpose, even if such purpose
                  or condition was made known or may be known to us.
                </li>
                <li>
                  Without limiting the generality of the foregoing, we expressly
                  disclaim any warranty, representation or guarantee as to:
                  <ol type="a">
                    <li>
                      your access of the Site, or that the functions of the Site
                      shall be error free, defect free, secure or uninterrupted;
                      and
                    </li>
                    <li>
                      the completeness, accuracy or reliability of any
                      information or content on the Site.
                    </li>
                  </ol>
                </li>
              </li>
              <li>
                Please note that improper use of products may result in injury
                to you or another person. We shall not be liable for any loss or
                damage suffered by you or anyone else arising from any:
                <ol type="a">
                  <li>
                    failure to comply with instructions or guidelines provided
                    by us relating to the use or installation of the products;
                  </li>
                  <li>failure to comply with this T&amp;Cs;</li>
                  <li>
                    use of the product in a manner not in accordance with how
                    the product would be used by a reasonable person, or in a
                    manner not authorised by us in writing;
                  </li>
                  <li>
                    modification of the product that has not been authorised by
                    us in writing;
                  </li>
                  <li>fair wear and tear of the products;</li>
                  <li>
                    use of or access to the Site, or inability to use or access
                    the Site, or any failure, error, defect, delay, omission,
                    computer virus, transmission, software or hardware problems
                    or any other action as a result (whether directly or
                    indirectly) of the use or access of this Site; and
                  </li>
                  <li>
                    use of or reliance on information or content on this Site by
                    you or any third party, including without limitation any
                    error, mistake, infringement, falsehood, defamation or other
                    material or omission that might give rise to any action or
                    claim.
                  </li>
                </ol>
              </li>
              <li>
                You expressly agree that we shall not be liable to you for any
                direct, indirect, incidental, consequential or special damage or
                for damages for loss of profit or revenue, whether arising from
                contract, tort, statute or otherwise.
              </li>
              <li>
                To the extent that the exclusion of liability under these
                T&amp;Cs is not permitted by law, our aggregate cumulative
                liability under any order shall not exceed the sum that you have
                paid to us under that order.
              </li>
              <li>
                Nothing in these T&amp;Cs affects Users' statutory rights, or
                limits or excludes our liability in respect of losses caused by
                fraud or any other liability that cannot be excluded by law.
              </li>

              <hr />
              <h5>N. Indemnities</h5>
              <li>
                You agree to indemnify and hold us and our agents, their
                employees, officers, directors and representatives harmless from
                and against any and all claims, actions, proceedings, losses,
                damages, costs and expenses (including legal expenses on a full
                indemnity basis) arising out of or in any way connected to any
                breach by you of the T&amp;Cs and your use of the Site,
                including (a) any claims of infringement of a third party's
                rights; and (b) damage to property, bodily injury or death.
              </li>

              <hr />
              <h5>O. Termination</h5>
              <li>
                We reserve the right to determine if there is a breach of the
                T&amp;Cs at our sole discretion.
              </li>
              <li>
                We may terminate access to the Site without prior notice to you
                and at our sole discretion for certain reasons, including
                without limitation (a) your breach of the T&amp;Cs; (b)
                infringement of intellectual property rights; or (c) request by
                law enforcement or other government agencies; or (d) unexpected
                operational issues.
              </li>
              <li>
                Our termination of your access to the Website is in addition to
                and without prejudice to any rights or remedies we may have
                under the T&amp;Cs, at law or in equity.
              </li>
              <hr />
              <h5>P. General</h5>
              <li>
                Illegality: If any part of the T&amp;Cs is void, illegal or
                unenforceable, it shall be modified to the extent that renders
                it valid, legal or enforceable and the other provisions of the
                T&amp;Cs shall not be affected.
              </li>
              <li>
                Remedies and waivers: No failure or delay on our part in
                exercising any right or remedy under the T&amp;Cs shall operate
                as a waiver thereof. The rights and remedies provided in the
                T&amp;Cs are cumulative and not exclusive of any other rights or
                remedies provided by law or otherwise.
              </li>
              <li>
                If either party is prevented or delayed in the performance of
                this Agreement as a result of a Force Majeure Event (&quot;the
                Affected Party&quot;) and gives written notice thereof to the
                other Party of the Force Majeure Event, the Affected Party shall
                be excused from the performance from the date of such notice for
                as long as such Force Majeure Event shall continue, provided
                that the Affected Party shall resume its obligations as soon as
                such Force Majeure Event ceases.
              </li>
              <li>
                Third parties: A person or entity who is not a party to the
                T&amp;Cs shall have no right to enforce any term of the
                T&amp;Cs.
              </li>
              <li>
                Governing law: The T&amp;Cs shall be governed by and construed
                in accordance with the laws of Singapore.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default InteriorDesignDetails
