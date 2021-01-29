import {authAPI} from "../../Api/api";

export const IS_LOADING = 'IS_LOADING'
export const SHOW_SIGNUP_FORM = 'SHOW_SIGNUP_FORM'
export const IS_AUTHORIZED = 'LOGINED_SUCCESSFULLY'
export const SET_USER_DATA = 'SET_USER_DATA'
export const GET_LOGOUT = 'GET_LOGOUT'

export let initialState = {
    isLoading: false,
    showSignUpForm: false,
    isAouthorized: false,
    email: null,
    password: null
}
export const authReducer = (state=initialState, action) => {
    debugger

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
        case IS_AUTHORIZED:
            return {
                ...state,
                isAouthorized: action.payload
            }
        case SET_USER_DATA:
            return {
                ...state,
                isAouthorized: action.payload.isAuth,
                email: action.payload.email,
                password: action.payload.password
            }
        case GET_LOGOUT:
            return {
                ...state,
                isAouthorized: action.payload
            }

        default:
            return state

    }
}

export const showLoader = (payload) => ({type: IS_LOADING, payload})
export const loginFormToggle = (payload) => ({type: SHOW_SIGNUP_FORM, payload})
export const setUserData = (email, password, isAuth) => ({type: SET_USER_DATA, payload:{email, password, isAuth}})
export const getLogOut = (payload) => ({type: GET_LOGOUT, payload})

//export const setLoginSuccess = (payload) => ({type: LOGINED_SUCCESSFULLY, payload})


export const getLoginThunkCreator = (email, password, login) =>
    async (dispatch) => {
        dispatch(showLoader(true))

        let loginData = await authAPI.getLogin(email, password)

        dispatch(showLoader(false))
        //console.log(loginData)

        if (loginData.data.success === true) {
            //login(email.value, password.value)
            dispatch(setUserData(email, password, true))
        } else {
            alert(loginData.data.error)
            dispatch(setUserData(email, password, false))
        }
}

export default authReducer;
