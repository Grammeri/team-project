import { AxiosResponse } from 'axios'

import { instanceLocal } from '../../api/instance-api'
import { LoginType, UpdateType } from '../../app/app-api'

export const userAPI = {
  user(userData: LoginType) {
    return instanceLocal.post<UpdateType, AxiosResponse<LoginType>>('/auth/login', userData)
  },
}
