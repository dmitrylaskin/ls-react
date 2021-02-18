import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile/profile-reducer";
import authReducer from "./auth/auth-reducer";
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./sagas";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import mapReducer from "./map/map-reducer";

const sagaMiddleWare = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
    //whitelist: ['auth', 'ProfileData']
}

let rootReducer = combineReducers({
    ProfileData: profileReducer,
    auth: authReducer,
    orderData: mapReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk, sagaMiddleWare))
window.store = store

sagaMiddleWare.run(rootSaga)

export let persistor = persistStore(store)

export default store
