// Loader.js
import React from "react";
import "./Loader.css";
import EncurvyLoder from '../../assets/EncurvyLoder.gif';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={EncurvyLoder} alt="Escurvy Loader" className="logo-loader" />
    </div>
  );
};


export default Loader;