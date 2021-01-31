import {authenticate, authMiddleware} from "./auth-reducer";
import {authAPI} from "../../Api/api";


describe('authMiddleware', () => {

    describe('#AUTHENTICATE', () => {
        it('authenticate by api', async () => {
            const dispatch = jest.fn()

            let loginSpy =  jest.spyOn(authAPI,'getLogin').mockImplementation(() => ({data: {
                success: true
                }}))

            await authMiddleware({dispatch})()(
                authenticate('test-login', 'test-pass')
            )
            expect(loginSpy).toBeCalledWith('test-login', 'test-pass')
        })
    })
})
