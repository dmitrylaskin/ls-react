import authReducer, {
    GET_LOGOUT,
    initialState,
    IS_AUTHORIZED,
    IS_LOADING,
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
            isAouthorized: false,
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
            isAouthorized: false,
            email: null,
            password: null
        })

    })
})
describe('auth reducer', () => {
    it('Авторизует пользователя', () => {
        const result = authReducer(initialState, {
            type: IS_AUTHORIZED,
            payload: true
        })
        expect(result).toEqual({
            isLoading: false,
            showSignUpForm: false,
            isAouthorized: true,
            email: null,
            password: null
        })

    })
})
//будет удалено
describe('auth reducer', () => {
    it('Устанавливает пользовательские данные', () => {
        const result = authReducer(initialState, {
            type: SET_USER_DATA,
            payload: {
                isAuth: true,
                email: 'example@mail.com',
                password: 'my-password-123'
            }
        })
        expect(result).toEqual({
            isLoading: false,
            showSignUpForm: false,
            isAouthorized: true,
            email: 'example@mail.com',
            password: 'my-password-123'
        })

    })
})

describe('auth reducer', () => {
    it('Осуществляет выход пользлвателя', () => {
        const result = authReducer(initialState, {
            type: GET_LOGOUT,
            payload: true
        })
        expect(result).toEqual({
            isLoading: false,
            showSignUpForm: false,
            isAouthorized: true,
            email: null,
            password: null
        })

    })
})
