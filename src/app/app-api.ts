import axios, { AxiosResponse, ResponseType } from 'axios'

import { instanceHeroku, instanceLocal } from '../api/instance-api'

export const authAPI = {
  login(payload: LoginParamsType) {
    return instanceLocal.post<LoginParamsType, AxiosResponse<LoginType>>('/auth/login', payload)
  },
  authMe() {
    return instanceLocal.post<ResponseType>('auth/me')
  },
  logout() {
    return instanceLocal.delete<ResponseType>('auth/me')
  },
  register(payload: RegisterType) {
    return instanceLocal.post<RegisterType>('auth/register', payload)
  },
  update(payload: UpdateType) {
    return instanceLocal.post<UpdateType>('auth/me', payload)
  },
  forget(payload: ForgetType) {
    return instanceHeroku.post<ForgetType>('auth/forgot', payload, { withCredentials: true })
  },
  newPass(password: string, resetPasswordToken: string) {
    console.log('api')

    return instanceLocal.post<NewPassType>('auth/set-new-password', {
      password,
      resetPasswordToken,
    })
  },
}

export type LoginParamsType = {
  email: string
  password: string
  rememberMe: boolean
}

export type RegisterType = {
  email: string
  password: string
}

export type UpdateType = {
  name: string
  avatar: '/'
}

export type ForgetType = {
  email: string
  message: string
}

export type NewPassType = {
  password: string
  resetPasswordToken: string
}

export type LoginType = {
  _id: string
  email: string
  name: string
  avatar?: string
  publicCardPacksCount: number
  // количество колод

  created: Date
  updated: Date
  isAdmin: boolean
  verified: boolean // подтвердил ли почту
  rememberMe: boolean

  error?: string
}
