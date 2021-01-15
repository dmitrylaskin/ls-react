import React from 'react';
import './SignInForm.css'

class LoginForm extends React.Component {

    state = {
        userName: '',
        password: '',
        email: ''
    }


    handleName = (event) => {
        this.setState({userName: event.target.value})
        console.log(event.target.value)
    }
    handlePass = (event) => {
        this.setState({password: event.target.value})
        console.log(event.target.value)
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value})
        console.log(event.target.value)
    }


    render() {
        return (
            <>
                <form className="login-form">
                    <h2 className="login-form__title">
                        Регистрация
                    </h2>
                    <input className="login-form__input" type="email" placeholder="Email *" name="email" value={this.state.email} onChange={this.handleEmail}/>
                    <input className="login-form__input" type="text" placeholder="User name *" name="name" value={this.state.userName} onChange={this.handleName}/>
                    <input className="login-form__input" type="password" placeholder="Password *" name="password" value={this.state.password} onChange={this.handlePass}/>
                    <a className="login-form__btn" href="#">Зарегестрироваться</a>
                    <div className="sign-up">Уже зарегестрированны? <a href="" className="sign-up__link" onClick={this.props.changeForm}>Войти</a>
                    </div>
                </form>

            </>
        );
    }
}

export default LoginForm;
