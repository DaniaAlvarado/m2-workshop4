import React, { useEffect, useState } from "react";
import Background from '../../assets/destination/background-destination-desktop.jpg';
import { getDestinations } from "../../services/getApi";
import Header from "../header/Header";
import './Destination.scss';
import moon from '../../assets/destination/image-moon.webp';
import DestinationInfo from "./DestinationInfo";

const Destination = () => {

    const [destinationInfo, setDestinationInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        getDestInfo ();
    }, []);

    const getDestInfo =  async () =>{
        const [destination] =  await Promise.all([getDestinations()])
        setDestinationInfo(destination)
        setLoading(false)
    }
    
    return (
        <section className="destination">
            <div className="destination__background">
                <img src={Background} alt="Destination background" />
            </div>
            <Header />
            <article className="destination__main">
                {
                        !loading ? (<DestinationInfo destinationInfo={destinationInfo} />)
                         : (<div>Cragando</div>)

                }
            </article>
        </section>
    )
}

export default Destination;