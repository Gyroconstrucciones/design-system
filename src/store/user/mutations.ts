import { MutationTree } from 'vuex'
import { UserMutations } from './enums'
import { UserState } from './types'

export const mutations: MutationTree<UserState> = {
  [UserMutations.SET_USER_EMAIL](state: UserState, payload: any): void {
    state.email = payload
  },
}
