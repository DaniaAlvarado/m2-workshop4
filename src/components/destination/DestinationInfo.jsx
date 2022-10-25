import React, { useEffect, useState }from "react";
import mars from '../../assets/destination/image-mars.webp';
import moon from '../../assets/destination/image-moon.webp';
import europa from'../../assets/destination/image-europa.webp';
import titan from '../../assets/destination/image-titan.webp';

const DestinationInfo = (destinationInfo) => {
    const [destinationPlanet, setDestinationPlanet] = useState({});
    const [planetImage, setPlanetImage] = useState(moon);

    useEffect(() => {
        setDestinationPlanet(destinationInfo.destinationInfo[0])
        setPlanetImage(getImage(destinationInfo.destinationInfo[0]))
    }, []);

    const getImage = (planet) => {
        if (planet.name === 'Moon') {
            return moon
        } else if (planet.name === 'Mars') {
            return mars
        } else if (planet.name === 'Europa') {
            return europa
        } else if (planet.name === 'Titan') {
            return titan
        }
    }
    const handleChangePlanet = (newPlanet) => {
        console.log(newPlanet);
        setDestinationPlanet(newPlanet)
        setPlanetImage(getImage(newPlanet))
    }

    return (
        <>
        <aside className="destination__main__left">
                    <span>PICK YOUR DESTINATION</span>
                    <img src={planetImage} alt="destination" />
                </aside>
                <aside className="destination__main__right">
                    {
                        <ul className="destination__main__menu">
                        {destinationInfo.destinationInfo.map((planet, index) =>
                            <li className="destination__main__menu__item" key={index}>
                                 <span  onClick={() => handleChangePlanet(planet) }>{planet.name}</span>
                            </li>
                        )}
                        </ul>
                    }
                    <span className="title1">{destinationPlanet.name}</span>
                    <p>{destinationPlanet.description}</p>
                    <nav>
                        <div>
                            <span className="title">AVG. DISTANCE</span>
                            <span className="travel">{destinationPlanet.distance}</span>
                        </div>
                        <div>
                            <span className="title">EST. TRAVEL TIME</span>
                            <span className="travel">{destinationPlanet.travel}</span>
                        </div>
                    </nav>
                </aside>
        </>
    )
}

export default DestinationInfo;