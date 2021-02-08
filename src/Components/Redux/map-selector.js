export const getIsLoggedIn = (state) => {
    return state.auth.isLoggedIn
}
export const getCardName = (state) => {
    return state.ProfileData.name
}
export const getAddresses = (state) => {
    return state.orderData.addresses
}
