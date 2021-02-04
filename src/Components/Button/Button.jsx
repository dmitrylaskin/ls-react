import React from 'react';
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button className={classes.myButton}>
            {props.name}
        </button>
    );
};

export default Button;
