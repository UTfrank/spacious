import { React, useState } from "react";
import { Button } from "react-bootstrap";
import * as Icons from "react-feather";
import AddPlanetModal from "./AddPlanetModal";

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
