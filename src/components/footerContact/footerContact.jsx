import "./footerContact.css"
import Inputs from "../date/forms/inputs/inputs"
import Button from "../button/button"

const FooterContact = ({darkMode}) => {
    return(
        <form className="footerContact" id="contact">
            <h6>Contactanos</h6>
            <Inputs placheholder="Nombre"/>
            <Inputs placheholder="Asunto"/>
            <textarea name="messageConctact" id="messageContact" cols="31" rows="2" placeholder="¿En qué podemos ayudar?" className={`message ${darkMode ? "message-dark" : ""}`}></textarea>
            <Button text="Enviar"/>
            
        </form>
    )
}

export default FooterContact