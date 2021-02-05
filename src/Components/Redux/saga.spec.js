import {recordSaga} from "../../helpers/record-saga";
import {loginSaga} from "./sagas";
import {authAPI} from "../../Api/api";
import {authenticate, LOG_IN} from "./auth-reducer";


jest.mock('../../Api/api', () => ({authAPI: jest.fn(() => true)}))

describe('authSaga', () => {
    describe('#AUTH', () => {
        it('auth by api', async () => {
            const dispatched = await recordSaga(
                loginSaga,
                authenticate('login', 'password')
            )
            expect(dispatched).toEqual([
                {type: LOG_IN}
            ])
        })
    })
})
