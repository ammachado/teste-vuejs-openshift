import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Injeção de variáveis do config.js
Vue.prototype._env_ = window._env_
// Injeção de variáveis do config.js

new Vue({
  render: h => h(App),
}).$mount('#app')
