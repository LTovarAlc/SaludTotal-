import "./cardDoctor.css"
import React from "react"

const CardDoctor = ({doctors, darkMode}) => {
    return(
        <div className={`cardDoctor ${darkMode ? "cardDoctor-dark": ""}`}>
            <img src="../../../../../img/doctor.png" alt="Doctor" className="doctor__img"/>
            <div className="doctor__info">
                <span className="doctor__name">{doctors.name}</span>
                <span className="doctor__speciality">{doctors.specialty}</span>
                <span className="doctor__experience">{doctors.experience}</span>
            </div>
        </div>
    )
}

export default CardDoctor