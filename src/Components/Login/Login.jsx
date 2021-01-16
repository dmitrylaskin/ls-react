import React from 'react';

class Login extends React.Component {

    state = {
        email: 'w',
        password: 'e'
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.navigateTo('map')
    }

    inputHandler = (field) =>
        (event) => this.setState({[field]: event.target.value})

    render() {



        return (

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="text" name="email" size="28" onChange={this.inputHandler('email')} value={this.state.email} />

                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" size="28" onChange={this.inputHandler('password')} value={this.state.password}/>

                    <input type="submit" value="Log in"/>
                </form>

        );
    }
}

export default Login;
