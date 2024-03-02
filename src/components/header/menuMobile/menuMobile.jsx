import "./menuMobile.css";

const MenuMobile = () => {
  return (
    <aside className="menuMobile">
      <ol className="menuMobile__list">
        <li className="menuitem__list"><a href="#services">Servicios</a></li>
        <li className="menuitem__list"><a href="#services">Médicos</a></li>
        <li className="menuitem__list"><a href="#location">Ubicación</a></li>
        <li className="menuitem__list"><a href="#date">Agendar cita</a></li>
      </ol>
    </aside>
  );
};

export default MenuMobile