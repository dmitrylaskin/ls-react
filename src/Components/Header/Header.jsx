import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from '../../assets/img/header_logo.png'
import {MyContext} from "../../App";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";


const Header = (props) => {

                return <AppBar position="static" color="default">
                            <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu">

                                </IconButton>


                                <img src={Logo} alt=""/>

                                <NavLink activeStyle={{color:'red'}} to={'/home'}><button>home</button></NavLink>
                                <NavLink activeStyle={{color:'red'}} to={'/profile'}><button>profile</button></NavLink>
                                <NavLink activeStyle={{color:'red'}} to={'/map'}><button>map</button></NavLink>

                                {/*<Button onClick={() => props.navigateTo('home')} color="inherit">Home</Button>*/}
                                {/*<Button onClick={() => props.navigateTo('profile')} color="inherit">Profile</Button>*/}
                                {/*<Button onClick={() => props.navigateTo('map')} color="inherit">Map</Button>*/}
                            </Toolbar>
                        </AppBar>

};

Header.propTypes = {
    navigateTo: PropTypes.func
}

export default Header;
