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
            <h2 className="text-uppercase heading_line mb-60">
              Privacy Policy
            </h2>
            <p>
              We&nbsp;
              <strong>(Minthedimensions Pte. Ltd. UEN No. 201928809W)</strong>
              &nbsp;are the operator of&nbsp;
              <Link to="https://www.m-furniture.co">www.m-furniture.co</Link>
              &nbsp;(&quot;the Site&quot;). Your privacy is important to us.
              Please read this Privacy Policy carefully before providing us with
              your personal data.
            </p>
            <ol className="listing_bullet">
              <li>
                Your continued use of the Site constitutes your agreement that
                you have read this Privacy Policy and understand the purposes
                for which we collect, use and disclose your personal data, and
                your agreement and consent to us and our representatives and/or
                agents collecting, using, disclosing, and sharing amongst
                ourselves your personal data in accordance with this Privacy
                Policy.
              </li>
              <li>
                This Privacy Policy applies to personal data collected, used,
                disclosed and otherwise processed by the Site (collectively,
                “processed”).
              </li>

              <hr />

              <h5>Collection, Use and Sharing of Personal Data</h5>
              <li>
                Examples of personal data we may collect from you include your
                name, email address, mailing address, telephone number and date
                of birth.
              </li>
              <li>
                We may collect personal data from you in the following ways:
                <ol type="a">
                  <li>When you submit any form on the Site</li>
                  <li>
                    When you visit our website through a browser which has
                    cookies enabled
                  </li>
                  <li>
                    When you purchase products through our Site or conduct
                    certain transactions (such as returns or refunds)
                  </li>
                  <li>
                    When you communicate with us (such as by telephone or email)
                  </li>
                  <li>
                    When request to be included in services provided by us (such
                    as subscribing to our mailing lists)
                  </li>
                  <li>When you apply for employment with us</li>
                </ol>
              </li>
              <li>
                Your personal data will be used for various purposes including:
                <ol type="a">
                  <li>
                    Processing your purchase of products on the Site, including
                    processing your payment for purchase
                  </li>
                  <li>Verifying your identity</li>
                  <li>
                    Meeting or complying with applicable laws, rules and
                    regulations
                  </li>
                  <li>
                    Providing you with assistance (such as by answering your
                    queries or responding to your feedback)
                  </li>
                  <li>
                    Direct marketing (such as through email or text message)
                  </li>
                  <li>
                    Conducting market research, customer profiling analysis,
                    customer pattern analysis, statistical and trend analysis;
                    and
                  </li>
                  <li>Internal administrative purposes.</li>
                </ol>
              </li>
              <li>
                To provide our services to you, we may share your personal data
                (including transferring it out of Singapore) with third party
                service providers (such as third party payment agents or network
                operators), third party businesses that we work in collaboration
                with and government bodies.
              </li>
              <li>
                Your personal data will be processed in accordance with the
                Personal Data Protection Act 2012 (“PDPA”) and its subsidiary
                legislation and guidelines.
              </li>
              <li>
                Providing your personal data to us is voluntary. You can use the
                Site without disclosing your personal data, although we may not
                be able to provide you with certain services and products.
              </li>

              <hr />

              <h5>Links to Third Party Websites</h5>
              <li>
                The Site may contain links to external third party websites that
                are not owned or operated or affiliated with us. Access to these
                third party websites are at your sole risk, and any personal
                data you submit to these websites are not subject to this
                Privacy Policy.
              </li>
              <li>
                We encourage you to review the privacy policies of these third
                party websites before providing any personal data to them.
              </li>

              <hr />

              <h5>Accessing and Correcting Your Personal Data</h5>
              <li>
                You may contact our Data Protection Officer at&nbsp;
                <Link to="mailto:hello@m-furniture.co">
                  hello@m-furniture.co
                </Link>
                &nbsp;or write to us at&nbsp;
                <strong>
                  62 Ubi Road 1 #07-20 Oxley Bizhub 2 Singapore 408734
                </strong>
                &nbsp; if you have any questions on how your personal data is
                used by us or wish to review or correct your personal data.
              </li>

              <hr />

              <h5>Opting Out or Withdrawing Your Consent</h5>
              <li>
                You may withdraw your consent for the collection, use and/or
                disclosure of your personal data by contacting us at &nbsp;
                <Link to="mailto:hello@m-furniture.co">
                  hello@m-furniture.co
                </Link>
                &nbsp;or writing to us at&nbsp;
                <strong>
                  62 Ubi Road 1 #07-20 Oxley Bizhub 2 Singapore 408734
                </strong>
                . Please allow 14 days for us to process your request for
                withdrawal, and we will thereafter not collect, use and/or
                disclose your personal data as requested by you.
              </li>
              <li>
                Your personal data will be retained the period it is necessary
                to fulfil the purpose for which it was collected, for business
                or legal purposes or for compliance with applicable laws. It
                will thereafter be securely destroyed or anonymized.
              </li>
              <li>
                You understand and agree that we may not be able to provide
                certain services to you if you withdraw your consent, and that
                we may be entitled to collect, use or disclose your personal
                data notwithstanding your withdrawal as authorised under the
                PDPA.
              </li>

              <hr />

              <h5>Security</h5>
              <li>
                We will put in place reasonable security arrangements to protect
                your personal data and process it securely, and guard against
                unauthorized use, access or leakage of your personal data.
              </li>
              <li>
                Nonetheless, you understand and agree that we shall not be
                liable for unauthorized use of your personal data by third
                parties that are wholly beyond our control.
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
