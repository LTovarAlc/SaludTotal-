import "./cardSendMessage.css";

const CardSendMessage = ({darkMode}) => {
  return (
    <div className="cardMessage">
      <div className={`circle ${darkMode ? "circle-dark": ""}`}></div>
      <div className={`circle${darkMode ? "circle-dark": ""}`}></div>
      <div className="card-innerMessage">
        <h6>Su mensaje fue enviado</h6>
        <div className="success">&#x2713;</div>
        <span>Usted recibirá un correo con su respuesta en un momento</span>
      </div>
    </div>
  );
};


export default CardSendMessage