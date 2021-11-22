import { React, useState } from "react";
import { Button } from "react-bootstrap";
import * as Icons from "react-feather";
import AddCharacterModal from "./AddCharacterModal";

const AddCharacter = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button size="lg" className="btn-add" onClick={() => setShowModal(true)}>
        <Icons.Plus />
      </Button>

      <AddCharacterModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};

export default AddCharacter;
