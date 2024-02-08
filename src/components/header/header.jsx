import DarkMode from "./darkmodeBtn/darkModeBtn"
import "./header.css"

const  Header = () => {
    return(
        <header>
            <div className="brand">
                <img src="../../img/saludTotal.png" alt="Salud Total" className="saludtotal__logo"/>
                <div className="brand__name">
                    <h1 className="salud">Salud</h1>
                    <h1 className="total">Total</h1>
                </div>
            </div>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="item__list">Servicios</li>
                    <li className="item__list">Médicos</li>
                    <li className="item__list">Ubicación</li>
                    <li className="item__list">Agendar cita</li>
                    <DarkMode/>
                </ul>
            </nav>
        </header>
    )
}

export default Header