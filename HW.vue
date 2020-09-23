<template>
  <div>
    <input type="text" v-model="text">
    <button @click="add" v-if="arr.length < 5">Add</button>
    <ul>
      <li v-for="(item, i) in arr" :key="i">
        <span>{{item}}</span>
        <button @click="remove(i)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HW',
  data() {
    return{
      text: '',
      arr: []
    }
  },

  methods: {
    add() {
      this.arr.push(this.text);
      this.text = ''
    },

    remove(i) {
      this.arr.splice(i, 1)
    }
  }
}
</script>

<style>

</style>