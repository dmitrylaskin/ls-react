import React from 'react';
import Logo from '../../assets/img/header_logo.png'
import {MyContext} from "../../App";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import classes from './Header.module.css'






const Header = (props) => {

                return <header className={classes.header}>
                                <img src={Logo} alt=""/>
                                <nav className={classes.navbar}>
                                    <ul className={classes.navbarList}>
                                        <li className={classes.navbarItem}><NavLink className={classes.navbarLink} activeStyle={{color:'#FDBF5A'}} to={'/map'}>Map</NavLink></li>
                                        <li className={classes.navbarItem}><NavLink className={classes.navbarLink} activeStyle={{color:'#FDBF5A'}} to={'/profile'}>Profile</NavLink></li>
                                        <li className={classes.navbarItem}><NavLink className={classes.navbarLink} to={'/home'} onClick={() => props.getLogOut()}>Sign out</NavLink></li>
                                        {/*<NavLink onClick={signOutHandler} to={'/home'}><MyButton value={'Sign out'} className={classes.myButton}/></NavLink>*/}
                                    </ul>

                                </nav>
                        </header>

};

Header.propTypes = {
    navigateTo: PropTypes.func
}

export default Header;
