import Vue from 'vue'
import Story from './Story.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Story),
}).$mount('#app')
