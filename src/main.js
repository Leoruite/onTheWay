// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Axios from 'axios'
import ElementUI from 'element-ui'
import store from "./store"
import VueScroller from 'vue-scroller'

//引用flexible
import 'lib-flexible/flexible'

Vue.use(ElementUI)
Vue.prototype.$axios = Axios
Vue.use(VueAwesomeSwiper)
Vue.use(VueScroller)
Vue.prototype.HOST = '/api'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
