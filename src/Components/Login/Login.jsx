import React from 'react';

class Login extends React.Component {

    state = {
        email: 'w',
        password: 'e'
    }
    handleSubmit = (event) => {
        event.preventDefault()
    }
    emailHandler = (event) => {
        this.setState({email: event.target.value})
    }
    passwordHandler = (event) => {
        this.setState({password: event.target.value})
    }

    render() {



        return (

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" size="28" onChange={this.emailHandler} value={this.state.email} />

                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" size="28" onChange={this.passwordHandler} value={this.state.password}/>

                    <input type="submit" value="Log in"/>
                </form>

        );
    }
}

export default Login;
