import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from '../../assets/img/header_logo.png'

const Header = (props) => {
    return (

            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">

                    </IconButton>


                    <img src={Logo} alt=""/>

                    <Button onClick={() => props.navigateTo('login')} color="inherit">Login</Button>
                    <Button onClick={() => props.navigateTo('profile')} color="inherit">Profile</Button>
                    <Button onClick={() => props.navigateTo('about')} color="inherit">About</Button>
                </Toolbar>
            </AppBar>

    );
};

export default Header;
