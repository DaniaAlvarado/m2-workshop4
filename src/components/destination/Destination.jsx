import React from "react";
import Background from '../../assets/destination/background-destination-desktop.jpg';
import Header from "../header/Header";
import './Destination.scss'

const Destination = () => {
    return (
        <section className="destination">
            <Header />
            <div className="destination__background">
                <img src={Background} alt="Destination background" />
            </div>
        </section>
    )
}

export default Destination;