import React from 'react';
import PropTypes from 'prop-types'
import {withAuth} from "../HOCs/withAuth";
import {NavLink, Redirect} from "react-router-dom";
import {compose} from "redux";
import {paymentDataRequest, setPaymentData} from "../Redux/profile-reducer";
import {connect} from "react-redux";
import {getLogOut} from "../Redux/auth-reducer";
import MyButton from "../Button/MyButton";
import classes from '../Button/MyButton.module.css'
import {
    getCardNumber,
    getCvc,
    getExpiryDate,
    getIsLoggedIn,
    getMyArray,
    getName,
    getToken
} from "../Redux/profile-selector";

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

            <NavLink onClick={signOutHandler} to={'/home'}><MyButton value={'Sign out'} className={classes.myButton}/></NavLink>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text" id="name"/>
                    <label htmlFor="month">Expiry date:</label>
                    <input name="month" type="text" id="month"/>
                    <label htmlFor="cardNumber">Card number:</label>
                    <input name="cardNumber" type="text" id="cardNumber"/>
                    <label htmlFor="cvc">CVC:</label>
                    <input name="cvc" type="text" id="cvc"/>
                    <button type="submit">Save</button>
                </form>
                <div>-----------------------------</div>
                <div style={{fontSize: '18px', fontWeight: 700}}>Redux data: </div>
                <div>Name: {props.name}</div>
                <div>Expiry date: {props.month}</div>
                <div>Card number: {props.card}</div>
                <div>CVC: {props.cvc}</div>

                {console.log('Profile render')}
        </div>
    );
};

let mapStateToProps = (state) => {
    console.log('Profile mstp')
    return  {
        name: getName(state),
        month: getExpiryDate(state),
        card: getCardNumber(state),
        cvc: getCvc(state),
        isLoggedIn: getIsLoggedIn(state),
        token: getToken(state),
        myArray: getMyArray(state)
    }
}


Profile.propTypes = {
    text: PropTypes.string,
}
let Compose = compose(
    connect(mapStateToProps, {paymentDataRequest, getLogOut})
)(Profile)

export default Compose
