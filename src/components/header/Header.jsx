import React, { useState } from "react";
import './Header.scss'
import Logo from '../../assets/shared/logo.svg'
import MobileMenu from '../../assets/shared/icon-hamburger.svg'
import CloseMenu from '../../assets/shared/icon-close.svg'
import { Link } from "react-router-dom";
const Header = () => {

    const [showMenu, setShowMenu] = useState(false);


    return (
        <div className="header">
            <nav>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div>
                    <ul className="header__menu">
                        <li className="header__menu__item">
                            <Link to="/"
                                style={{ textDecoration: 'none' }}>
                                <span>HOME</span>
                            </Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to="/destination"
                                style={{ textDecoration: 'none' }}>
                                <span>DESTINATION</span>
                            </Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to="/crew"
                                style={{ textDecoration: 'none' }}>
                                <span>CREW</span>
                            </Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to="/technology"
                                style={{ textDecoration: 'none' }}>
                                <span>TECHNOLOGY</span>
                            </Link>
                        </li>
                        <li className="header__menu__mobile">
                            <img className="" src={MobileMenu} alt="Mobile menú" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;