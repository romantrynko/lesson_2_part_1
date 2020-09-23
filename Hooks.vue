<template>
  <div>
  <h1>{{msg}}</h1>
  <button @click="msg = 'Changed'">Update Title</button>
  <button @click='destroy'>Destroy</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
     msg: 'Vue Hooks'
    }
  },

  methods: {
   destroy() {
     this.$destroy();
   }
  },

  beforeCreate() {
    console.log('before mount');
  },

  created() {
    console.log('created');
  },

  beforeMount() {
    console.log('beforeMount');
  },

  mounted() {
    console.log('mounted');
  },

  beforeUpdate() {
    console.log('beforeUpdate');
  },

  updated() {
    console.log('updated');
  },

  beforeDestroy() {
    console.log('beforeDestroy');
  },

  destroyed() {
    console.log('destroyed');
  }
}
</script>

<style>

</style>