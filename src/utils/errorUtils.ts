import { Dispatch } from 'redux'

import { setAppErrorAC, SetAppErrorActionType } from '../app/app-reducer'

export const handleServerNetworkError = (
  dispatch: Dispatch<SetAppErrorActionType>,
  message: string
) => {
  dispatch(setAppErrorAC(message))
}
