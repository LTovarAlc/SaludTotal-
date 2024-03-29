import "./instructions.css";

const Instructions = ({darkMode}) => {
  return (
    <div className="cardInstructions">
      <div className={`card__instructions-info ${darkMode ? "card__instructions-info-dark" : ""}`}>
        <div className="info__instructions">
          <h3>Instrucciones para agendar una cita:</h3>
          <ol className={`instructions ${darkMode ? "instructions-dark" : ""}`}>
            <li>
              <span className="list__item">Verificar disponibilidad:</span> Confirma que el día que deseas está disponible en el calendario.
            </li>
            <li>
              <span className="list__item">Completar formulario de datos:</span> Proporciona tus datos personales en el formulario a la derecha.
            </li>
            <li>
              <span className="list__item">Especificar detalles de la cita:</span> Define el tipo de cita y otros detalles relevantes.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
