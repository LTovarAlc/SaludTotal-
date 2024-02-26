import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Services from "../../components/services/services";
import Date from "../../components/date/date";
import Location from "../../components/location/location";

const Home = ({darkMode, toggleDarkMode}) => {

    return (
        <section className={`home ${darkMode ? "dark": ""}`}>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />
            <Banner />
            <Services />
            <Location />
            <Date />
            <Footer darkMode={darkMode}/>
        </section>
    );
};

export default Home;
