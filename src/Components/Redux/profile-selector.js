export const getName = (state) => {
    return state.ProfileData.name
}
export const getExpiryDate = (state) => {
    return state.ProfileData.month
}
export const getCardNumber = (state) => {
    return state.ProfileData.cardNumber
}
export const getCvc = (state) => {
    return state.ProfileData.cvc
}
export const getIsLoggedIn = (state) => {
    return state.auth.isLoggedIn
}
export const getToken = (state) => {
    return state.auth.token
}
