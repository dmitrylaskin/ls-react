import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types'

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

        console.log(this.state.email)
    }

    inputHandler = (field) => {
        return (event) => this.setState({[field]: event.target.value})
    }

    render() {

        return (

                <form onSubmit={this.handleSubmit}>
                    {/*<label htmlFor="email">Email:</label>*/}
                    {/*<input id="email" type="text" name="email" size="28" />*/}
                    <TextField name="email" id="email" label="email" onChange={this.inputHandler('email')} value={this.state.email} />
                    <TextField id="password" label="password" onChange={this.inputHandler('password')} value={this.state.password} />

                    {/*<label htmlFor="password">Password:</label>*/}
                    {/*<input id="password" type="password" name="password" size="28" onChange={this.inputHandler('password')} value={this.state.password}/>*/}

                    {/*<input type="submit" value="Log in"/>*/}
                    <Button variant="contained" type="submit">Button</Button>
                </form>

        );
    }
}

export default Login;
