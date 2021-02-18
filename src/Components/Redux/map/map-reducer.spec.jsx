import mapReducer, {SET_ADDRESSES, SET_COORDINATES} from "./map-reducer";


let coordinates = [[30.316273,59.940578],[30.316589,59.940495]]

let initialState = {
    addresses: null,
    coordinates: [],
}
describe('map reducer', () => {
    it('should be returned the initial state', () => {
        expect(mapReducer(undefined, {})).toEqual(initialState)
    })
    it('SET_COORDINATES should be handled', () => {
        expect(mapReducer(initialState, {type: SET_COORDINATES, payload:coordinates})).toEqual(
            {
                addresses: null,
                coordinates: [...coordinates],
            }
        )
    })
})
