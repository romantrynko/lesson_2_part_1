<template>
  <div>
  <Header></Header>
  <FrameworkList @updateFooter="updateFooter = $event"></FrameworkList>
  <Footer :updateFooter="updatedFooter"></Footer>
  </div>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FrameworkList from "@/components/Frameworks/FrameworkList";


export default {
  name: 'App',

  components: {
    Header,
    Footer,
    FrameworkList,
    
    },

    data() {
      return {
        updatedFooter: ''
      }
    },

    methods: {
      updateFooter(event) {
        console.log(event);
        this.updatedFooter = event
      }
    }
  }

</script>

<style>

</style>