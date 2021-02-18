import profileReducer, {initialState, SET_PAYMENT_DATA} from "./profile-reducer";
describe("profile reducer", () => {
    it('Устанавливает платежные данные', () => {
        const result = profileReducer(initialState, {
            type: SET_PAYMENT_DATA,
            payload: {name: "ivan", month: "12", cardNumber: "0000", cvc: "123"}
        });
        expect(result).toEqual({name: "ivan", month: "12", cardNumber: "0000", cvc: "123"})
    });
});
