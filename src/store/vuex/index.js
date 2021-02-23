import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  count: 0
}

const home = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default home
