import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('highlight', {
  bind(el,binding,vnNode) {
    console.log(el, 'el');
    console.log(binding, 'binding');
    console.log(vnNode, 'vnNode');
    el.style.backgroundColor = binding.value
  }
});

Vue.filter('toLovercase', function (value) {
  return value.toLowercase()
})

Vue.filter('toUpercase', function (value) {
  return value.toUppercase()
})

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
