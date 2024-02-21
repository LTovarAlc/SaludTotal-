import "./PersonalForm.css";
import Input from "./inputs/inputs";

const PersonalForm = () => {
  return (
    <form action="" className="personal-form">
      <h6>Datos del interesado</h6>
      <Input type="text" name="name" placheholder="Nombre completo" />
      <div className="date-gender__container">
        <div className="date-picker__container">
          <input
            type="date"
            id="bornDate"
            name="bornDate"
            className="date__picker"
          />
        </div>
        <select id="genero" name="genero" className="gender">
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
        </select>
      </div>
      <Input type="email" name="email" placheholder="Correo electrónico" />
      <Input type="tel" name="phone" placheholder="Teléfono" />
    </form>
  );
};

export default PersonalForm;
