import React from "react";
import { Row, Col } from "react-bootstrap";

const SideBarCard = ({ char }) => {
  return (
    <Col xs={12} key={char.friends ? char.friends : char.name}>
      <Col className="side-bar-card-container">
        <Row>
          <Col xs={3} className="side-bar-card-img-container">
            <img src={char.img} alt="" />
          </Col>
          <Col xs={9} className="side-bar-card-content">
            <p className="side-bar-card-content-name">{char.name}</p>
            {char.friends ? (
              <p className="side-bar-card-content-text">
                {char.friends} friends
              </p>
            ) : (
              <p className="side-bar-card-content-text">{char.desc}</p>
            )}
          </Col>
        </Row>
      </Col>
    </Col>
  );
};

export default SideBarCard;
