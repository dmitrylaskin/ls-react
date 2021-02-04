import React from 'react';
import PropTypes from 'prop-types'
import {withAuth} from "../HOCs/withAuth";
import {NavLink, Redirect} from "react-router-dom";
import {compose} from "redux";
import {paymentDataRequest, setPaymentData} from "../Redux/profile-reducer";
import {connect} from "react-redux";
import {getLogOut} from "../Redux/auth-reducer";
import Button from "../Button/Button";
import classes from '../Button/Button.module.css'
import {getMyArray} from "../Redux/profile-selector";

const Profile = (props) => {

    const signOutHandler = () => {

        props.getLogOut()

    }
    const handleSubmit = (event) => {
        event.preventDefault()

        let {name, month, cardNumber, cvc} = event.target
        props.paymentDataRequest(name.value, month.value, cardNumber.value, cvc.value)

    }

    return (

        !props.isLoggedIn ? <Redirect to={'home'}/> :

            <div>Profile page

            <NavLink onClick={signOutHandler} to={'/home'}><Button name={'Sign out'} className={classes.myButton}/></NavLink>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text" id="name"/>
                    <label htmlFor="month">month:</label>
                    <input name="month" type="text" id="month"/>
                    <label htmlFor="cardNumber">Card number:</label>
                    <input name="cardNumber" type="text" id="cardNumber"/>
                    <label htmlFor="cvc">CVC:</label>
                    <input name="cvc" type="text" id="cvc"/>
                    <button type="submit">Save</button>
                </form>
                <hr/>
                <div>Name: {props.name}</div>
                <div>Month: {props.month}</div>
                <div>Card: {props.card}</div>
                <div>CVC: {props.cvc}</div>

                {console.log('Profile render')}
        </div>

    );
};

let mapStateToProps = (state) => {
    console.log('Profile mstp')
    return  {
        name: state.ProfileData.name,
        month: state.ProfileData.month,
        card: state.ProfileData.cardNumber,
        cvc: state.ProfileData.cvc,
        isLoggedIn: state.auth.isLoggedIn,
        token: state.auth.token,
        myArray: getMyArray(state)
    }
}


Profile.propTypes = {
    text: PropTypes.string,
}
//export const ProfileWithAuth = withAuth(Profile) - video workshop#2;
let Compose = compose(
    connect(mapStateToProps, {paymentDataRequest, getLogOut})
)(Profile)

export default Compose
