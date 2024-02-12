import "./boxDoctors.css"
import React, {useState, useEffect} from "react"
import axios from "axios"
import CardDoctor from "./cardDoctor/cardDoctor"

const BoxDoctors = () => {
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
        <div className="boxDoctors">
            <div className="box__title">Especialistas</div>
            <div className="box__content">
                {doctors.map(doctors => (
                    <CardDoctor key={doctors.id} doctors={doctors}/>
                ))}
            </div>
        </div>
    )
}

export default BoxDoctors