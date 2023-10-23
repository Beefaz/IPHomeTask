<script lang="ts">

export default {
  props: {
    shade: String,
    title: String,
    count: String,
    description: String

  },
  setup(props) {
    const {shade, title, count, description} = props;

    return {
      shade,
      title,
      count,
      description
    }
  }
}
</script>

<template>
  <div class="news-card border-rounded" :class="[shade]">
    <h2 class="title">{{ title }}</h2>
    <div class="count">{{ count }}</div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<style scoped>
.news-card {
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.news-card.orange {
  background-color: #FFEFE7;
}

.news-card.blue {
  background-color: #E8F0FB;
}

.news-card.pink {
  background-color: #FDEBF9;
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
  color: #000000;
  font-family: Poppins, serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 28px;
}

.description {
  color: #686868;
  font-family: Roboto, serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px
}

.news-card.orange .description {
  color: #FF5151;
}

.news-card.blue .description {
  color: #3786F1;
}

.news-card.pink .description {
  color: #EE61CF;
}
</style>
