import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {withAuth} from "../HOCs/withAuth";
import {NavLink, Redirect} from "react-router-dom";
import {compose} from "redux";
import {paymentDataRequest, setPaymentData} from "../Redux/profile-reducer";
import {connect} from "react-redux";
import {getLogOut} from "../Redux/auth-reducer";
import MyButton from "../Button/MyButton";
import classes from '../Button/MyButton.module.css'
import styles from './Profile.module.css'
import {
    getCardNumber,
    getCvc,
    getExpiryDate,
    getIsLoggedIn,
    getName,
    getToken
} from "../Redux/profile-selector";
import form from "../LoginForm/LoginForm.module.css";
import TextField from "@material-ui/core/TextField";
import {withStyles} from "@material-ui/styles";
import logo from '../../assets/img/card-logo.png'
import secImg from '../../assets/img/sec.png'
import {getPaidStatus} from "../Redux/map-selector";

const stylesMaterial = {
    input: {
        marginBottom: '20px'
    },
    inputRow: {
        width: '47%',
        marginRight: '20px',
        '&:last-child': {
            marginRight: '0'
        }
    },
    cardRow: {
        height: '20%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

}


const Profile = (props) => {

    const [state, setState] = useState({
        name: '',
        expiryDate: '',
        cardNumber: '',
        cvc: ''
    })


    const inputHandler = (field) =>
        (event) => setState({...state, [field]:event.target.value})


    const signOutHandler = () => {
        props.getLogOut()
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.paymentDataRequest(state.name, state.expiryDate, state.cardNumber, state.cvc)

    }


    return (

            <div className={styles.wrapper}>
            {/*<NavLink onClick={signOutHandler} to={'/home'}><MyButton value={'Sign out'} className={classes.myButton}/></NavLink>*/}

                <form onSubmit={handleSubmit} className={styles.col} noValidate autoComplete="off">
                    <TextField className={props.classes.input} id="standard-basic" label="Имя владельца" value={state.name} onChange={inputHandler('name')}/>
                    <TextField className={props.classes.input} id="standard-basic" label="Номер карты" value={state.cardNumber} onChange={inputHandler('cardNumber')}/>
                    <div className={styles.formRow}>
                        <TextField className={props.classes.inputRow} id="standard-basic" label="MM/YY" value={state.expiryDate} onChange={inputHandler('expiryDate')}/>
                        <TextField className={props.classes.inputRow} id="standard-basic" label="CVC" value={state.cvc} onChange={inputHandler('cvc')}/>
                    </div>

                    <MyButton type="submit" value={'Сохранить'}/>
                </form>
                <div className={styles.col}>
                    <div className={styles.card}>
                        <div className={props.classes.cardRow}>
                            <div className={styles.imgWrapper}><img src={logo} alt=""/></div>
                            <input className={styles.cardDate} type="text" placeholder={'mm/yy'} value={state.expiryDate}/>
                        </div>
                       
                        <input className={styles.cardNumber} type="text" placeholder={'0000 0000 0000 0000'} value={state.cardNumber}/>
                        <div className={styles.cardIcons}>
                            <img src={secImg} alt=""/>
                        </div>
                    </div>
                    <div style={{fontSize: '18px', fontWeight: 700}}>Redux data: </div>
                    <div>Name: {props.name}</div>
                    <div>Expiry date: {props.month}</div>
                    <div>Card number: {props.card}</div>
                    <div>CVC: {props.cvc}</div>
                </div>

        </div>
    );
};

let mapStateToProps = (state) => {
    return  {
        name: getName(state),
        month: getExpiryDate(state),
        card: getCardNumber(state),
        cvc: getCvc(state),
        isLoggedIn: getIsLoggedIn(state),
        token: getToken(state),
        isPaid: getPaidStatus(state)
    }
}


Profile.propTypes = {
    text: PropTypes.string,
}
let Compose = compose(
    connect(mapStateToProps, {paymentDataRequest, getLogOut}),
    withStyles(stylesMaterial)
)(Profile)

export default Compose
