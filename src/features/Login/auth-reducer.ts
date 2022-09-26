import { log } from 'util'

import { Dispatch } from 'redux'

import { authAPI, LoginParamsType, NewPassType, RegisterType } from '../../app/app-api'
import { setAppisInitialezedAC, SetAppIsInitializedType } from '../../app/app-reducer'
import { AppThunk } from '../../store/Store'

const initialState = {
  isLoggedIn: false,
  isRegistered: false,
  password: '',
  info: '',
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
      return { ...state, isRegistered: action.value }
    case 'APP/CREATE-NEW-PASSWORD':
      return { ...state, info: action.info }
    default:
      return state
  }
}

// actions
export const setIsLoggedInAC = (value: boolean) =>
  ({ type: 'login/SET-IS-LOGGED-IN', value } as const)
export const setAppisRegisteredAC = (value: boolean) =>
  ({ type: 'APP/SET-IS-REGISTERED', value } as const)
export const CreateNewPasswordAC = (info: string) =>
  ({ type: 'APP/CREATE-NEW-PASSWORD', info } as const)

// thunks
export const loginTC =
  (data: LoginParamsType): AppThunk =>
  (dispatch: Dispatch<ActionsType>) => {
    /*   dispatch(setAppStatusAC('loading'))*/
    authAPI.login(data).then(res => {
      /*  dispatch(setAppStatusAC('succeeded'))*/
      dispatch(setIsLoggedInAC(true))
    })
  }

export const logoutTC = (): AppThunk => (dispatch: Dispatch<ActionsType>) => {
  /*   dispatch(setAppStatusAC('loading'))*/
  console.log('beforeAPI')
  authAPI.logout().then(res => {
    /*  dispatch(setAppStatusAC('succeeded'))*/
    /*dispatch(setAppisInitialezedAC(false))*/
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

export const forgotPassTC =
  (email: string): AppThunk =>
  (dispatch: Dispatch<ActionsType>) => {
    /*   dispatch(setAppStatusAC('loading'))*/
    // dispatch(setAppisInitialezedAC(true))
    dispatch(setIsLoggedInAC(true))
    authAPI
      .forget({
        email,
        message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/#/createNewPassword/$token$'>
link</a>
</div>`,
      })

      .then(res => {
        /*  dispatch(setAppStatusAC('succeeded'))*/
        /* dispatch(setIsLoggedInAC(true))*/
        console.log(res.config.data.info) //откуда config? зачем это писать
      })
      .catch(err => console.log(err))
  }

export const createNewPasswordTC =
  (password: string, resetPasswordToken: string): AppThunk =>
  (dispatch: Dispatch<ActionsType>) => {
    /*   dispatch(setAppStatusAC('loading'))*/
    /*dispatch(setAppisInitialezedAC(true))*/
    authAPI
      .newPass(password, resetPasswordToken)
      .then(res => {
        /*  dispatconsole.log('thunk')ch(setAppStatusAC('succeeded'))*/
        dispatch(CreateNewPasswordAC(res.data.password))
        /*dispatch(setIsLoggedInAC(true))*/
      })
      .finally(() => {
        /* dispatch(setAppisInitialezedAC(true))*/
      })
  }

// types
export type setIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>
export type setAppisRegisteredActionType = ReturnType<typeof setAppisRegisteredAC>
export type CreateNewPasswordActionType = ReturnType<typeof CreateNewPasswordAC>

export type ActionsType =
  | setIsLoggedInActionType
  | SetAppIsInitializedType
  | setAppisRegisteredActionType
  | CreateNewPasswordActionType
