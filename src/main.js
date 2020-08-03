import Vue from 'vue'
import App from './App.vue'

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
Vue.use(VueFullPage);

import vueSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css' 
Vue.use(vueSwiper)

import './cmui.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
