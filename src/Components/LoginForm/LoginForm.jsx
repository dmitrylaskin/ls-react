import React from 'react';
import classes from './LoginForm.module.css'
import form from "./LoginForm.module.css";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import MyButton from "../Button/MyButton";

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },
    input: {
        marginBottom: '40px'
    }
}

const LoginForm = (props) => {

    return (<div className={classes.formWrapper}>
            <div className={classes.formTitle}>Войти</div>
            <form onSubmit={props.handleSubmit} className={props.classes.form} noValidate autoComplete="off">
                <TextField className={props.classes.input} id="standard-basic" label="Email" value={props.email} onChange={(event) => props.handleEmailInput(event)}/>
                <TextField className={props.classes.input} id="standard-basic" label="Password" value={props.password} onChange={(event) => props.handlePassInput(event)}/>
                <MyButton type="submit" value={'Войти'}/>

            </form>

            <span>Новый пользователь? <a className={classes.linkForm} onClick={() => props.loginFormToggle(true)}>Регистрация</a></span>
        </div>
    );
};

export default withStyles(styles)(LoginForm);
