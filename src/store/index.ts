import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { user } from './user/index'

const store: StoreOptions<RootState> = {
  modules: {
    user,
  },
  state: {},
  mutations: {},
}

export default new Vuex.Store<RootState>(store)
