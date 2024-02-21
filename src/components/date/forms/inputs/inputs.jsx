import "./input.css";
import React from "react";

const Input = ({ type, name, placheholder }) => {
  return (
    <div className="inputContainer">
      <input
        className="input"
        placeholder={placheholder}
        required=""
        type={type}
        name={name}
      />
      <span className="input-border"></span>
    </div>
  );
};

export default Input;
