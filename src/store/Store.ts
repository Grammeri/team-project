import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { appReducer } from '../app/app-reducer'
import { ActionsType, authReducer } from '../features/Login/auth-reducer'

let RootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
})

export type RootReducerType = ReturnType<typeof RootReducer>

export let store = createStore(RootReducer, applyMiddleware(thunk))

type AppActionsType = ActionsType

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionsType>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
