import { React, useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import SideBarCard from "./SideBarCard";

const Character = ({ character }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Col xs={12} md={4} lg={3} key={character.id}>
        <div className="card card-char" onClick={() => setShow(true)}>
          <div className="card-header">
            <div className="card-img-container char">
              <img src={character.imgUrl} alt="" className="card-img" />
            </div>
          </div>
          <div className="card-body">
            <div className="card-title">{character.name}</div>
            <div className="card-description">{character.friends} friends</div>
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
              {character.name}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p className="sidebar-description">{character.description}</p>
            <div className="sidebar-pop">
              <Row>
                <Col xs={6}>
                  <p>Planet</p>
                  <div>{character.planet}</div>
                </Col>
                <Col xs={6}>
                  <p>Friends</p>
                  <div>{character.friends}</div>
                </Col>
              </Row>
            </div>
            <div className="sidebar-sub-heading">
              <h5>Characters</h5>
            </div>
            {character.char.map((char) => (
              <SideBarCard char={char} />
            ))}
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default Character;
