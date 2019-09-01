import Vue from 'vue';
import App from './App.vue';

import VueMask from 'v-mask';
Vue.use(VueMask);

import Select2 from 'v-select2-component';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faRunning, faClock, faRoute } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRunning, faClock, faRoute)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Select2);
Vue.component('Select2', Select2);


new Vue({
  render: h => h(App),
}).$mount('#app');


// Ведущие нули var.pad()
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}
