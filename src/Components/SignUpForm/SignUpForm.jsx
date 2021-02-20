import React from 'react';
import classes from '../LoginForm/LoginForm.module.css'
import s from './SignUoForm.module.css'
import MyButton from "../Button/MyButton";
import form from "../LoginForm/LoginForm.module.css";
import {withStyles} from '@material-ui/core/styles';
import {Form} from "react-final-form";
import {TextField} from "mui-rff";
import Dialog from "@material-ui/core/Dialog";


const styles = {
    input: {
        marginBottom: '30px',
        width: '100%'
    }
}

class SignUpForm extends React.Component {

    state = {showDialog: true}


    validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.surname) {
            errors.surname = 'Required';
        }
        return errors;
    };


    onSubmit = (values) => {
        console.log(values)
        this.props.registration(values.email, values.password, values.name, values.surname)
    }
    onClose = () => {
        this.props.getSignInRequest(false)
        this.props.loginFormToggle(false)
    }


    render() {
        if (this.props.isSignedIn) {
            return <Dialog aria-labelledby="simple-dialog-title" open={true}>
                <div className={s.dialog}>
                    <div className={s.dialogTitle}>Вы успешно зарегестрированы</div>
                    <MyButton type={'button'} onClick={this.onClose} value={'Закрыть'}/>
                </div>
            </Dialog>
        }

        return (
            <div className={classes.formWrapper}>
                <div className={classes.formTitle}>Регистрация</div>
                <Form
                    onSubmit={this.onSubmit}
                    initialValues={{email: '', password: '', name: '', surname: ''}}
                    validate={this.validate}
                    render={({handleSubmit, form, submitting, pristine, values}) => (
                        <form onSubmit={handleSubmit} noValidate className={styles.col}>
                            <TextField
                                className={this.props.classes.input}
                                label="Почта"
                                name="email"
                                margin="none"
                                required={true}
                            />
                            <TextField
                                className={this.props.classes.input}
                                label="Пароль"
                                name="password"
                                type="password"
                                margin="none"
                                required={true}
                            />
                            <TextField
                                className={this.props.classes.input}
                                label="Имя"
                                name="name"
                                margin="none"
                                required={true}
                            />
                            <TextField
                                className={this.props.classes.input}
                                label="Фамилия"
                                name="surname"
                                margin="none"
                                required={true}
                            />

                            <MyButton type="submit" value={'Сохранить'}/>
                        </form>
                    )}
                />

                <hr/>
                <span>Уже зарегестрированы? </span><a className={classes.linkForm}
                                                      onClick={() => this.props.loginFormToggle(false)}>Войти</a>
            </div>
        );
    }
}

export default withStyles(styles)(SignUpForm);
