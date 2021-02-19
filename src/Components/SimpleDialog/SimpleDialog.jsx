import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import classes from './SimpleDialog.module.css'
import {NavLink} from "react-router-dom";

const SimpleDialog = (props) => {

    return (
        <Dialog aria-labelledby="simple-dialog-title" open={props.open} >
            <div className={classes.dialog}>
                <div className={classes.dialogTitle}>{props.title}</div>
                <div className={classes.dialogSubtitle}>{props.subtitle}</div>
                <NavLink className={classes.myLink} onClick={() => props.setDialog(false)} to={props.link}>{props.linkValue}</NavLink>
            </div>
        </Dialog>
    );
};

export default SimpleDialog;
