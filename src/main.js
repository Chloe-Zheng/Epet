// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './mock/mockSever'
import VueScroller from 'vue-scroller'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueScroller)
Vue.use(MintUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
