export const SET_PAYMENT_DATA = 'SET_PAYMENT_DATA'
export const PAYMENT_DATA_REQUEST = 'PAYMENT_DATA_REQUEST'
export const FAKE = 'FAKE'

export let initialState = {
    name: 'Corben Dallas',
    month: '01/07',
    cardNumber: '1234 1234 1234 1234',
    cvc: '999'

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

export const setPaymentData = (cardName, expiryDate, cardNumber, cvc) => ({type: SET_PAYMENT_DATA, payload: {cardName, expiryDate, cardNumber, cvc}})
export const paymentDataRequest = (cardName, expiryDate, cardNumber, cvc) => ({type: PAYMENT_DATA_REQUEST, payload: {cardName, expiryDate, cardNumber, cvc}})

export default profileReducer;
