import Vue from 'vue'
import App from './App.vue'
import TiUI from '../packages'
Vue.config.productionTip = false
Vue.use(TiUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
