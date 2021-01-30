import {authenticate, authMiddleware} from "./auth-reducer";
import {authAPI} from "../../Api/api";

let loginSpy =  jest.spyOn(authAPI,'getLogin')


describe('authMiddleware', () => {

    describe('#AUTHENTICATE', () => {
        it('authenticate by api', async () => {
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                authenticate('test-login', 'test-pass')
            )
            expect(loginSpy).toBeCalledWith('test-login', 'test-pass')
        })
    })
})
