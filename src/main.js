import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import ViewUI from 'view-design';
import ECharts from 'vue-echarts'
import 'view-design/dist/styles/iview.css';

import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
Vue.component('v-chart', ECharts)

Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
