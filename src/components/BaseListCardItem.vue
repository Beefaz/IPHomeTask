<script lang="ts">
import {toRefs} from 'vue'

export default {
  props: {
    title: String,
    description: String,
    pinnable: Boolean,
    moreOptionsAvailable: Boolean,
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
  <div class="list-item">
    <div class="list-item--content">
      <h2 class="title">{{ title }}</h2>
      <div class="description">{{ description }}</div>
    </div>
    <div class="list-item--actions">
      <button
          v-if="pinnable"
          type="button"
      >
        <img src="src/assets/images/svg/pin.svg" alt=""/>
      </button>
      <button
          v-if="moreOptionsAvailable"
          type="button"
      >
        <img src="src/assets/images/svg/dots.svg" alt=""/>
      </button>
    </div>
  </div>
</template>

<style scoped>
.list-item {
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-radius: 6px;
  border: 0.5px solid #E0E0E0;
  background: #FAFAFA;
}

.list-item--content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.title {
  margin: unset;
  color: #161E54;
  font-family: Poppins, serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
}

.description {
  color: #686868;
  font-family: Roboto, serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
}

.list-item--actions {
  max-width: min-content;
  display: flex;
  align-items: center;
  gap: 10px;
}

.list-item--actions button {
  all: unset;
  width: 24px;
  height: 24px;
}

.list-item--actions button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
