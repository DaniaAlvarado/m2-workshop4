import React from "react";
import Background from '../../assets/destination/background-destination-desktop.jpg';
import Header from "../header/Header";
import './Destination.scss'

const Destination = () => {
    return (
        <section className="destination">
            <div className="destination__background">
                <img src={Background} alt="Destination background" />
            </div>
            <Header />
        </section>
    )
}

export default Destination;