import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import home from './home'
import vuex from './vuex';

const modules = {
  home,
  vuex
}

const store = new Vuex.Store({
  modules
})

export default store;
