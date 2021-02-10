import React from 'react';
import PropTypes from 'prop-types'
import {withAuth} from "../HOCs/withAuth";
import {NavLink} from "react-router-dom";
import {authAPI} from "../../Api/api";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    authenticate,
    loginFormToggle, registration,
    showLoader
} from "../Redux/auth-reducer";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import MyButton from "../Button/MyButton";


class Home extends React.Component {
    static propTypes = {
        navigateTo: PropTypes.func
    }
    state = {
        email: 'test@test.com',
        password: '123123'
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


    render() {

        return (<div>
                {this.props.showSignUpForm
                    ? <SignUpForm registration={this.props.registration} loginFormToggle={this.props.loginFormToggle}/>
                    : this.props.isLoading
                        ? <div style={{fontSize: '23px'}}>Loading...</div>
                        : this.props.isLoggedIn
                            ? (<p>You are logged in <NavLink to={'/profile'}><MyButton value={'go to Profile'}/></NavLink></p>)
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
    return {
        isLoading: state.auth.isLoading,
        showSignUpForm: state.auth.showSignUpForm,
        isLoggedIn: state.auth.isLoggedIn
    }
}

let Compose = compose(
    connect(mapStateToProps, {showLoader,loginFormToggle, authenticate, registration})
)(Home)

export default Compose
