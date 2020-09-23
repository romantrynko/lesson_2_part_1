<template>
  <div>
      <h1 ref="footer">Footer - {{updatedFooter}}</h1>
  </div>
</template>

<script>
import {eventBus} from "@/main"

export default {
    name: 'Footer',

    props: {
        updatedFooter: {
            type: String
        }
    },

    created(){
        eventBus.$on('changeFooter', (msg) => {
            this.$refs.footer.textContent = msg.text
        })
    }
}
</script>

<style scoped>
h1 {
    background-color: blueviolet;
}
</style>