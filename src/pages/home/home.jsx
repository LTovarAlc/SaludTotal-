import Banner from "../../components/banner/banner"
import Header from "../../components/header/header"
import "./home.css"
import React from "react"

const Home = () => {
    return(
        <section className="home">
            <Header/>
            <Banner/>
        </section>
    )
        

}

export default Home