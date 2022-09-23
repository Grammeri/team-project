import { Dispatch } from 'redux'

import { authAPI, LoginParamsType, RegisterType } from '../../app/app-api'
import { SetAppIsInitializedType } from '../../app/app-reducer'
import { AppThunk } from '../../store/Store'

const initialState = {
  isLoggedIn: false,
  isRegistered: false,
}

type InitialStateType = typeof initialState

export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'login/SET-IS-LOGGED-IN':
      return { ...state, isLoggedIn: action.value }
    case 'APP/SET-IS-REGISTERED':
      return { ...state, isRegistered: action.isRegistered }
    default:
      return state
  }
}

// actions
export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'login/SET-IS-LOGGED-IN', value } as const)
export const setAppisRegisteredAC = (isRegistered: boolean) =>
  ({ type: 'APP/SET-IS-REGISTERED', isRegistered } as const)

// thunks
export const loginTC =
  (data: LoginParamsType): AppThunk =>
  (dispatch: Dispatch<ActionsType>) => {
    /*   dispatch(setAppStatusAC('loading'))*/
    authAPI.login(data).then(res => {
      /*  dispatch(setAppStatusAC('succeeded'))*/
      dispatch(setIsLoggedInAC(true))
      debugger
    })
  }

export const logoutTC = (): AppThunk => (dispatch: Dispatch<ActionsType>) => {
  /*   dispatch(setAppStatusAC('loading'))*/
  authAPI.logout().then(res => {
    /*  dispatch(setAppStatusAC('succeeded'))*/
    dispatch(setIsLoggedInAC(false))
  })
}
export const registerTC =
  (payload: RegisterType): AppThunk =>
  (dispatch: Dispatch<ActionsType>) => {
    /*   dispatch(setAppStatusAC('loading'))*/
    authAPI
      .register(payload)
      .then(res => {
        /*  dispatch(setAppStatusAC('succeeded'))*/
        dispatch(setAppisRegisteredAC(true))
      })
      .finally(() => {
        dispatch(setAppisRegisteredAC(true))
      })
  }

// types
export type setIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>
export type setAppisRegisteredActionType = ReturnType<typeof setAppisRegisteredAC>

export type ActionsType =
  | setIsLoggedInActionType
  | SetAppIsInitializedType
  | setAppisRegisteredActionType
