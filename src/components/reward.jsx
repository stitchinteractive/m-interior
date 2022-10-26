// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

// step 2: define
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Redeem Voucher
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button>Redeem</Button>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
}

export function Reward(props) {
  const [modalShow, setModalShow] = React.useState(false)

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
          <a href="javascript:void(0);" onClick={() => setModalShow(true)}>
            Redeem &gt;
          </a>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}
