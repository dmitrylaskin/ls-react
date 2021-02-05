import {runSaga} from 'redux-saga'

export const recordSaga = async (saga, initAction = null) => {
    const dispatched = []

    await runSaga({
        dispatched: (action) => dispatched.push(action),
        saga,
        initAction
    }).done
    return dispatched
}
