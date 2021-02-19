import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {withAuth} from "../HOCs/withAuth";
import {NavLink, Redirect} from "react-router-dom";
import {compose} from "redux";
import {paymentDataRequest, setDialog, setPaymentData} from "../Redux/profile/profile-reducer";
import {connect} from "react-redux";
import {getLogOut} from "../Redux/auth/auth-reducer";
import MyButton from "../Button/MyButton";
import classes from '../Button/MyButton.module.css'
import styles from './Profile.module.css'
import {
    getCardNumber,
    getCvc,
    getExpiryDate,
    getIsLoggedIn,
    getName, getShowDialog,
    getToken
} from "../Redux/profile/profile-selector";
import form from "../LoginForm/LoginForm.module.css";
import {withStyles} from "@material-ui/styles";
import logo from '../../assets/img/card-logo.png'
import secImg from '../../assets/img/sec.png'
import {getPaidStatus} from "../Redux/map/map-selector";
import SimpleDialog from "../SimpleDialog/SimpleDialog";
import {DatePicker} from "@material-ui/pickers";
import {Form} from "react-final-form";
import {TextField} from 'mui-rff';

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
    const [selectedDate, handleDateChange] = useState(new Date());


    const onSubmit = (values) => {
        props.paymentDataRequest(values.name, values.expiryDate, values.cardNumber, values.cvc)
    }

    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.cardNumber) {
            errors.cardNumber = 'Required';
        }
        if (!values.cvc) {
            errors.cvc = 'Required';
        }
        return errors;
    };


    return (
        <div className={styles.wrapper}>
            <Form
                onSubmit={onSubmit}
                initialValues={{name: '', cardNumber: '', expiryDate: '', cvc: ''}}
                validate={validate}
                render={({handleSubmit, form, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit} noValidate className={styles.col}>
                        <TextField
                            className={props.classes.input}
                            label="Имя"
                            name="name"
                            margin="none"
                            required={true}
                        />
                        <TextField
                            className={props.classes.input}
                            label="Номер карты"
                            name="cardNumber"
                            margin="none"
                            required={true}
                        />
                        <div className={styles.formRow}>
                            <DatePicker
                                variant="dialog"
                                format="MM/YY"
                                openTo="year"
                                views={["year", "month"]}
                                label="Year and Month"
                                helperText="Start from year selection"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                            <TextField
                                className={props.classes.inputRow}
                                label="cvc"
                                name="cvc"
                                margin="none"
                                type='password'
                                required={true}
                            />
                        </div>
                        <MyButton type="submit" value={'Сохранить'}/>
                    </form>
                )}
            />
            <div className={styles.col}>
                <div className={styles.card}>
                    <div className={props.classes.cardRow}>
                        <div className={styles.imgWrapper}><img src={logo} alt=""/></div>
                        <input className={styles.cardDate} type="text" placeholder={'mm/yy'}
                               defaultValue={state.expiryDate}/>
                    </div>

                    <input className={styles.cardNumber} type="text" placeholder={'0000 0000 0000 0000'}
                           defaultValue={state.cardNumber}/>
                    <div className={styles.cardIcons}>
                        <img src={secImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        name: getName(state),
        month: getExpiryDate(state),
        card: getCardNumber(state),
        cvc: getCvc(state),
        isLoggedIn: getIsLoggedIn(state),
        token: getToken(state),
        isPaid: getPaidStatus(state),
        showDialog: getShowDialog(state)
    }
}


Profile.propTypes = {
    text: PropTypes.string,
}
let Compose = compose(
    connect(mapStateToProps, {paymentDataRequest, getLogOut, setDialog}),
    withStyles(stylesMaterial)
)(Profile)

export default Compose
