import {all, call, fork, put, takeEvery, select} from "@redux-saga/core/effects";
import {authAPI, mapAPI, profileAPI} from "../../Api/api";
import {AUTHENTICATE, getLogIn, getPaid, REGISTRATION, setToken, showLoader} from "./auth/auth-reducer";
import {PAYMENT_DATA_REQUEST, setDialog, setPaymentData} from "./profile/profile-reducer";
import {
    ADDRESSES_REQUEST,
    COORDINATES_REQUEST,
    setAddresses,
    setCoordinates
} from "./map/map-reducer";

//root saga
export function* rootSaga() {
    yield fork(loginWatcher)
    yield fork(paymentWatcher)
    yield fork(addressesWatcher)
    yield fork(coordinatesWatcher)
    yield fork(signInWatcher)

}

//login
export function* loginWatcher() {
    yield takeEvery(AUTHENTICATE, loginSaga)
}

export function* loginSaga(action) {
    try {
        yield put(showLoader(true))
        const loginData = yield call(authAPI.getLogin, action.payload.email, action.payload.password)
        yield put(showLoader(false))

        if (loginData.data.success) {
            yield put(getLogIn())
            yield put(setToken(loginData.data.token))
        } else {
            throw new Error(loginData.data.error)
        }
    } catch (e) {
        alert(e)
    }

}

function* signInWatcher() {
    yield takeEvery(REGISTRATION, signInSaga)
}

function* signInSaga(action) {
    try {
        const registrationData = yield call(authAPI.getSignUp, action.payload.email, action.payload.name, action.payload.surname, action.payload.password)
        if (registrationData.data.success) {

        } else {
            throw new Error(registrationData.data.error)
        }
    } catch (e) {
        alert(e)
    }

}

//profile
function* paymentWatcher() {
    yield takeEvery(PAYMENT_DATA_REQUEST, paymentSaga)
}

const getToken = (state) => state.auth.token

function* paymentSaga(action) {
    try {
        //get data from store
        let token = yield select(getToken)

        const paymentData = yield call(profileAPI.setPaymentData, action.payload.cardNumber, action.payload.expiryDate, action.payload.cardName, action.payload.cvc, token)
        console.log(paymentData)

        if (paymentData.data.success) {
            yield put(setPaymentData(action.payload.cardName, action.payload.expiryDate, action.payload.cardNumber, action.payload.cvc))
            yield put(getPaid(true))
            yield put(setDialog(true))
        } else {
            throw new Error(paymentData.data.error)
        }
    } catch (e) {
        alert(e)
    }

}

//map
function* addressesWatcher() {
    yield takeEvery(ADDRESSES_REQUEST, addressesSaga)
}

function* addressesSaga() {
    try {
        const response = yield call(mapAPI.getAddresses)

        if (response.data.addresses) {
            yield put(setAddresses(response.data.addresses))
        } else {
            throw new Error('Ошибка сервера')
        }
    } catch (e) {
        alert(e)
    }

}

export function* coordinatesWatcher() {
    yield takeEvery(COORDINATES_REQUEST, coordinatesSaga)
}

export function* coordinatesSaga(action) {
    try {
        const response = yield call(mapAPI.getCoordinates, action.payload.from, action.payload.to)
        if (response.data.length) {
            yield put(setCoordinates(response.data))
        } else {
            throw new Error('Ошибка сервера')
        }
    } catch (e) {
        alert(e)
    }

}

