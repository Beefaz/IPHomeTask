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
      class="card"
      :style="{ background: backgroundColor }"
  >
    <slot name="card-content"/>
  </div>
</template>

<style scoped>
.card {
  padding: 16px 20px;
  border: 0.5px solid #E0E0E0;
  border-radius: 6px;
  background: #FFFFFF;
}
</style>
