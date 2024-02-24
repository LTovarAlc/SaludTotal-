import "./buttonBack.css";
import React from "react";

const ButtonBack = ({text, onClick}) => {
  return (
    <button className="buttonFormBack" onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default ButtonBack;
