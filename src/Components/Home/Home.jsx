import React from 'react';
import PropTypes from 'prop-types'
import {withAuth} from "../HOCs/withAuth";

class Home extends React.Component {
    static propTypes = {
        navigateTo: PropTypes.func
    }

    handleSubmit = (event) => {

        event.preventDefault()
        //this.props.navigateTo('map')
        const {email, password} = event.target
        console.log('Email, Pass: ', email.value, password.value)
        this.props.logIn(email.value, password.value)


    }

    inputHandler = (field) => {
        return (event) => this.setState({[field]: event.target.value})
    }

    goToProfile = () => {
        this.props.navigateTo('profile')
    }


    render() {
        console.log('Home: ', this.props)

        return (<>
                {this.props.IsLoggedIn
                    ? (<p>You are logged in <button onClick={this.goToProfile}>go to Profile</button></p>)
                    : <form onSubmit={this.handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="text" name="email" size="28" />
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" name="password" size="28" />
                        <input type="submit" value="Log in"/>
                </form>}


            </>
        );
    }
}

//export const HomeWithAuth = withAuth(Home)
export default withAuth(Home);
