import React from 'react';
import Logo from '../../assets/img/header_logo.png'
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import classes from './Header.module.css'

const Header = (props) => {
                return <header className={classes.header}>
                                <img src={Logo} alt=""/>
                                <nav className={classes.navbar}>
                                    <ul className={classes.navbarList}>
                                        <li className={classes.navbarItem}><NavLink className={classes.navbarLink} activeStyle={{color:'#FDBF5A'}} to={'/map'}>Карта</NavLink></li>
                                        <li className={classes.navbarItem}><NavLink className={classes.navbarLink} activeStyle={{color:'#FDBF5A'}} to={'/profile'}>Профиль</NavLink></li>
                                        <li className={classes.navbarItem}><NavLink className={classes.navbarLink} to={'/home'} onClick={() => props.getLogOut()}>Выход</NavLink></li>
                                    </ul>

                                </nav>
                        </header>
};

Header.propTypes = {
    navigateTo: PropTypes.func
}

export default Header;
