// step 1: import
import React, { useState } from "react"
// import { Link } from "gatsby"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

// step 2: define
export function Reward(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleClick = async () => {
    console.log("handle clicked")
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        customer_email: props.email,
        redemption_option_id: props.id,
      }),
    }

    fetch(
      "https://loyalty.yotpo.com/api/v2/redemptions?guid=jx9X-MCEhx-re9u7YIbChg&api_key=KYoD7NmQ6FaibkwxyAcHGgtt",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((response) => window.location.reload(false))
      .catch((err) => console.error(err))
  }

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
          {props.discount}
          <br />
          {props.points} Points
        </div>

        <div className="text-uppercase">
          <a href="javascript:void(0);" onClick={handleShow}>
            Redeem &gt;
          </a>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Redemption</Modal.Title>
        </Modal.Header>
        {props.customer_points >= props.points ? (
          <Modal.Body>
            You are about to redeem {props.points} points for {props.discount}.
            An email with the redemption code will be sent to you after you
            confirm your redemption. Press Redeem button now to continue.
          </Modal.Body>
        ) : (
          <Modal.Body>
            Sorry. You do not have enough points to do this redemption.
          </Modal.Body>
        )}

        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          {props.customer_points >= props.points ? (
            <Button onClick={handleClick}>Redeem</Button>
          ) : (
            <div></div>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  )
}
