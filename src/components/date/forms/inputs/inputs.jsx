import "./input.css";
import React from "react";

const Input = ({ type, name, placeholder, darkMode, onChange }) => {
  return (
    <div className="inputContainer">
      <input
        className={`input ${darkMode ? "input-dark" : ""}`}
        placeholder={placeholder}
        required=""
        type={type}
        name={name}
        onChange={onChange}
      />
      <span className="input-border"></span>
    </div>
  );
};

export default Input;
