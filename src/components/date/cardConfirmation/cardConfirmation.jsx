import "./cardConfirmation.css";

const CardConfirmation = () => {
  return (
    <div className="card">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="card-inner">
        <h6>Su solicitud ah sido enviada</h6>
        <div className="success">&#x2713;</div>
        <span>Su cita esta siendo procesada, un correo de confirmación sera enviado en unos momentos.</span>
      </div>
    </div>
  );
};


export default CardConfirmation