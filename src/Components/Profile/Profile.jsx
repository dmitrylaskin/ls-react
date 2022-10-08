import React from 'react';
import PropTypes from 'prop-types'
import {compose} from "redux";
import {paymentDataRequest, setDialog, updateFormState} from "../Redux/profile/profile-reducer";
import {connect} from "react-redux";
import {getLogOut} from "../Redux/auth/auth-reducer";
import MyButton from "../Button/MyButton";
import styles from './Profile.module.css'
import {
    getCardNumber,
    getCvc,
    getExpiryDate, getFormState,
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
import {Form} from "react-final-form";
import {TextField} from 'mui-rff';
import FormStateToRedux from "./FormStateToRedux";

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
    const onSubmit = (values) => {
        props.paymentDataRequest(values.name, values.expiryDate, values.cardNumber, values.cvc)
    }
    
    const limitMaxLengthCreator = (maxValue) => {
        return function (value) {
            return value && value.length > maxValue ? `Max number is ${maxValue}` : undefined
        }
    }

    const limitMaxLength3 = limitMaxLengthCreator(3)
    const limitMaxLength16 = limitMaxLengthCreator(16)
    const limitMaxLength30 = limitMaxLengthCreator(30)

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

    if (props.showDialog) {
        return <SimpleDialog
            title={'Профиль'}
            subtitle={'Платёжные данные обновлены. Теперь вы можете заказывать такси'}
            setDialog={props.setDialog}
            link={'/map'}
            linkValue={'Перейти на карту'}
            open={true}/>
    }
    return (

        <div className={styles.wrapper}>
            <Form
                onSubmit={onSubmit}
                initialValues={{name: '', cardNumber: '', expiryDate: 'yyyy-mm-dd', cvc: ''}}
                validate={validate}
                render={({handleSubmit}) => (
                    <>
                        <FormStateToRedux form="profileForm" />
                    <form onSubmit={handleSubmit} noValidate className={styles.col}>
                        <TextField
                            className={props.classes.input}
                            label="Имя"
                            name="name"
                            margin="none"
                            required={true}
                            fieldProps={{validate: limitMaxLength30}}
                        />
                        <TextField
                            className={props.classes.input}
                            label="Номер карты"
                            name="cardNumber"
                            margin="none"
                            required={true}
                            type={'number'}
                            fieldProps={{validate: limitMaxLength16}}
                        />
                        <div className={styles.formRow}>

                            <TextField
                                className={props.classes.inputRow}
                                label="Expiry date"
                                name="expiryDate"
                                margin="none"
                                required={true}
                                type={'date'}
                            />
                            <TextField
                                className={props.classes.inputRow}
                                label="cvc"
                                name="cvc"
                                margin="none"
                                type='password'
                                required={true}
                                type={'number'}
                                fieldProps={{validate: limitMaxLength3}}
                            />

                        </div>
                        <MyButton type="submit" value={'Сохранить'}/>
                    </form>
                    </>
                )}
            />
            <div className={styles.col}>
                <div className={styles.card}>
                    <div className={props.classes.cardRow}>
                        <div className={styles.imgWrapper}><img src={logo} alt=""/></div>
                        <span className={styles.cardDate}>{`${props.formState.expiryDate?.slice(5,7)}/${props.formState.expiryDate?.slice(2,4)}`}</span>
                    </div>

                    <span className={styles.cardNumber}>{`
                    ${props.formState.cardNumber?.slice(0, 4) || '0000'} 
                    ${props.formState.cardNumber?.slice(4, 8) || '0000'} 
                    ${props.formState.cardNumber?.slice(8, 12) || '0000'} 
                    ${props.formState.cardNumber?.slice(12, 16) || '0000'}
                    `}</span>

                    <div className={styles.cardIcons}>
                        <img src={secImg} alt=""/>
                        <span className={styles.cardHolder}>{props.formState.name?.toUpperCase() || 'CARD HOLDER'}</span>
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
        showDialog: getShowDialog(state),
        formState: getFormState(state, 'profileForm')
    }
}


Profile.propTypes = {
    text: PropTypes.string,
}
let Compose = compose(
    connect(mapStateToProps, {paymentDataRequest, getLogOut, setDialog, updateFormState}),
    withStyles(stylesMaterial)
)(Profile)

export default Compose
