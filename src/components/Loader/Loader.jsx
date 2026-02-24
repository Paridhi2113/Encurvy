// Loader.js
import React from "react";
import "./Loader.css";
import EL from '../../assets/EL.gif';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={EL} alt="Escurvy Loader" className="logo-loader" />
    </div>
  );
};


export default Loader;