import "./banner.css";
import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <section className="presentation__container">
        <div className="presentation">
          <h2 className="presentation__title">SaludTotal</h2>
          <h3 className="slogan">
            Cuidamos de ti <br />
            Cuidamos tu salud
          </h3>
          <a href="#services"><button className="banner-button">Servicios</button></a>
        </div>
      </section>
    </section>
  );
};

export default Banner;
