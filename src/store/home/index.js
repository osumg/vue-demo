import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  breadcrumbs: ['主体','用户']
}

const home = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default home
