import { React, useState } from "react";
import { Col, Offcanvas } from "react-bootstrap";
import * as Icons from "react-feather";
import AddPlanetModal from "./AddPlanetModal";
import SideBarCard from "./SideBarCard";

const Planet = ({ planet }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Col xs={12} md={4} lg={3} key={planet.id}>
        <div className="card" onClick={() => setShow(true)}>
          <div className="card-header">
            <div className="card-img-container">
              <img src={planet.imageUrl} alt="" className="card-img" />
            </div>
          </div>
          <div className="card-body">
            <div className="card-title">{planet.name}</div>
            <div className="card-description">Pop: {planet.population}</div>
          </div>
        </div>
      </Col>
      {show && (
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement={"end"}
          backdrop={false}
          scroll={true}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="sidebar-title">
              {planet.name}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p className="sidebar-description">{planet.description}</p>
            <div className="sidebar-pop">
              <p>Population</p>
              <div>{planet.population}</div>
            </div>
            <div className="sidebar-sub-heading">
              <h5>Characters</h5>
              <button
                size="sm"
                className="btn-grey btn-grey-sm"
                onClick={() => setShowModal(true)}
              >
                <Icons.Plus />
              </button>
            </div>
            {planet.characters.map((char) => (
              <SideBarCard char={char} />
            ))}
          </Offcanvas.Body>
        </Offcanvas>
      )}
      <AddPlanetModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};

export default Planet;
