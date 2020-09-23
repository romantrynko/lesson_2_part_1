import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    changeFooter(value) {
      this.$emit('changeFooter', value)
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
