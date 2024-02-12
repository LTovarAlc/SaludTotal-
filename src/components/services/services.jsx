import React, { useState, useEffect } from "react";
import axios from "axios";
import CardServices from "./cardServices/cardServices";
import "./services.css";
import BoxDoctors from "./boxDoctors/boxDoctors";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://saludtotalservices.vercel.app/service");
        if (!response.data || response.data.length === 0) {
          throw new Error("No se encontraron servicios.");
        }
        setServices(response.data);
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="services">
      <h3 className="section__title-services">Conozca nuestros servicios</h3>
      <div className="services__content">
      <div className="cardServices__container">
        {services.map(service => (
          <CardServices key={service.id} service={service} />
        ))}
      </div>
      <div className="boxDoctors__container">
        <BoxDoctors/>
      </div>
      </div>
    </section>
  );
};

export default Services;
