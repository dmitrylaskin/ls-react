import React from 'react';
import Button from "../Button/Button";
import classes from '../Button/Button.module.css'

const LoginForm = (props) => {
    return (<>
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" name="email" size="28" />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" size="28" />
            <Button className={classes.myButton} type="submit" name="Log in"/>
        </form>
            <hr/>
            <button onClick={() => props.loginFormToggle(true)}>Create new account</button>
        </>
    );
};

export default LoginForm;
