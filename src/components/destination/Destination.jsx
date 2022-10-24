import React from "react";
import Background from '../../assets/destination/background-destination-desktop.jpg';
import './Destination.scss'

const Destination = () => {
    return (
        <section className="destination">
            <div className="destination__background">
                <img src={Background} alt="Destination background" />
            </div>
        </section>
    )
}

export default Destination;