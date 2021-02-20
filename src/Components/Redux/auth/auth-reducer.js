export const IS_LOADING = 'IS_LOADING'
export const TOGGLE_FORM = 'TOGGLE_FORM'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const SET_TOKEN = 'SET_TOKEN'
export const REGISTRATION = 'REGISTRATION'
export const IS_PAID = 'IS_PAID'
export const IS_SIGNED_IN = 'IS_SIGNED_IN'

export let initialState = {
    isLoading: false,
    showSignUpForm: false,
    isLoggedIn: false,
    token: null,
    isPaid: false,
    isSignedIn: false
}
export const authReducer = (state=initialState, action) => {

    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case TOGGLE_FORM:
            return {
                ...state,
                showSignUpForm: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: true
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case IS_PAID:
            return {
                ...state,
                isPaid: action.payload
            }
        case IS_SIGNED_IN:
            return {
                ...state,
                isSignedIn: action.payload
            }
        default:
            return state
    }
}

export const showLoader = (payload) => ({type: IS_LOADING, payload})
export const loginFormToggle = (payload) => ({type: TOGGLE_FORM, payload})
export const getLogIn = () => ({type: LOG_IN})
export const getLogOut = () => ({type: LOG_OUT})
export const setToken = (payload) => ({type: SET_TOKEN, payload})
export const authenticate = (email, password) => ({type:AUTHENTICATE, payload:{email, password}})
export const registration = (email, name, surname, password) => ({type:REGISTRATION, payload:{email, name, surname, password}})
export const getPaid = (payload) => ({type: IS_PAID, payload})
export const getSignInRequest = (payload) => ({type: IS_SIGNED_IN, payload})

export default authReducer;
