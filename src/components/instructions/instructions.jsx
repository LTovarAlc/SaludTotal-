import "./instructions.css";

const Instructions = () => {
  return (
    <div className="cardInstructions">
      <div className="card__instructions-info">
        <div className="info__instructions">
          <h3>Instrucciones para agendar una cita:</h3>
          <ol className="instructions">
            <li>
              <span className="list__item">Verificar disponibilidad:</span> Confirma que el día que deseas está disponible en el calendario.
            </li>
            <li>
              <span className="list__item">Completar formulario de datos:</span> Proporciona tus datos personales en el formulario a la derecha.
            </li>
            <li>
              <span className="list__item">Especificar detalles de la cita:</span> Define el tipo de cita y otros detalles relevantes.
            </li>
            <li>
              <span className="list__item">Esperar confirmación:</span> Recibirás una respuesta a través de correo electrónico, WhatsApp o llamada.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
