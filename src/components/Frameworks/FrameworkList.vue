<template>
  <div>
    <h2>FrameworkList</h2>

    <div v-for="(framework, i) in frameworks" :key="i">
      <div :class="framework.completed ? 'green' : 'red'">
        <FrameworkItem 
            :title="title" 
            :framework="framework" 
            @updateTitle="title = $event" 
            @updateFooter="updateFooter">
        </FrameworkItem>
      </div>
    </div>
  </div>
</template>

<script>
import FrameworkItem from "@/components/Frameworks/FrameworkItem";

export default {
  name: "FrameworkList", 

  components: {
    FrameworkItem,
  },

  data() {
    return {
      title: "FrameWork",
      frameworks: [
        {
          name: "Vue",
          difficulty: "easy",
          completed: false,
        },
        {
          name: "React",
          difficulty: "medium",
          completed: false,
        },
        {
          name: "Angular",
          difficulty: "hard",
          completed: false,
        },
      ],
    };
  },

  methods: {
    updateTitle(event) {
      console.log(event);
      this.title = event;
    },

    updateFooter(event) {
        this.$emit('updateFooter', event)
    }
  },
};
</script>

<style>
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.red {
  background-color: red;
}
</style>