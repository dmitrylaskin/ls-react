import appReducer, {initialState, SET_CURRENT_PAGE} from "./app-reducer";


describe("app reducer", () => {
    it('Устанавливает выьранную страницу', () => {
        const result = appReducer(initialState, {
            type: SET_CURRENT_PAGE,
            payload: 10
        });
        expect(result).toEqual({currentPage: 10})
    });
});
