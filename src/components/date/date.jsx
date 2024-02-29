import Instructions from "../instructions/instructions";
import Calendar from "./calendar/calendar";
import "./date.css";
import DateForm from "./forms/DateForm";
import PersonalForm from "./forms/PersonalForm";
import Button from "../button/button";
import React, { useState } from "react";
import ButtonBack from "../button/buttonBack";
import CardConfirmation from "./cardConfirmation/cardConfirmation";

const Date = ({darkMode}) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <section className={`date ${darkMode ? "date-dark" : ""}`} id="date">
      <h6>Agende una cita con nosotros</h6>
      <div className="appointment__container">
        <div className="instructions__calendar-container">
          <Instructions darkMode={darkMode}/>
          <Calendar darkMode={darkMode}/>
        </div>
        {step !== 3 && (
          <div className={`form_container ${darkMode ? "form_container-dark" : ""}`}>
            {step === 1 && <PersonalForm darkMode={darkMode} />}
            {step === 2 && <DateForm  darkMode={darkMode}/>}
            <div className="btns__container">
              {step === 2 && (
                <ButtonBack text="Regresar" onClick={handlePreviousStep} />
              )}
              <Button text="Continuar" onClick={handleNextStep} />
            </div>
          </div>
        )}
        {step === 3 && <CardConfirmation />}
      </div>
    </section>
  );
};

export default Date;
