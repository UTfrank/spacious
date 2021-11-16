import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as Icons from "react-feather";

const AddPlanetModal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h1 className="primary-heading">Planet</h1>
      </Modal.Body>
    </Modal>
  );
};

const AddPlanet = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button size="lg" className="btn-add" onClick={() => setShowModal(true)}>
        <Icons.Plus />
      </Button>

      <AddPlanetModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};

export default AddPlanet;
