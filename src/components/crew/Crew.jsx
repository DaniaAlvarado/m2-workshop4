import React from "react";
import Background from '../../assets/crew/background-crew-desktop.jpg';
import './Crew.scss';

const Crew = () => {
    return(
        <section className="crew">
            <div className="crew__background">
                <img src={Background} alt="Crew background" />
            </div>
        </section>
    )
}

export default Crew;