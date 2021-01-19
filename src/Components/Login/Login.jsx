import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types'
import {MyContext} from "../../App";

class Login extends React.Component {
    static propTypes = {
        navigateTo: PropTypes.func
    }

    state = {
        email: '',
        password: ''
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.navigateTo('map')

    }

    inputHandler = (field) => {
        return (event) => this.setState({[field]: event.target.value})
    }

    render() {

        return (
        <MyContext.Consumer>
            {value => {

                return <form onSubmit={this.handleSubmit}>
                        <TextField name="email" id="email" label="email" onChange={this.inputHandler('email')} value={this.state.email} />
                        <TextField id="password" label="password" onChange={this.inputHandler('password')} value={this.state.password} />
                        <Button variant="contained" onClick={() => value.logIn(this.state.email, this.state.password)} type="submit">Button</Button>

                        {/*<label htmlFor="email">Email:</label>*/}
                        {/*<input id="email" type="text" name="email" size="28" />*/}
                        {/*<label htmlFor="password">Password:</label>*/}
                        {/*<input id="password" type="password" name="password" size="28" onChange={this.inputHandler('password')} value={this.state.password}/>*/}
                        {/*<input type="submit" value="Log in"/>*/}
                </form>
            }}

        </MyContext.Consumer>
        );
    }
}

export default Login;
