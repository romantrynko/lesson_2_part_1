<template>
  <div>
      <h5>{{title}} - {{frameTitle}}</h5>
      <!-- <h3>FrameworkItem</h3> -->
      <!-- <span>{{framework}}</span> -->
      <p>{{framework.name}} - {{framework.difficulty}}</p>
      <button @click="editTitle">Edit title</button>
      <button @click="completeCourse">Complete</button>
      <button @click="editFooter">Edit footer</button>
  </div>
</template>

<script>
import {eventBus} from "@/main";

export default {
    name: 'FrameworkItem',

    props: {
        framework: {
            type: Object,
            required: true,
            default: null
        },

        title: {
            type: String,
            default: 'Frame'
        }
    },

    data() {
        return{
            frameTitle: this.title
        }
    },

    methods: {
        editTitle() {
            // this.title = "New title"
            // const value = 'New title'
            this.$emit('updateTitle', 'Title was updated')
        },

        completeCourse() {
            this.framework.completed = true
        },

        editFooter() {
            const value = 'UpdateFooter';
            const obj = {
                text: 'UpdateFooter',
                color: 'red'
            }
            this.$emit('updateFooter', value);

            // eventBus.$emit('footerWasEdited', obj);

            eventBus.changeFooter(obj)
        }
    }
}
</script>

<style>

</style>