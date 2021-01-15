import React from 'react';

class SignUpForm extends React.Component {

    state = {
        email: '',
        name: '',
        password: ''
    }

    emailHandler = (event) => {
        this.setState({email: event.target.value})
    }
    nameHandler = (event) => {
        this.setState({name: event.target.value})
    }
    passHandler = (event) => {
        this.setState({password: event.target.value})
    }

    handleSubmit = (event) => {

        event.preventDefault()
        // console.log(event.target.email.value)
        // console.log(event.target.name.value)
        console.log(this.state)
    }

    render() {


        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" size="28" value={this.state.email} onChange={this.emailHandler}/>

                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" size="28" value={this.state.name} onChange={this.nameHandler}/>

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" size="28" value={this.state.password} onChange={this.passHandler}/>

                <input type="submit" value="Sign up"/>
            </form>
        );
    }
}

export default SignUpForm;
