export const GET_ADDRESSES = 'GET_ADDRESSES'
export const ADDRESSES_REQUEST = 'ADDRESSES_REQUEST'

let initialState = {
    addresses: null
}
const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADDRESSES:
            return {
                ...state,
                addresses: action.payload
            }
        default:
            return state

    }
}

export const setAddresses = (payload) => ({type:GET_ADDRESSES, payload})
export const addressesRequest = () => ({type:ADDRESSES_REQUEST})

export default mapReducer
