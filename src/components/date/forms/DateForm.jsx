import Button from "../../button/button";
import "./DateForm.css";
import CheckBox from "./inputs/checkBox/checkbox";

const DateForm = () => {
  return (
    <form action="" className="date-form">
        <h6>Datos de la cita</h6>
        <select id="date" name="date" className="date__selector">
            <option value="">Consulta médica general</option>
            <option value="">Pediatría</option>
            <option value="">Ginecología y obstetricia</option>
            <option value="">Cardiología</option>
            <option value="">Dermatología</option>
            <option value="">Vacunas y programas de inmunización</option>
            <option value="">Nutrición y dietética</option>
            <option value="">Salud mental y psicoterapia</option>
        </select>
        <div className="date-pickers">
            <h6>Fecha y hora</h6>
            <input type="date" name="date-pick" id="date-pick" className="date-pick"/>
            <input type="time" name="time-pick" id="time-pick" className="time-pick" />
        </div>
        <textarea name="date-details" id="date-details" cols="40" rows="3" placeholder="Comente algunos detalles de su cita, sintomas o especificaiones que se deban tomar en cuenta."></textarea>
        <CheckBox/>
    </form>
  );
};

export default DateForm;
