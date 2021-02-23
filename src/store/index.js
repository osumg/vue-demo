import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import home from './home'

const modules = {
  home
}

const store = new Vuex.Store({
  modules
})

export default store;
