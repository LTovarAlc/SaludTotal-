import Banner from "../../components/banner/banner"
import Header from "../../components/header/header"
import Services from "../../components/services/services"
import React from "react"
import "./home.css"

const Home = () => {
    return(
        <section className="home">
            <Header/>
            <Banner/>
            <Services/>
        </section>
    )
        

}

export default Home