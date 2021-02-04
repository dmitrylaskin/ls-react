import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import authReducer, {authMiddleware} from "./auth-reducer";
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./sagas";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleWare = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
}

let rootReducer = combineReducers({
    ProfileData: profileReducer,
    auth: authReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk, sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

export let persistor = persistStore(store)

export default store
