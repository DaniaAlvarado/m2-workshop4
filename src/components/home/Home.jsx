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
            <section className="home__main">
                <aside className="home__main__left">
                    <div className="home__main__left__tittle1">
                        <span>SO, YOU WANT TO TRAVEL TO</span>
                    </div>
                    <div className="home__main__left__tittle2">
                        <span>SPACE</span>
                    </div>
                    <div className="home__main__left__body">
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                </aside>
                <aside className="home__main__rigth">
                    <div className="home__main__right__explore">
                        <span>
                            EXPLORE
                        </span>
                    </div>
                </aside>
            </section>
        </section>
    )
}

export default Home;