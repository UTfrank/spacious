import React from "react";
import { Col } from "react-bootstrap";

const Planet = ({ planet }) => {
  return (
    <>
      <Col xs={12} md={4} lg={3} key={planet.id}>
        <div className="card">
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
    </>
  );
};

export default Planet;
