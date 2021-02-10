export const getIsLoggedIn = (state) => {
    return state.auth.isLoggedIn
}
export const getPaidStatus = (state) => {
    return state.auth.isPaid
}
export const getAddresses = (state) => {
    return state.orderData.addresses
}
export const getCoordinates = (state) => {
    return state.orderData.coordinates
}
export const getFrom = (state) => {
    return state.orderData.route.from
}
export const getTo = (state) => {
    return state.orderData.route.to
}
