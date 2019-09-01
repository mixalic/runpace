import Vue from 'vue'
import App from './App.vue'

import VueMask from 'v-mask'
Vue.use(VueMask);

import Select2 from 'v-select2-component'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Select2);
Vue.component('Select2', Select2);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
