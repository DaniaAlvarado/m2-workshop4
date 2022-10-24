import React, { useEffect, useState } from "react";
import Background from '../../assets/destination/background-destination-desktop.jpg';
import { getDestinations } from "../../services/getApi";
import DesLink from "../destinationLink/DesLink";
import Header from "../header/Header";
import './Destination.scss';
import moon from '../../assets/destination/image-moon.webp';

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
                <aside className="destination__main__left">
                    <span>PICK YOUR DESTINATION</span>
                    <img src={moon} alt="destination" />
                </aside>
                <aside className="destination__main__right">
                    <DesLink />
                    <span className="title1">
                        MOON
                    {/* {
                        !loading ? destinationInfo.map((element, index) => (
                            <div key={index}>{element.name}</div>
                        )) : (<div>Cragando</div>)
                    } */}
                    </span>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium in ratione, laboriosam provident eum ea vitae repellendus. Ratione error nulla nesciunt neque excepturi, rerum facere, minima, odio sit sint sunt.</p>
                    <nav>
                        <div>
                            <span className="title">AVG. DISTANCE</span>
                            <span></span>
                        </div>
                        <div>
                            <span className="title">EST. TRAVEL TIME</span>
                            <span></span>
                        </div>
                    </nav>
                </aside>
            </article>
        </section>
    )
}

export default Destination;