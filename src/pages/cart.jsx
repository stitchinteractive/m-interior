// step 1: import
import React, { useLayoutEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Layout } from "../components/layout"
import { Link } from "gatsby"
import BackIcon from "../icons/back"
import Accordion from "react-bootstrap/Accordion"

// step 2: define component
const Cart = () => {
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

  // set default values for textfields
  const [oldFirstName, newFirstName] = useState("James")
  const [oldLastName, newLastName] = useState("Smith")
  const [oldEmail, newEmail] = useState("jamessmith@gmail.com")
  const [oldPhone, newPhone] = useState("+65 9123 4567")
  const [oldAddress1, newAddress1] = useState("Block 123 Ang Mo Kio Street 1")
  const [oldAddress2, newAddress2] = useState("#01-23")
  const [oldPostal, newPostal] = useState("322123")

  return (
    <Layout>
      <div className="container">
        <div className="row row_padding">
          <div className="col-lg">
            <h2 className="text-uppercase mb-4">Check Out</h2>
            <div className="d-flex btn_back mb-80">
              <BackIcon />
              <Link
                to="/"
                className="ms-2 font_yellow text-uppercase font_semibold no_underline"
              >
                Continue Shopping
              </Link>
            </div>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className="text-uppercase">01. Contact information</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div class="col-12 pb-5">
                      Already have an account? <Link to="/login">Login</Link>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-6 pb-5">
                      <label htmlFor="input_first_name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_first_name"
                        value={oldFirstName}
                        onChange={(event) => newFirstName(event.target.value)}
                      />
                    </div>
                    <div class="col-12 col-md-6 pb-5">
                      <label htmlFor="input_first_name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_last_name"
                        value={oldLastName}
                        onChange={(event) => newLastName(event.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label htmlFor="input_email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input_email"
                        value={oldEmail}
                        onChange={(event) => newEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label htmlFor="input_phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_phone"
                        value={oldPhone}
                        onChange={(event) => newPhone(event.target.value)}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <div className="text-uppercase">02. Shipping Address</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label htmlFor="input_address_1" className="form-label">
                        Address Line 1
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input_address_1"
                        value={oldAddress1}
                        onChange={(event) => newAddress1(event.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label htmlFor="input_address_2" className="form-label">
                        Address Line 2 (Apt / Flat No.)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_address_2"
                        value={oldAddress2}
                        onChange={(event) => newAddress2(event.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label htmlFor="input_postal" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_postal"
                        value={oldPostal}
                        onChange={(event) => newPostal(event.target.value)}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <div className="text-uppercase">03. Billing Address</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Same as shipping address
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label htmlFor="input_address_1" className="form-label">
                        Address Line 1
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input_address_1"
                        value={oldAddress1}
                        onChange={(event) => newAddress1(event.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label htmlFor="input_address_2" className="form-label">
                        Address Line 2 (Apt / Flat No.)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_address_2"
                        value={oldAddress2}
                        onChange={(event) => newAddress2(event.target.value)}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 pb-5">
                      <label htmlFor="input_postal" className="form-label">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input_postal"
                        value={oldPostal}
                        onChange={(event) => newPostal(event.target.value)}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <div className="text-uppercase">04. Payment</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Visa
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Mastercard
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Paypal
                    </label>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="py-5 d-flex justify-content-md-end">
              <Link to="/">
                <button type="submit" className="btn btn-light">
                  Proceed to pay
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">123</div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default Cart
