import "./hamburguerMenu.css";
import React, {useState} from "react";

const HamburguerMenu = ({handleMenuMobileOpen, darkMode}) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
        setIsChecked(!isChecked);
        handleMenuMobileOpen(!isChecked)
    }

  return (
    <label className="hamburger">
      <input type="checkbox" checked={isChecked} onChange={handleChange}/>
      <svg viewBox="0 0 32 32">
        <path
          className={`line line-top-bottom ${darkMode ? "line-dark" : ""}`}
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path className={`line ${darkMode ? "line-dark": ""}`} d="M7 16 27 16"></path>
      </svg>
    </label>
  );
};

export default HamburguerMenu;
