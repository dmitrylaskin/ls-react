import {coordinatesSaga, coordinatesWatcher} from "./sagas";
import {mapAPI} from "../../Api/api";
import runSaga from 'redux-saga'
import {takeEvery} from "@redux-saga/core/effects";
import {COORDINATES_REQUEST} from "./map-reducer";

let coordinates = [[30.316273,59.940578],[30.316589,59.940495]]

describe('coordinatesSaga saga', () => {
    let gen = coordinatesWatcher()
    it('should wait for the last call', () => {
        expect(gen.next().value).toEqual(takeEvery(COORDINATES_REQUEST, coordinatesSaga))
    })
    it('should called one time', () => {
        expect(gen.next().done).toBeTruthy()
    })
    it('should call api sagaWatcher', async () => {
        let requestCoordinates = jest
            .spyOn(mapAPI, 'getCoordinates')
            .mockImplementation(() => Promise.resolve({coordinates}))
        let dispatched = []
        await runSaga({
            dispatch: (action) => dispatched.push(action)
        }, coordinatesSaga)

        expect(requestCoordinates).toHaveBeenCalledTimes(1)
    })
})
