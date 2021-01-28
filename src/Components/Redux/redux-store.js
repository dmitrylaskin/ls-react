import {createStore, combineReducers, applyMiddleware} from "redux";
import appReducer from "./app-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunk from 'redux-thunk'

let rootReducer = combineReducers({
    app: appReducer,
    ProfileData: profileReducer,
    auth: authReducer

})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
