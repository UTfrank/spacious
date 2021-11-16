import React from "react";
import { Col } from "react-bootstrap";

const Character = ({ character }) => {
  return (
    <>
      <Col xs={12} md={4} lg={3} key={character.id}>
        <div className="card card-char">
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
    </>
  );
};

export default Character;
