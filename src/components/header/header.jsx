import { useState } from "react"
import DarkMode from "./darkmodeBtn/darkModeBtn"
import HamburguerMenu from "./hamburguerMenu/hamburguerMenu"

import "./header.css"
import MenuMobile from "./menuMobile/menuMobile"

const  Header = ({darkMode, toggleDarkMode}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuMobileOpen = (isOpen) => {
        setIsMenuOpen(isOpen);
    }

    return(
        <header className={darkMode ? "header-dark" : ""}>
            <div className="brand">
                <img src="../../img/saludTotal.png" alt="Salud Total" className="saludtotal__logo"/>
                <div className="brand__name">
                    <h1 className="salud">Salud</h1>
                    <h1 className="total">Total</h1>
                </div>
            </div>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="item__list"><a href="#services">Servicios</a></li>
                    <li className="item__list"><a href="#services">Médicos</a></li>
                    <li className="item__list"><a href="#location">Ubicación</a></li>
                    <li className="item__list"><a href="#date">Agendar cita</a></li>
                    <DarkMode toggleDarkMode={toggleDarkMode}/>
                </ul>
            </nav>
            <nav className="navBar__mobile">
                <DarkMode toggleDarkMode={toggleDarkMode}/>
                <HamburguerMenu handleMenuMobileOpen={handleMenuMobileOpen}/>
                {isMenuOpen && <MenuMobile/>}
                
            </nav>
        </header>
    )
}

export default Header