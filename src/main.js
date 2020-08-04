import Vue from 'vue'
import App from './App.vue'

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

import 'fullpage.js/dist/fullpage.min.css';
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
Vue.use(VueFullPage);

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)


import './cmui.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
