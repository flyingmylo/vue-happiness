// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import Axios from 'axios'
import EventHub from './libs/eventHub'
// import 'mint-ui/lib/style.css'

// console.info(EventHub)
Vue.config.productionTip = false
Vue.prototype.axios = Axios
window.EventHub = EventHub
Vue.use(MintUI)
Vue.use(router)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
