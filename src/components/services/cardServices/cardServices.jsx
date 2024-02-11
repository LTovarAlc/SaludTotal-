import React from "react";
import "./cardServices.css";

const CardServices = ({ service }) => {
  return (
    <div className="card">
      <div className="content">
        <p className="logo">SaludTotal</p>
        <div className="h6">{service.name}</div>
        <div className="hover_content">
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
