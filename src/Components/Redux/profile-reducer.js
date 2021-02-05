export const SET_PAYMENT_DATA = 'SET_PAYMENT_DATA'
export const PAYMENT_DATA_REQUEST = 'PAYMENT_DATA_REQUEST'

export let initialState = {
    name: null,
    month: null,
    cardNumber: null,
    cvc: null
}
const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case SET_PAYMENT_DATA:
            return {
                ...state,
                name: action.payload.cardName,
                month: action.payload.expiryDate,
                cardNumber: action.payload.cardNumber,
                cvc: action.payload.cvc
            }
        default:
            return state
    }
}

export const setPaymentData = (cardName, expiryDate, cardNumber, cvc) => ({type: SET_PAYMENT_DATA, payload: {cardName, expiryDate, cardNumber, cvc}}) //- in saga

export const paymentDataRequest = (cardName, expiryDate, cardNumber, cvc) => ({type: PAYMENT_DATA_REQUEST, payload: {cardName, expiryDate, cardNumber, cvc}})

export default profileReducer;
