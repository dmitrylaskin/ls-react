export const SET_PAYMENT_DATA = 'SET_PAYMENT_DATA'

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
                name: action.payload.name,
                month: action.payload.month,
                cardNumber: action.payload.cardNumber,
                cvc: action.payload.cvc
            }

        default:
            return state

    }
}

export const setPaymentData = (name, month, cardNumber, cvc) => ({type: SET_PAYMENT_DATA, payload: {name, month, cardNumber, cvc}})

export default profileReducer;
