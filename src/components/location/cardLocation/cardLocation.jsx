import "./cardLocation.css";

const CardLocation = () => {
  return (
    <div class="cardLocation">
      <div class="cardLocation__content">
        <div className="cardLocation__title">
          <img
            src="../../../../img/saludTotal.png"
            className="saludTotal__icon-cardLocation"
          />
          <span>SaludTotal</span>
        </div>
        <div className="cardLocation__items">
          <img src="../../../../img/maps.png" className="cardLocation__icons" />
          <a href="https://www.google.com/maps/place/SALUD+TOTAL+CONSULTORIOS/@29.056651,-110.965415,3z/data=!4m6!3m5!1s0x145da1fa13e865ef:0x2c0d23e4fa90eb21!8m2!3d29.0566505!4d-110.9654153!16s%2Fg%2F11b7cnsgv7?hl=es&entry=ttu" target="_blank">
            Ver en google maps
          </a>
        </div>
        <div className="cardLocation__items">
          <img
            src="../../../../img/phone.png"
            className="cardLocation__icons"
          />
          <a href="#contact">Enviar un mensaje</a>
        </div>
        <div className="cardLocation__items">
          <img src="../../../../img/mail.png" className="cardLocation__icons" />
          <a href="#contact">Enviar un correo</a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CardLocation;
