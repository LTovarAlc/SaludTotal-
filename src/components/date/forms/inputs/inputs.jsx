import "./input.css";
import React from "react";

const Input = ({ type, name, placheholder, darkMode }) => {
  return (
    <div className="inputContainer">
      <input
        className={`input ${darkMode ? "input-dark" : ""}`}
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
