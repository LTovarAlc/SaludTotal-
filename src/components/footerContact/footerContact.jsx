import "./footerContact.css"
import Inputs from "../date/forms/inputs/inputs"
import Button from "../button/button"

const FooterContact = () => {
    return(
        <form className="footerContact">
            <h6>Contactanos</h6>
            <Inputs placheholder="Nombre"/>
            <Inputs placheholder="Asunto"/>
            <textarea name="messageConctact" id="messageContact" cols="38" rows="2" placeholder="¿En qué podemos ayudar?"></textarea>
            <Button text="Enviar"/>
            
        </form>
    )
}

export default FooterContact