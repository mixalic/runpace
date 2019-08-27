import Vue from 'vue'
import Select2 from 'v-select2-component'
import App from './App.vue'

Vue.use(Select2);
Vue.component('Select2', Select2);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
