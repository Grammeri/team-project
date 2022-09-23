/*import {setIsLoggedInAC} from "../features/Login/auth-reducer.ts";
import {authAPI} from "../api/todolists-api";*/
import { Dispatch } from 'redux'

import { setIsLoggedInAC, setIsLoggedInActionType } from '../features/Login/auth-reducer'
import { AppThunk } from '../store/Store'

import { authAPI } from './app-api'
/*import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";*/

const initialState: InitialStateType = {
  status: 'idle',
  error: null,
  isInitialized: false,
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
  // происходит ли сейчас взаимодействие с сервером
  status: RequestStatusType
  // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
  error: string | null
  isInitialized: boolean
}

export const appReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return { ...state, status: action.status }
    /*        case 'APP/SET-ERROR':
            return {...state, error: action.error}*/
    case 'APP/SET-IS-INITIALIZED':
      return { ...state, isInitialized: action.isInitialized }
    default:
      return { ...state }
  }
}

/*export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)*/
export const setAppStatusAC = (status: RequestStatusType) =>
  ({ type: 'APP/SET-STATUS', status } as const)
export const setAppisInitialezedAC = (isInitialized: boolean) =>
  ({ type: 'APP/SET-IS-INITIALIZED', isInitialized } as const)
/*export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>*/
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppIsInitializedType = ReturnType<typeof setAppisInitialezedAC>

export const initializeAppTC = (): AppThunk => (dispatch: Dispatch<ActionsType>) => {
  authAPI
    .authMe()
    .then(res => {
      /*dispatch(setAppStatusAC('loading'))
        if (res.data.resultCode === 0) {*/
      dispatch(setIsLoggedInAC(true))
      /* dispatch(setAppStatusAC('succeeded'))
        } else {
            handleServerAppError(res.data, dispatch);
        }*/
    })
    /* .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })*/
    .finally(() => {
      dispatch(setAppisInitialezedAC(true))
    })
}

export type ActionsType = SetAppStatusActionType | setIsLoggedInActionType | SetAppIsInitializedType