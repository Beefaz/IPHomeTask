<script lang="ts">
import {toRefs} from 'vue'

export default {
  props: {
    backgroundColor: String
  },
  setup(props) {
    const {backgroundColor} = toRefs(props);

    return {
      backgroundColor: backgroundColor
    }
  }
}
</script>

<template>
  <div
      class="navbar">
  </div>
</template>

<style scoped>
.navbar {
  display: inline-flex;
  padding-left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
