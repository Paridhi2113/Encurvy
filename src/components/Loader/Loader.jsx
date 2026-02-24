// Loader.js
import React from "react";
import "./Loader.css";
import EncurvyL from '../../assets/EncurvyL.gif';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={EncurvyL} alt="Escurvy Loader" className="logo-loader" />
    </div>
  );
};


export default Loader;