import Vue from 'vue'
import VueCustomProperties from '../'
import App from './App.vue'

Vue.use(VueCustomProperties)

new Vue({
  el: '#app',
  render: h => h(App)
})