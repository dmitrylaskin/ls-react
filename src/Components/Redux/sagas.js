import {all, call, fork, put, takeEvery, select} from "@redux-saga/core/effects";
import {authAPI, mapAPI, profileAPI} from "../../Api/api";
import {AUTHENTICATE, getLogIn, getPaid, REGISTRATION, setToken, showLoader} from "./auth-reducer";
import {PAYMENT_DATA_REQUEST, setPaymentData} from "./profile-reducer";
import {
    ADDRESSES_REQUEST,
    COORDINATES_REQUEST,
    setAddresses,
    setCoordinates
} from "./map-reducer";

//root saga
export function* rootSaga() {
    yield fork(loginWatcher)
    yield fork(paymentWatcher)
    yield fork(addressesWatcher)
    yield fork(coordinatesWatcher)
    yield fork(signInWatcher)

}
//login
function* loginWatcher() {
    yield takeEvery(AUTHENTICATE, loginSaga)
}
export function* loginSaga(action) {

        yield put(showLoader(true))
        const loginData = yield call(authAPI.getLogin, action.payload.email, action.payload.password)
        yield put(showLoader(false))

        if (loginData.data.success) {
            yield put(getLogIn())
            yield put(setToken(loginData.data.token))
        } else {
            alert(loginData.data.error)
        }
}
function* signInWatcher() {
    yield takeEvery(REGISTRATION, signInSaga)
}
function* signInSaga(action) {
        const registrationData = yield call(authAPI.getSignUp, action.payload.email, action.payload.name, action.payload.surname, action.payload.password)
    console.log(registrationData)
    // if (registrationData.data.success) {
    //
    // } else {
    //     alert(registrationData.data.error)
    // }
}

//profile
function* paymentWatcher() {
    yield takeEvery(PAYMENT_DATA_REQUEST, paymentSaga)
}
const getToken = (state) => state.auth.token

function* paymentSaga(action) {
    //get data from store
    let token = yield select(getToken)

    const paymentData = yield call(profileAPI.setPaymentData, action.payload.cardNumber, action.payload.expiryDate, action.payload.cardName, action.payload.cvc, token)

    if (paymentData.data.success) {
        yield put(setPaymentData(action.payload.cardName, action.payload.expiryDate, action.payload.cardNumber, action.payload.cvc))
        yield put(getPaid())


    } else {
        alert(paymentData.data.error)
    }
}

//map
function* addressesWatcher() {
    yield takeEvery(ADDRESSES_REQUEST, addressesSaga)
}
function* addressesSaga() {
    const response = yield call(mapAPI.getAddresses)

    if (response.data.addresses) {
        yield put(setAddresses(response.data.addresses))
    } else {
        alert('Ошибка сервера')
    }
}
function* coordinatesWatcher() {
    yield takeEvery(COORDINATES_REQUEST, coordinatesSaga)
}
function* coordinatesSaga(action) {
    const response = yield call(mapAPI.getCoordinates, action.payload.from, action.payload.to)
    if (response.data.length) {
        yield put(setCoordinates(response.data))
    } else {
        alert('Ошибка сервера')
    }
}

