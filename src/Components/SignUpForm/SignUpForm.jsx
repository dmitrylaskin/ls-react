import React from 'react';
import {loginFormToggle} from "../Redux/auth-reducer";
import {authAPI} from "../../Api/api";
import classes from '../LoginForm/LoginForm.module.css'
import MyButton from "../Button/MyButton";
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
            <div className={classes.formWrapper}>
                <div className={classes.formTitle}>Регистрация</div>
            <form className={classes.loginForm} onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input className={classes.inputForm} id="email" type="email" name="email" size="28" value={this.state.email} onChange={this.inputHandler('email')}/>

                <label htmlFor="name">Name:</label>
                <input className={classes.inputForm} id="name" type="text" name="name" size="28" value={this.state.name} onChange={this.inputHandler('name')}/>

                <label htmlFor="password">Password:</label>
                <input className={classes.inputForm} id="password" type="password" name="password" size="28" value={this.state.password} onChange={this.inputHandler('password')}/>

                <MyButton type="submit" value='Зарегестрироваться'/>
            </form>
                <hr/>
                <span>Уже зарегестрированы? </span><a className={classes.linkForm} onClick={() => this.props.loginFormToggle(false)}>Войти</a>
            </div>
        );
    }
}

export default SignUpForm;
