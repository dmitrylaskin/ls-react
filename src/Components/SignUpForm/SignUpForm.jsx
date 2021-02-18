import React from 'react';
import {loginFormToggle} from "../Redux/auth/auth-reducer";
import {authAPI} from "../../Api/api";
import classes from '../LoginForm/LoginForm.module.css'
import MyButton from "../Button/MyButton";
import form from "../LoginForm/LoginForm.module.css";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';


const styles = {
    input: {
        marginBottom: '30px'
    }
}

class SignUpForm extends React.Component {

    state = {
        email: '',
        name: '',
        surname: '',
        password: ''
    }


    inputHandler = (field) =>
        (event) => this.setState({[field]: event.target.value})



    handleSubmit = (event) => {
        event.preventDefault()
        // let {email, name, surname, password} = event.target
        this.props.registration(this.state.email, this.state.password, this.state.name, this.state.surname)
    }


    render() {
        return (
            <div className={classes.formWrapper}>
                <div className={classes.formTitle}>Регистрация</div>
            <form className={classes.loginForm} onSubmit={this.handleSubmit}>

                <TextField className={this.props.classes.input} id="standard-basic" label="Email" value={this.state.email} onChange={this.inputHandler('email')}/>
                <TextField className={this.props.classes.input} id="standard-basic" label="Name" value={this.state.name} onChange={this.inputHandler('name')}/>
                <TextField className={this.props.classes.input} id="standard-basic" label="Surname" value={this.state.surname} onChange={this.inputHandler('surname')}/>
                <TextField className={this.props.classes.input} id="standard-basic" label="Password" value={this.state.password} onChange={this.inputHandler('password')}/>
                {/*<label htmlFor="email">Email:</label>*/}
                {/*<input className={classes.inputForm} id="email" type="email" name="email" size="28" value={this.state.email} onChange={this.inputHandler('email')}/>*/}

                {/*<label htmlFor="name">Name:</label>*/}
                {/*<input className={classes.inputForm} id="name" type="text" name="name" size="28" value={this.state.name} onChange={this.inputHandler('name')}/>*/}

                {/*<label htmlFor="name">Surname:</label>*/}
                {/*<input className={classes.inputForm} id="surname" type="text" name="surname" size="28" value={this.state.surname} onChange={this.inputHandler('surname')}/>*/}

                {/*<label htmlFor="password">Password:</label>*/}
                {/*<input className={classes.inputForm} id="password" type="password" name="password" size="28" value={this.state.password} onChange={this.inputHandler('password')}/>*/}

                <MyButton type="submit" value='Зарегестрироваться'/>
            </form>

                <hr/>
                <span>Уже зарегестрированы? </span><a className={classes.linkForm} onClick={() => this.props.loginFormToggle(false)}>Войти</a>
            </div>
        );
    }
}

export default withStyles(styles)(SignUpForm);
