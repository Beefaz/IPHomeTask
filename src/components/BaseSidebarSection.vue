<script lang="ts">
import {toRefs} from 'vue'

export default {
  props: {
    label: String,
    links: Array,
  },
  setup(props) {
    const {label, links} = toRefs(props);

    return {
      label: label,
      links: links
    }
  }
}
</script>

<template>
  <div class="aside-section">
    <div class="aside-section--label">
      {{ label }}
    </div>
    <ul>
      <li class="aside-section--links" v-for="({image, text}) in links">
        <a :key="index">
          <!--taupiau laiką, įdėjau kaip image, galima pekeisti loaderiu/atskiru failu su importais per v-html arba dėti svg tiesiai į čia, bet užterš kodą...-->
          <img :src="`${'src/assets/images/svg/'+ image}`" alt=""/>
          <span>{{ text }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.aside-section {
  width: 100%;
}

.aside-section--label {
  padding: 10px 30px;
  display: flex;
  flex: 1;
  color: #686868;
  text-transform: uppercase;
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: Roboto, serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
}

ul {
  all: unset;
  list-style: none;
}

a {
  padding: 16px 30px;
  display: flex;
  flex: 1;
  align-items: center;
  gap: 24px;
  color: #686868;
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: Poppins, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

a:hover {
  color: #FF5151;
  cursor: pointer;
}

img {
  width: 18px;
  height: 18px;
}
</style>
