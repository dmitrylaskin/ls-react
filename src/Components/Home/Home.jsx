import React from 'react';
import PropTypes from 'prop-types'
import {withAuth} from "../HOCs/withAuth";
import {NavLink} from "react-router-dom";
import {authAPI} from "../../Api/api";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    authenticate,
    loginFormToggle,
    showLoader
} from "../Redux/auth-reducer";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import Button from "../Button/Button";


class Home extends React.Component {
    static propTypes = {
        navigateTo: PropTypes.func
    }
    state = {
        email: '',
        password: ''
    }

    handleEmailInput = (event) => {
        this.setState({email: event.target.value})
    }
    handlePassInput = (event) => {
        this.setState({password: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.authenticate(this.state.email, this.state.password)
    }

    // inputHandler = (field) => {
    //     return (event) => this.setState({[field]: event.target.value})
    // }




    render() {

        return (<div>
                {this.props.showSignUpForm
                    ? <SignUpForm loginFormToggle={this.props.loginFormToggle}/>
                    : this.props.isLoading
                        ? <div style={{fontSize: '23px'}}>Loading...</div>
                        : this.props.isLoggedIn
                            ? (<p>You are logged in <NavLink to={'/profile'}><Button name={'go to Profile'}/></NavLink></p>)
                            : <LoginForm email={this.state.email} password={this.state.password}
                                         handleEmailInput={this.handleEmailInput}
                                         handlePassInput={this.handlePassInput}
                                         loginFormToggle={this.props.loginFormToggle}
                                         handleSubmit={this.handleSubmit}/>
                    }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('Home mstp')
    return {
        isLoading: state.auth.isLoading,
        showSignUpForm: state.auth.showSignUpForm,
        isLoggedIn: state.auth.isLoggedIn
    }
}

let Compose = compose(
    connect(mapStateToProps, {showLoader,loginFormToggle, authenticate})
)(Home)

export default Compose
