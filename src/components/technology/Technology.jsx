import React from "react";
import Background from '../../assets/technology/background-technology-desktop.jpg';
import Header from "../header/Header";
import './Technology.scss';

const Technology = () => {
    return (
        <section className="technology">
            <div className="technology__background">
                <img src={Background} alt="Technology background" />
            </div>
            <Header />
        </section>
    )
}

export default Technology;