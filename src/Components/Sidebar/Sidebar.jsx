import React from 'react';
import './Sdebar.css'
import logoPng from '../../assets/img/Group29logo.png'

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={logoPng} alt="logo"/>
        </div>
    );
};

export default Sidebar;
