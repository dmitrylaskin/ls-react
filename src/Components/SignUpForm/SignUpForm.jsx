import React from 'react';
import {loginFormToggle} from "../Redux/auth-reducer";
import {authAPI} from "../../Api/api";
const axios = require('axios');


class SignUpForm extends React.Component {

    state = {
        email: '',
        name: '',
        password: ''
    }

    inputHandler = (field) =>
        (event) => this.setState({[field]: event.target.value})



    handleSubmit = async (event) => {
        event.preventDefault()
        let {email, name, password, surname} = event.target
        let response = await authAPI.getSignUp(email, password, name, surname)
        console.log(response)
    }

    render() {


        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" name="email" size="28" value={this.state.email} onChange={this.inputHandler('email')}/>

                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" size="28" value={this.state.name} onChange={this.inputHandler('name')}/>

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" size="28" value={this.state.password} onChange={this.inputHandler('password')}/>

                <input type="submit" value="Sign up"/>
            </form>
                <hr/>
                <button onClick={() => this.props.loginFormToggle(false)}>Sign In</button>
            </>
        );
    }
}

export default SignUpForm;
