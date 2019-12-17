import Vue from 'vue'
import App from './App.vue'
import router from './router'

// font awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

// router viwe page transition
import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)

// vueup - global notification popup
import VueUp from 'vueup'
Vue.use(VueUp)

// vue-progressbar
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '10px'
})

// vue-fullpage

import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
