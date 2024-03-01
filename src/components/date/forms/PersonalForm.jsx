import ReactDatePicker from "react-datepicker";
import Button from "../../button/button";
import "./PersonalForm.css";
import Input from "./inputs/inputs";

const PersonalForm = ({darkMode}) => {
  return (
    <form action="" className={`personal-form ${darkMode ? "personal-form-dark" : ""}`}>
      <h6>Datos del interesado</h6>
      <Input type="text" name="name" placeholder="Nombre completo" darkMode={darkMode} />
      <div className="date-gender__container">
        <div className="date-picker__container">
          <input type="number" name="age" id="age" placeholder="Edad" className="date__picker" />
        </div>
        <select id="genero" name="genero" className={`gender ${darkMode ? "gender-dark": ""}`}>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
        </select>
      </div>
      <Input type="email" name="email" placeholder="Correo electrónico" darkMode={darkMode}/>
      <Input type="tel" name="phone" placeholder="Teléfono" darkMode={darkMode} />
    </form>
  );
};

export default PersonalForm;
