import React from "react";
import loading from "./assets/loader/planet-loader.svg";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-img-container">
        <img src={loading} alt="" className="loader-img" />
      </div>
    </div>
  );
};

export default Loader;
