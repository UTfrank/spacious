import React from "react";
import { Modal } from "react-bootstrap";
import FormsPlanet from "./FormsPlanet";

const AddPlanetModal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h1 className="primary-heading">Planet</h1>
        <FormsPlanet />
      </Modal.Body>
    </Modal>
  );
};

export default AddPlanetModal;
