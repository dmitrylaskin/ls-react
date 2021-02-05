import React from 'react';
//import Button from "../Button/Button";
//import button from '../Button/Button.module.css'
import classes from './LoginForm.module.css'
import form from "./LoginForm.module.css";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px'
    }
}

const LoginForm = (props) => {


    return (<div className={classes.formWrapper}>
            <div className={classes.formTitle}>Войти</div>
            <form onSubmit={props.handleSubmit} className={props.classes.form} noValidate autoComplete="off">
                <TextField type='email' id="standard-basic" label="From" value={props.email} onChange={(event) => props.handleEmailInput(event)}/>
                <TextField type='text' id="standard-basic" label="To" value={props.password} onChange={(event) => props.handlePassInput(event)}/>
                <Button type="submit" variant="contained">Вызвать такси</Button>
            </form>
        {/*<form className={classes.loginForm} onSubmit={props.handleSubmit}>*/}
        {/*    <label htmlFor="email">Email:</label>*/}
        {/*    <input className={classes.inputForm} id="email" type="text" name="email"/>*/}
        {/*    <label htmlFor="password">Password:</label>*/}
        {/*    <input className={classes.inputForm} id="password" type="password" name="password"/>*/}
        {/*    <Button className={button.myButton} type="submit" name="Войти"/>*/}
        {/*</form>*/}
            <span>Новый пользователь? <a className={classes.linkForm} onClick={() => props.loginFormToggle(true)}>Регистрация</a></span>
        </div>
    );
};

export default withStyles(styles)(LoginForm);
