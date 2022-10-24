import React, { useEffect, useState } from "react";
import Background from '../../assets/crew/background-crew-desktop.jpg';
import { getCrew } from "../../services/getApi";
import Header from "../header/Header";
import './Crew.scss';
import CrewInformation from "./CrewInformation";

const Crew = () => {

    const [crewInfo, setCrewInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCrewInfo()
    }, []);

    const getCrewInfo = async () => {
        const [info] = await Promise.all([getCrew()])
        setCrewInfo(info)
        setLoading(false)
    }
    return (
        <>
            <section className="crew">
                <div className="crew__background">
                    <img src={Background} alt="Crew background" />
                </div>
                <Header />
                <section className="crew__main">
                    {
                        !loading ?
                            (<CrewInformation crewInfo={crewInfo} />) :
                            (<div>Cragando</div>)
                    }
                </section>
            </section>

        </>
    )
}

export default Crew;