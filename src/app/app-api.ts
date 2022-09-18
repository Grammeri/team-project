import axios, { AxiosResponse, ResponseType } from 'axios'

let instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
  withCredentials: true,
})

export const authAPI = {
  login(payload: LoginParamsType) {
    return instance.post<LoginParamsType, AxiosResponse<LoginType>>('/auth/login', payload)
  },
  authMe() {
    return instance.post<ResponseType>('auth/me')
  },
  logout() {
    return instance.delete<ResponseType>('auth/me')
  },
  register(payload: RegisterType) {
    return instance.post<RegisterType>('auth/register', payload)
  },
  update(payload: UpdateType) {
    return instance.post<UpdateType>('auth/me', payload)
  },
  forget(payload: ForgetType) {
    return instance.post<ForgetType>('auth/forgot', payload)
  },
  newPass(payload: NewPassType) {
    return instance.post<NewPassType>('auth/set-new-password', payload)
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
