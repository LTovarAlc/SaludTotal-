import React, { useState } from 'react';
import "./footerContact.css";
import Inputs from "../date/forms/inputs/inputs";
import Button from "../button/button";
import CardSendMessage from './cardSendMessage/cardSendMessage';

const FooterContact = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        asunto: '',
        mensaje: ''
    });
    const [error, setError] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitMessage = (e) => {
        e.preventDefault();
        if (formData.nombre.trim() === '' || formData.asunto.trim() === '' || formData.mensaje.trim() === '') {
            setError('Todos los campos deben ser llenados');
        } else {
            setError('');
            setFormSubmitted(true);
        }
    };

    return (
        <div className='formContact__container'>
            {!formSubmitted && (
                <form className="footerContact" id="contact" onSubmit={handleSubmitMessage}>
                    <h6>Contactanos</h6>
                    <Inputs name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} darkMode={darkMode} />
                    <Inputs name="asunto" placeholder="Asunto" value={formData.asunto} onChange={handleChange} darkMode={darkMode} />
                    <textarea name="mensaje" id="messageContact" rows="2" placeholder="¿En qué podemos ayudar?" value={formData.mensaje} onChange={handleChange} className={`message ${darkMode ? "message-dark" : ""}`}></textarea>
                    {error && <p className="error">{error}</p>}
                    <Button text="Enviar"/>
                </form>
            )}
            {formSubmitted && <CardSendMessage/>}
        </div>
    );
};

export default FooterContact;
