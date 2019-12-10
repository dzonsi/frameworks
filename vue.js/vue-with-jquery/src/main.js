import Vue from 'vue'
// vue.config.js imports jQuery globaly
import 'jquery-ui/ui/widgets/datepicker.js'
import 'jquery-ui/ui/widgets/slider.js'
import 'jquery-ui-timepicker-addon'

import 'jquery-ui/themes/base/all.css'
import 'jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.min.css'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
