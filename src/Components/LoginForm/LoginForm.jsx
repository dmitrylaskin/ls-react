import React from 'react';
import './LoginForm.css'

class LoginForm extends React.Component {

       state = {
            userName: '',
            password: ''
        }


    handleName = (event) => {
        this.setState({userName: event.target.value})
        console.log(event.target.value)
    }
    handlePass = (event) => {
        this.setState({password: event.target.value})
        console.log(event.target.value)
    }


    render() {
        return (
            <>
                <form className="login-form">
                    <h2 className="login-form__title">
                        Войти
                    </h2>
                    <input className="login-form__input" type="text" placeholder="User name *" name="name" value={this.state.userName} onChange={this.handleName}/>
                    <input className="login-form__input" type="password" placeholder="Password *" name="password" value={this.state.password} onChange={this.handlePass}/>
                    <a className="login-form__btn" href="#">Войти</a>
                    <div className="sign-up">Новый пользователь? <a href="" className="sign-up__link" onClick={this.props.changeForm}>Зарегистрируйтесь</a>
                    </div>
                </form>

            </>
        );
    }
}

export default LoginForm;
