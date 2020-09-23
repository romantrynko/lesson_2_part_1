<template>
  <div>
      <h1 v-highlight='"blue"'>Header</h1>
      <h1>{{header | toLovercase | toUpercase}}</h1>
  </div>
</template>

<script>
export default {
    name: 'Header',

    data() {
      return {
        header: 'HEEEAADDDEERRRRR!!!!!!!!'
      }
    }
}
</script>

<style>

</style>