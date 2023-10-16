<script lang="ts">
import {toRefs} from 'vue'

export default {
  props: {
    title: String
  },
  setup(props) {
    const {title} = toRefs(props);

    return {
      title,
    }
  }
}
</script>

<template>
  <div class="list-card border-rounded">
    <div class="list-card--header">
      <h2>{{ title }}</h2>
      <slot name="header-left"/>
    </div>
    <div class="list-card--content">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.list-card {
  height: 100%;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 16px;
  position: relative;
  overflow: hidden;
}

.list-card--header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.list-card--header h2 {
  margin: unset;
  color: #161E54;
  font-family: Poppins, serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}

.list-card--content {
  margin-bottom: 39px;
  overflow-y: auto;
}

.list-card:deep(.list-item-group--title) {
  margin-bottom: 4px;
  color: #686868;
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: Poppins, serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
}

.list-card--content, .list-card:deep(.list-item-group--items) {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
