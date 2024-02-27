import CardLocation from "./cardLocation/cardLocation";
import "./location.css";

const Location = ({darkMode}) => { 
    return(
        <section className={`location ${darkMode ? "location-dark" : ""}`}>
            <h5 className="section__title">Encuéntrenos aquí</h5>
            <div className="location__container">
            <CardLocation darkMode={darkMode}/>
            <div className="map__container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28571039.893815797!2d-144.71740722656247!3d29.05616970274342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145da1fa13e865ef%3A0x2c0d23e4fa90eb21!2sSALUD%20TOTAL%20CONSULTORIOS!5e0!3m2!1ses!2smx!4v1707839139410!5m2!1ses!2smx"
                    width="100%"
                    height="90%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="async"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            </div>
        </section>
    );
}

export default Location;
