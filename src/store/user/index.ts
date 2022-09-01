import { Module } from 'vuex'
import { RootState } from '../types'
import { UserState } from './types'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

const state: UserState = {
  email: '',
  username: '',
}

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
