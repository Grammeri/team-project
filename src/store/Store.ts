
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'

let RootReducer = combineReducers({
    // flashCardReducer: flashCardReducer
})

export type RootReducerType = ReturnType<typeof RootReducer>

export let store = createStore(RootReducer,applyMiddleware(thunk))
export type AppDispatch = typeof store.dispatch


export type RootState = ReturnType<typeof store.getState>


export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
    >
