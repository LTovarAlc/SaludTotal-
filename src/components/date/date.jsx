import Instructions from "../instructions/instructions"
import Calendar from "./calendar/calendar"
import "./date.css"
import DateForm from "./forms/DateForm"
import PersonalForm from "./forms/PersonalForm"
import Button from "../button/button"

const Date = () => {
    return(
        <section className="date">
            <h6>Agende una cita con nosotros</h6>
            <div className="appointment__container">
                <div className="instructions__calendar-container">
                    <Instructions/>
                    <Calendar/>
                </div>
                <div className="form_container">
                    {/* <PersonalForm/> */}
                    <DateForm/>
                    <Button text="Continuar"/>
                </div>
            </div>
        </section>
    )
}

export default Date