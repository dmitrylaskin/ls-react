import React from 'react';
import PropTypes from 'prop-types'
import {withAuth} from "../HOCs/withAuth";
import {NavLink} from "react-router-dom";
import {authAPI} from "../../Api/api";
import {connect} from "react-redux";
import {compose} from "redux";
import {getLoginThunkCreator, loginFormToggle, showLoader} from "../Redux/auth-reducer";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";


class Home extends React.Component {
    static propTypes = {
        navigateTo: PropTypes.func
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const {email, password} = event.target

        this.props.getLoginThunkCreator(email, password, this.props.logIn)

    }

    inputHandler = (field) => {
        return (event) => this.setState({[field]: event.target.value})
    }




    render() {
        return (<>
                {this.props.showSignUpForm
                    ? <SignUpForm loginFormToggle={this.props.loginFormToggle}/>
                    : this.props.isLoading
                        ? <div>Loading...</div>
                        : this.props.isAouthorized
                            ? (<p>You are logged in <NavLink to={'/profile'}><button type='button'>go to Profile</button></NavLink></p>)
                            : <LoginForm loginFormToggle={this.props.loginFormToggle} handleSubmit={this.handleSubmit}/>}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.auth.isLoading,
        showSignUpForm: state.auth.showSignUpForm,
        isAouthorized: state.auth.isAouthorized
    }
}

let Compose = compose(
    connect(mapStateToProps, {showLoader,loginFormToggle, getLoginThunkCreator}),
    withAuth
)(Home)

//export const HomeWithAuth = withAuth(Home)
export default Compose