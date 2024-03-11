import "./boxDoctors.css"
import React, {useState, useEffect} from "react"
import axios from "axios"
import CardDoctor from "./cardDoctor/cardDoctor"

const BoxDoctors = ({darkMode}) => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("https://saludtotalservices.vercel.app/doctors");
                if (!response.data || response.data.length === 0){
                    throw new Error("No se encontraror datos de doctores.");
                }
                setDoctors(response.data);
            } catch (error){
                console.log("Error al obtener datos de doctor(es).");
            }
        };
        fetchData()
    }, []);

    return(
        <aside className="boxDoctors">
            <div className="box__title">Especialistas</div>
            <div className={`box__content ${darkMode ? "box__content-dark": ""}`}>
                {doctors.map(doctors => (
                    <CardDoctor key={doctors.id} doctors={doctors} darkMode={darkMode}/>
                ))}
            </div>
        </aside>
    )
}

export default BoxDoctors