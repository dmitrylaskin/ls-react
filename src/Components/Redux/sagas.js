import {all, call, fork, put, takeEvery, select} from "@redux-saga/core/effects";
import {authAPI, profileAPI} from "../../Api/api";
import {AUTHENTICATE, getLogIn, setToken, showLoader} from "./auth-reducer";
import {PAYMENT_DATA_REQUEST, SET_PAYMENT_DATA, setPaymentData} from "./profile-reducer";

//root saga
export function* rootSaga() {
    yield fork(loginWatcher)
    yield fork(paymentWatcher)

}
//login
function* loginWatcher() {
    yield takeEvery(AUTHENTICATE, loginSaga)

}
export function* loginSaga(action) {

        yield put(showLoader(true))
        const loginData = yield call(authAPI.getLogin, action.payload.email, action.payload.password)
        console.log('login-data: ', loginData)
        yield put(showLoader(false))

        if (loginData.data.success) {
            yield put(getLogIn())
            yield put(setToken(loginData.data.token))
        } else {
            alert(loginData.data.error)
        }
}

//profile
function* paymentWatcher() {
    yield takeEvery(PAYMENT_DATA_REQUEST, paymentSaga)
}
const getToken = (state) => state.auth.token

function* paymentSaga(action) {
    //get data from store
    let token = yield select(getToken)
    console.log('Token: ', token)

    const paymentData = yield call(profileAPI.setPaymentData, action.payload.cardNumber, action.payload.expiryDate, action.payload.cardName, action.payload.cvc, token)
    console.log(paymentData)

    if (paymentData.data.success) {
        yield put(setPaymentData(action.payload.cardName, action.payload.expiryDate, action.payload.cardNumber, action.payload.cvc))

    } else {
        alert(paymentData.data.error)
    }

}


