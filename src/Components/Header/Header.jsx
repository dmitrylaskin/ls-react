import React from 'react';
import './Header.css'
import headerLogo from '../../assets/img/header_logo.png'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={headerLogo} alt="header-logo"/>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__list-item">
                        <NavLink className="navbar__link" to="/map" activeClassName='activeLink'>Карта</NavLink>
                    </li>
                    <li className="navbar__list-item">
                        <NavLink className="navbar__link" to="/profile" activeClassName='activeLink'>Профиль</NavLink>
                    </li>
                    <li className="navbar__list-item">
                        <NavLink className="navbar__link" to="/login">Выйти</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;
