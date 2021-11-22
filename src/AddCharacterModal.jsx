import React from "react";
import { Modal } from "react-bootstrap";
import FormsCharacter from "./FormsCharacter";

const AddCharacterModal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h1 className="primary-heading">Character</h1>
        <FormsCharacter />
      </Modal.Body>
    </Modal>
  );
};

export default AddCharacterModal;
