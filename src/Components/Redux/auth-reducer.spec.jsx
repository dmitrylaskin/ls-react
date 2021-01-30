import authReducer, {
    GET_LOGOUT,
    initialState,
    IS_AUTHORIZED,
    IS_LOADING, LOG_IN, LOG_OUT,
    SET_USER_DATA,
    SHOW_SIGNUP_FORM
} from "./auth-reducer";
describe("auth reducer", () => {
    it('Показывает процесс загрузки', () => {
        const result = authReducer(initialState, {
            type: IS_LOADING,
            payload: true
        });
        expect(result).toEqual({
            isLoading: true,
            showSignUpForm: false,
            isLoggedIn: false,
            email: null,
            password: null
        })
    });
});
describe('auth reducer', () => {
    it('Переключает форму логина на регистацию', () => {
        const result = authReducer(initialState, {
            type: SHOW_SIGNUP_FORM,
            payload: false
        })
        expect(result).toEqual({
            isLoading: false,
            showSignUpForm: false,
            isLoggedIn: false,
            email: null,
            password: null
        })

    })
})
describe('auth reducer', () => {
    it('Авторизует пользователя', () => {
        const result = authReducer(initialState, {
            type: LOG_IN,
            payload: true
        })
        expect(result).toEqual({
            isLoading: false,
            showSignUpForm: false,
            isLoggedIn: true,
            email: null,
            password: null
        })

    })
})
//будет удалено


describe('auth reducer', () => {
    it('Осуществляет выход пользлвателя', () => {
        const result = authReducer(initialState, {
            type: LOG_OUT,
            payload: true
        })
        expect(result).toEqual({
            isLoading: false,
            showSignUpForm: false,
            isLoggedIn: false,
            email: null,
            password: null
        })

    })
})
