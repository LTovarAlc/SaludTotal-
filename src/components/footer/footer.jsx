import "./footer.css"

const Footer = () => {
    return(
        <footer>
        <nav className="menu-footer">
            <ul className="footer-list">
                <li className="menu-footer__items"><a href="#">Servicios</a></li>
                <li className="menu-footer__items"><a href="#">Ubicación</a></li>
                <li className="menu-footer__items"><a href="#">Citas</a></li>
                <li className="menu-footer__items"><a href="#">Soporte</a></li>
                <li className="menu-footer__items"><a href="#">Atención al cliente</a></li>
                <li className="menu-footer__items"><a href="#">Sobre nosotros</a></li>
            </ul>
        </nav>
        <div className="footer__center">
            <div className="brand">
                <img src="../../img/saludTotal.png" alt="Salud Total" className="footer-logo"/>
                <span className="footer-logo__name">Salud Total</span>
            </div>
            <div className="colaborators">
                <img src="../../img/bayer-logo.png" alt=""  className="brands-logos"/>
                <img src="../../img/glaxo-logo.png" alt=""  className="brands-logos"/>
                <img src="../../img/johnson.png" alt=""  className="brands-logos"/>
                <img src="../../img/merck-logo.png" alt=""  className="brands-logos"/>
                <img src="../../img/novartis-logo.png" alt=""  className="brands-logos"/>
                <img src="../../img/Pfizer-logo.png" alt=""  className="brands-logos"/>
                <img src="../../img/roche-logo.png" alt=""  className="brands-logos"/>
                <img src="../../img/sanofi-logo.png" alt=""  className="brands-logos"/>
            </div>
        </div>
        <div className="contact"></div>
        </footer>
    )
}   

export default Footer