import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-http-260a5.firebaseio.com/'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.filter('textToUpperCase', value => {
  return value ? value.toUpperCase() : ''
})
Vue.filter('snippet', value => {
  return value ? value.slice(0, 100) + '...' : ''
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
