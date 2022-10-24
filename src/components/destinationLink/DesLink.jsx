import React from "react";
import { Link } from "react-router-dom";

const DesLink = () => {
    return (
            <ul className="destination__main__menu">
                <li className="destination__main__menu__item">
                    <Link to="/"
                        style={{ textDecoration: 'none' }}>
                        <span>MOON</span>
                    </Link>
                </li>
                <li className="destination__menu__item">
                    <Link to="/"
                        style={{ textDecoration: 'none' }}>
                        <span>MARS</span>
                    </Link>
                </li>
                <li className="destination__menu__item">
                    <Link to="/"
                        style={{ textDecoration: 'none' }}>
                        <span>EUROPA</span>
                    </Link>
                </li>
                <li className="destination__menu__item">
                    <Link to="/"
                        style={{ textDecoration: 'none' }}>
                        <span>TITAN</span>
                    </Link>
                </li>
            </ul>
    )
}

export default DesLink;