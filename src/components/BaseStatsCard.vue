<script lang="ts">
import {PropType} from 'vue'
import {GenderStatList} from "../dummyData/stats";
import {getImageUrl} from '../helperFunctions/imageURLBuilder.ts'

export default {
  props: {
    shade: String,
    title: String,
    count: String,
    description: {
      type: Array as PropType<GenderStatList>,
      default: () => [] ,
    },
    image: String
  },
  setup(props) {
    const {shade, title, count, description, image} = props;

    return {
      shade,
      title,
      count,
      description,
      image,
      getImageUrl,
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
        <img :src="getImageUrl('png/'+`${image}`)" alt=""/>
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

.stats-card--left {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
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
