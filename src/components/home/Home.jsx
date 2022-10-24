import React from "react";
import Background from '../../assets/home/background-home-desktop.jpg'
import './Home.scss'
const Home = () => {
    return (
        <section className="home">
            <div className="home__background">
                <img src={Background} alt="Home background" />
            </div>

        </section>
    )
}

export default Home;