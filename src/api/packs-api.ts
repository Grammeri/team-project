import { ResponseErrorType } from '../app/app-api'

import { instanceLocal } from './instance-api'

export const packsAPI = {
  getPacks() {
    return instanceLocal.get<GetPackType[]>('/cards/pack')
  },
  createNewPack(payload: CreateNewPackType) {
    return instanceLocal.post<GetPackType[]>('cards/pack', payload)
  },
  deletePack() {
    return instanceLocal.delete<GetPackType[]>('auth/me')
  },
  updatePack(payload: UpdatePackType) {
    return instanceLocal.put<GetPackType[]>('auth/register', payload)
  },
}

type GetPackType = {
  _id: number
  user_id: number
  user_name: string
  private: boolean
  name: string
  path: ''
  grade: number
  shots: number
  cardsCount: number
  type: string
  rating: number
  created: string
  updated: string
  more_id: number
  __v: number
  deckCover: string
}

type CreateNewPackType = {
  cardsPack: {
    name: string
    deckCover?: string
    private: boolean
  }
}

type UpdatePackType = {
  cardsPack: {
    id: number
    name: string
  }
}
