export const SET_ADDRESSES = 'SET_ADDRESSES'
export const ADDRESSES_REQUEST = 'ADDRESSES_REQUEST'
export const SET_COORDINATES = 'SET_COORDINATES'
export const COORDINATES_REQUEST = 'COORDINATES_REQUEST'
export const SET_ROUTE = 'SET_ROUTE'

let initialState = {
    addresses: null,
    coordinates: [],
}
const mapReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ADDRESSES:
            return {
                ...state,
                addresses: action.payload
            }
        case SET_COORDINATES:
            return {
                ...state,
                coordinates: action.payload
            }

        default:
            return state

    }
}

export const setAddresses = (payload) => ({type:SET_ADDRESSES, payload})
export const addressesRequest = () => ({type:ADDRESSES_REQUEST})
export const coordinatesRequest = (from, to) => ({type:COORDINATES_REQUEST, payload: {from, to}})
export const setCoordinates = (payload) => ({type: SET_COORDINATES, payload})

export default mapReducer
