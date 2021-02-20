import React from 'react';
import PropTypes from 'prop-types'
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    authenticate, getSignInRequest,
    loginFormToggle, registration,
    showLoader
} from "../Redux/auth/auth-reducer";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import {withLoader} from "../Loader/withLoader";


class Home extends React.Component {
    static propTypes = {
        navigateTo: PropTypes.func
    }

    onSubmit = (values) => {
        this.props.authenticate(values.email, values.password)
    }

    render() {
        if (this.props.showSignUpForm) {
            return <SignUpForm getSignInRequest={this.props.getSignInRequest} isSignedIn={this.props.isSignedIn} registration={this.props.registration} loginFormToggle={this.props.loginFormToggle}/>
        }

        return (<div>

                {this.props.isLoggedIn
                        ? <Redirect to='/profile'/>
                        : <LoginForm loginFormToggle={this.props.loginFormToggle} onSubmit={this.onSubmit}/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.auth.isLoading,
        showSignUpForm: state.auth.showSignUpForm,
        isLoggedIn: state.auth.isLoggedIn,
        isSignedIn: state.auth.isSignedIn
    }
}

let Compose = compose(
    connect(mapStateToProps, {showLoader, loginFormToggle, authenticate, registration, getSignInRequest}),
    withLoader
)(Home)

export default Compose
