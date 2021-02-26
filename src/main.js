import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import * as request from "network/request"

Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.baseURL = '/proxyurl'
axios.defaults.timeout = 5000

Vue.prototype.$request = request

new Vue({
  router,
  store,
  axios,
  render: h => h(App)//createElement
}).$mount('#app')
