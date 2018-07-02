// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import util from './assets/js/util.js'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import './assets/sass/iconfont.css'
import './assets/sass/skin.scss'
import './assets/sass/base.scss'
import './assets/sass/login.scss'
import './assets/sass/home.scss'

Vue.use(ElementUI)

Vue.prototype.util = util

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
