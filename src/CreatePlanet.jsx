import { React, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import loading from "./assets/loader/planet-loader.svg";
import AddPlanetModal from "./AddPlanetModal";

const CreatePlanet = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="loader-container">
      <Col xs={12} md={8} className="text-center">
        <img src={loading} alt="" />
        <p>Space doesn’t have to be so empty.</p>
        <Row className="justify-content-center">
          <Button className="btn-submit" onClick={() => setShowModal(true)}>
            create planet
          </Button>
        </Row>
      </Col>
      <AddPlanetModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
};

export default CreatePlanet;
