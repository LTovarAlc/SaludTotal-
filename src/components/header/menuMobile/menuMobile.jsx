import "./menuMobile.css";

const MenuMobile = ({darkMode}) => {
  return (
    <nav className={`menuMobile ${darkMode ? "menuMobile-dark": ""}`}>
      <ol className={`menuMobile__list ${darkMode ? "menuMobile__list-dark": ""}`}>
        <li className="menuitem__list"><a href="#services">Servicios</a></li>
        <li className="menuitem__list"><a href="#services">Médicos</a></li>
        <li className="menuitem__list"><a href="#location">Ubicación</a></li>
        <li className="menuitem__list"><a href="#date">Agendar cita</a></li>
      </ol>
    </nav>
  );
};

export default MenuMobile