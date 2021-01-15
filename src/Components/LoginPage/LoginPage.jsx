import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import '../../App.css'

const LoginPage = () => {
    return (
        <div className='wrapper'>
            <Sidebar/>
            <MainContent/>
        </div>
    );
};

export default LoginPage;
