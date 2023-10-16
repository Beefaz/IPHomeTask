<script lang="ts">
import {toRefs} from 'vue'
import {GenderStatList} from "../dummyData/stats";

export default {
  props: {
    shade: String,
    title: String,
    count: String,
    description: [] as GenderStatList,
    image: String
  },
  setup(props) {
    const {shade, title, count, description, image} = toRefs(props);

    return {
      shade,
      title,
      count,
      description,
      image
    }
  }
}
</script>

<template>
  <div class="stats-card border-rounded">
    <div class="stats-card--left">
      <h2 class="title">{{ title }}</h2>
      <div class="count">{{ count }}</div>
      <div
          class="description"
      >
        <span
            v-for="({text}, index) in description"
            :key="index"
        >
        {{ text }}
        </span>
      </div>
    </div>
    <div class="stats-card--right">
      <div class="image-container">
        <img :src="`${'src/assets/images/png/'+ image}`" alt=""/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-card {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.title {
  margin: unset;
  color: #161E54;
  font-family: Poppins, serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
}

.count {
  margin-top: 22px;
  color: #161E54;
  font-family: Poppins, serif;
  font-size: 48px;
  font-weight: 500;
  line-height: 28px;
}

.description {
  margin-top: 32px;
  color: #686868;
  font-family: Roboto, serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  flex-direction: column;
}

.stats-card--right {
  display: flex;
  flex-direction: column;
}

.image-container {
  height: 100%;
  display: flex;
}

.image-container img {
  object-fit: contain;
}
</style>
