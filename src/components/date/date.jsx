import Instructions from "../instructions/instructions";
import Calendar from "./calendar/calendar";
import "./date.css";
import DateForm from "./forms/DateForm";
import PersonalForm from "./forms/PersonalForm";
import Button from "../button/button";
import React, { useState } from "react";
import ButtonBack from "../button/buttonBack";

const Date = () => {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1)
    }

    return (
        <section className="date">
            <h6>Agende una cita con nosotros</h6>
            <div className="appointment__container">
                <div className="instructions__calendar-container">
                    <Instructions />
                    <Calendar />
                </div>
                <div className="form_container">
                    {step === 1 && <PersonalForm />}
                    {step === 2 && <DateForm />}
                    <div className="btns__container">
                    {step === 2 && <ButtonBack text="Regresar" onClick={handlePreviousStep} />}
                    <Button text="Continuar" onClick={handleNextStep} /> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Date;
