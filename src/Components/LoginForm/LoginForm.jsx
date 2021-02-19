import React from 'react';
import classes from './LoginForm.module.css'
import form from "./LoginForm.module.css";
import {withStyles} from '@material-ui/core/styles';
import MyButton from "../Button/MyButton";
import {Form} from 'react-final-form';
import {TextField} from 'mui-rff';

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
const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
};

const LoginForm = (props) => {

    return (<div className={classes.formWrapper}>
            <div className={classes.formTitle}>Войти</div>
            {/*<form onSubmit={props.handleSubmit} className={props.classes.form} noValidate autoComplete="off">*/}
            {/*    <TextField className={props.classes.input} id="standard-basic" label="Email" value={props.email} onChange={(event) => props.handleEmailInput(event)}/>*/}
            {/*    <TextField className={props.classes.input} id="standard-basic" label="Password" value={props.password} onChange={(event) => props.handlePassInput(event)}/>*/}
            {/*    <MyButton type="submit" value={'Войти'}/>*/}
            {/*</form>*/}
            <Form
                onSubmit={props.onSubmit}
                initialValues={{firstName: '', lastName: ''}}
                validate={validate}
                render={({handleSubmit, form, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <TextField
                            className={props.classes.input}
                            label="Email"
                            name="email"
                            margin="none"
                            required={true}
                        />
                        <TextField
                            className={props.classes.input}
                            label="Password"
                            name="password"
                            margin="none"
                            type='password'
                            required={true}
                        />
                            <MyButton type="submit" value={'Войти'}/>
                        {/*<Button*/}
                        {/*    variant="contained"*/}
                        {/*    color="primary"*/}
                        {/*    type="submit"*/}
                        {/*    disabled={submitting}*/}
                        {/*>*/}
                        {/*    Submit*/}
                        {/*</Button>*/}
                    </form>
                )}
            />
            <span>Новый пользователь? <a className={classes.linkForm}
                                         onClick={() => props.loginFormToggle(true)}>Регистрация</a></span>
        </div>
    );
};

export default withStyles(styles)(LoginForm);
