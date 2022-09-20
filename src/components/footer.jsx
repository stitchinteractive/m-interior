import * as React from "react"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import WhatsappIcon from "../icons/wa"
import FacebookIcon from "../icons/fb"
import InstagramIcon from "../icons/ig"
import VisaIcon from "../icons/visa"
import MasterIcon from "../icons/master"
import PaypalIcon from "../icons/paypal"
import * as footerModule from "./footer.module.css"
import { gql, useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please check that your email is in the correct format.")
      .required("Please enter your email address."),
  })
  .required()

const CREATE_CUSTOMER = gql`
  # create a customer
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        firstName
        lastName
        email
        phone
        acceptsMarketing
      }
      customerUserErrors {
        field
        message
        code
      }
    }
  }
`

export function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [message, setMessage] = React.useState(null)

  const onSubmit = (data) => {
    debugger
    data.acceptsMarketing = true
    data.password = "tempPass1"
    console.log(data)
    customerCreate({
      variables: { input: data },
      onCompleted: (result) => {
        debugger
        console.log(result)
        if (result.customerCreate.customerUserErrors.length > 0) {
          var err = ""
          result.customerCreate.customerUserErrors.forEach((el) => {
            err = err + el.message + ". "
          })
          setMessage(err)
        } else {
          reset()
          setMessage("Thank you for subscribing!")
          clearErrors()
        }
      },
    })
  }

  const [customerCreate] = useMutation(CREATE_CUSTOMER)

  return (
    <footer>
      <div className={footerModule.whatsapp}>
        <a href="https://wa.me/+6598642364" target="_blank" rel="noreferrer">
          <WhatsappIcon />
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4 offset-4 col-xl-3 offset-xl-0">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <div className="col-md-6 col-xl-3">
            <h5 className="text-uppercase mb-3 d-none d-md-block">M.INT</h5>
            <ul className="text-uppercase">
              <li>
                <Link to="/design-service">Complimentary design service</Link>
              </li>
              {/*
              <li>
                <Link to="/">Min+modules configurator</Link>
              </li>
              */}
              <li>
                <Link to="/media">Media</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-xl-3">
            <h5 className="text-uppercase mb-3">Customer Care</h5>
            <ul className="text-uppercase">
              <li>
                <Link to="/faqs" activeStyle={{ fontWeight: 700 }}>
                  Faqs
                </Link>
              </li>
              <li>
                <Link to="/shipping" activeStyle={{ fontWeight: 700 }}>
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/exchange-returns" activeStyle={{ fontWeight: 700 }}>
                  Exchange &amp; Returns
                </Link>
              </li>
              <li>
                <Link to="/contact-us" activeStyle={{ fontWeight: 700 }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-12 col-xl-3">
            <div className="row">
              <div className="col-md-3 col-xl-6">
                <h5 className="text-uppercase mb-3">We Accept</h5>
                <ul className={footerModule.icons}>
                  <li>
                    <Link to="/">
                      <VisaIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <MasterIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <PaypalIcon />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-xl-6">
                <h5 className="text-uppercase mb-3">Socials</h5>
                <ul className={footerModule.icons}>
                  <li>
                    <a
                      href="https://www.facebook.com/m.intfurnitureSG"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/m.intsg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-8 col-md-6 col-xl-12 offset-2 offset-md-0">
                <h5 className="text-uppercase mb-3">Subscribe</h5>
                <div className="font_sm mb-5">
                  <form
                    className="row g-3"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="input-group textfield_footer">
                      <input
                        type="text"
                        className={`form-control ${footerModule.subscribe}`}
                        placeholder="Enter your email"
                        aria-label="Enter your email"
                        aria-describedby="basic-addon2"
                        {...register("email", {
                          onChange: (e) => {
                            setMessage("")
                          },
                        })}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline"
                          type="button"
                          onClick={handleSubmit(onSubmit)}
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                    <div className="font_xs font_yellow line_height_dense">
                      {errors.email && <span>{errors.email.message}</span>}
                      {message && <label>{message}</label>}
                    </div>
                    <div className="font_xs">
                      Subscribe to our newsletter and enjoy 10% off!
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={footerModule.terms}>
            <div className="font_sm">
              <Link to="/terms">Terms of use</Link>
              <span className={footerModule.spacer}>&bull;</span>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
