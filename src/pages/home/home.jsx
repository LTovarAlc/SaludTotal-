import Banner from "../../components/banner/banner"
import Header from "../../components/header/header"
import Services from "../../components/services/services"
import Date from "../../components/date/date"
import React from "react"
import "./home.css"
import Location from "../../components/location/location"
import Footer from "../../components/footer/footer"

const Home = () => {
    return(
        <section className="home">
            <Header/>
            <Banner/>
            <Services/>
            <Location/>
            <Date/>
            <Footer/>
        </section>
    )
        

}

export default Home