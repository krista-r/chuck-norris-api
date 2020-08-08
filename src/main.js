import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import { store } from './store'

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  store,
  render: h => h(App),
})
