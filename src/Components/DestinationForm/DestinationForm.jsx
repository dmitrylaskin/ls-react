import React from 'react';
import classes from './DestinationForm.module.css'
import form from '../LoginForm/LoginForm.module.css'
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const styles = {
    form: {
        position: 'absolute',
        top: '50px',
        left: '50px',
        width: '400px',
        height: '300px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 40px',
        justifyContent: 'space-between'
    }
}

const DestinationForm = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form className={props.classes.form} noValidate autoComplete="off">
            <TextField id="standard-basic" label="From"/>
            <TextField id="standard-basic" label="To" />
            <Button variant="contained">Вызвать такси</Button>
        </form>
    )
            {/*<label htmlFor="from">From: </label>*/}
            {/*<input className={form.inputForm} id='from' name='from' type="text"/>*/}
            {/*<label htmlFor="to">To: </label>*/}
            {/*<input className={form.inputForm} id='to' name='to' type="text"/>*/}
            {/*<Button type="submit" name={'Вызвать такси'}/>*/}



};

export default withStyles(styles)(DestinationForm);
