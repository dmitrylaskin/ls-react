import {authAPI} from "../../Api/api";
import {FAKE} from "./profile-reducer";

export const IS_LOADING = 'IS_LOADING'
export const SHOW_SIGNUP_FORM = 'SHOW_SIGNUP_FORM'
export const IS_AUTHORIZED = 'LOGINED_SUCCESSFULLY'
export const SET_USER_DATA = 'SET_USER_DATA'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const SET_TOKEN = 'SET_TOKEN'

export let initialState = {
    isLoading: false,
    showSignUpForm: false,
    isLoggedIn: false,
    token: null,
    fake: 0,
    fakeArray: [1,2,3,4,5]
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
        case FAKE: {
            return {
                ...state,
                fake: state.fake + 1
            }
        }

        default:
            return state

    }
}

export const showLoader = (payload) => ({type: IS_LOADING, payload})
export const loginFormToggle = (payload) => ({type: SHOW_SIGNUP_FORM, payload})
export const getLogIn = () => ({type: LOG_IN})
export const getLogOut = () => ({type: LOG_OUT})
export const setToken = (payload) => ({type: SET_TOKEN, payload})
export const authenticate = (email, password) => ({type:AUTHENTICATE, payload:{email, password}})


// export const authMiddleware = (store) => (next) => async (action) => {
//
//     if (action.type === AUTHENTICATE) {
//
//         store.dispatch(showLoader(true))
//
//         let loginData = await authAPI.getLogin(action.payload.email, action.payload.password)
//
//         store.dispatch(showLoader(false))
//
//         if (loginData.data.success) {
//             store.dispatch(getLogInAC())
//         } else {
//             alert(loginData.data.error)
//
//         }
//     } else {
//         next(action)
//     }
//
// }


export default authReducer;
