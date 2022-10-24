import React from "react";
import Background from '../../assets/home/background-home-desktop.jpg'
import Header from "../header/Header";
import './Home.scss'
const Home = () => {
    return (
        <section className="home">
            <div className="home__background">
                <img src={Background} alt="Home background" />
            </div>
            <Header />
        </section>
    )
}

export default Home;