import {authAPI} from "../../Api/api";

export const IS_LOADING = 'IS_LOADING'
export const SHOW_SIGNUP_FORM = 'SHOW_SIGNUP_FORM'
export const IS_AUTHORIZED = 'LOGINED_SUCCESSFULLY'
export const SET_USER_DATA = 'SET_USER_DATA'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'

export let initialState = {
    isLoading: false,
    showSignUpForm: false,
    isLoggedIn: false,
    email: null,
    password: null
}
export const authReducer = (state=initialState, action) => {

    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SHOW_SIGNUP_FORM:
            return {
                ...state,
                showSignUpForm: action.payload
            }

        case SET_USER_DATA:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
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

        default:
            return state

    }
}

export const showLoader = (payload) => ({type: IS_LOADING, payload})
export const loginFormToggle = (payload) => ({type: SHOW_SIGNUP_FORM, payload})
//export const setUserData = (email, password) => ({type: SET_USER_DATA, payload:{email, password}})
export const getLogInAC = () => ({type: LOG_IN})
export const getLogOutAC = () => ({type: LOG_OUT})
export const authenticate = (email, password) => {

    return  {
        type:AUTHENTICATE, payload:{email, password}
    }
}


export const authMiddleware = (store) => (next) => async (action) => {

    if (action.type === AUTHENTICATE) {

        store.dispatch(showLoader(true))

        let loginData = await authAPI.getLogin(action.payload.email, action.payload.password)

        store.dispatch(showLoader(false))

        if (loginData.data.success) {
            store.dispatch(getLogInAC())
        } else {
            alert(loginData.data.error)

        }
    } else {
        next(action)
    }

}


export default authReducer;
