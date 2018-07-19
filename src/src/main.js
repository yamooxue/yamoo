// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.component('head-bar', resolve => require(['./components/head.vue'], resolve))
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
Vue.use(app)
