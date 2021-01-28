import React from 'react';
import PropTypes from 'prop-types'
import {withAuth} from "../HOCs/withAuth";
import {NavLink, Redirect} from "react-router-dom";
import {compose} from "redux";
import {setPaymentData} from "../Redux/profile-reducer";
import {connect} from "react-redux";
import {getLogOut} from "../Redux/auth-reducer";

const Profile = (props) => {

    const signOutHandler = () => {
        //props.logOut()
        //props.navigateTo('home')
        props.getLogOut(false)

    }
    const handleSubmit = (event) => {
        event.preventDefault()

        let {name, month, cardNumber, cvc} = event.target
        console.log(name.value, month.value, cardNumber.value, cvc.value)

        props.setPaymentData(name.value, month.value, cardNumber.value, cvc.value)
    }

    return (
        !props.isAouthorized ? <Redirect to={'home'}/> :
            <div>Profile page
            <NavLink onClick={signOutHandler} to={'/home'}><button>Sign out</button></NavLink>
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


        </div>

    );
};

let mapStateToProps = (state) => {

    return  {
        name: state.ProfileData.name,
        month: state.ProfileData.month,
        card: state.ProfileData.cardNumber,
        cvc: state.ProfileData.cvc,
        isAouthorized: state.auth.isAouthorized
    }
}


Profile.propTypes = {
    text: PropTypes.string,
}
//export const ProfileWithAuth = withAuth(Profile) - video workshop#2;
let Compose = compose(
    connect(mapStateToProps, {setPaymentData, getLogOut}),
    withAuth
)(Profile)

export default Compose
