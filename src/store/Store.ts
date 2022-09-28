import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { ActionsType, appReducer } from '../app/app-reducer'
import { authReducer } from '../features/Login/auth-reducer'

let RootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
})

export type RootStateType = ReturnType<typeof RootReducer>

export let store = createStore(RootReducer, applyMiddleware(thunk))

type RootReducerType = ActionsType

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
