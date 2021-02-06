import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

import VueGtag from "vue-gtag";

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "G-NPL6VWZH51" } // Google Analytics Tag
}, router);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
