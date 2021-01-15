import React from 'react';
import LoginForm from "../LoginForm/LoginForm";
import SignInForm from "../SignInForm/SignInForm";

import './MainContent.css'

class MainContent extends React.Component {

    state = {
        loginFormActive: true
    }

    changeForm = (event) => {
        event.preventDefault()
        this.setState({loginFormActive: !this.state.loginFormActive})
    }


    render() {
        console.log(this.state)

        return (
            <div className="main-content">
                {this.state.loginFormActive ? <LoginForm changeForm = {this.changeForm}/> : <SignInForm changeForm = {this.changeForm}/>}

            </div>

        );
    }
}

export default MainContent;
