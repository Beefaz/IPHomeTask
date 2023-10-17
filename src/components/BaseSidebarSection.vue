<script lang="ts">
import {PropType, toRefs} from 'vue'
import {LinkList} from "../dummyData/menu";
import {getImageUrl} from '../helperFunctions/imageURLBuilder.ts'

export default {
  props: {
    label: String,
    links: {
      type: Array as PropType<LinkList>,
      default: () => [],
    },
  },
  setup(props) {
    const {label, links} = toRefs(props);

    return {
      label,
      links,
      getImageUrl,
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
      <li
          class="aside-section--links"
          v-for="({image, text}, index) in links"
          :key="index"
      >
        <a>
          <!--taupiau laiką, įdėjau kaip image, galima pekeisti loaderiu/atskiru failu su importais per v-html arba dėti svg tiesiai į čia, bet užterš kodą...-->
          <img :src="getImageUrl('svg/'+`${image}`)" alt=""/>
          <span class="md-visible">{{ text }}</span>
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
  justify-content: center;
  flex: 1;
  color: #686868;
  text-transform: uppercase;
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: Roboto, serif;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  line-height: 18px;
}

@media only screen and (min-width: 834px) {
  .aside-section--label {
    justify-content: flex-start;
    font-size: 12px;
  }
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
  justify-content: center;
  gap: 24px;
  color: #686868;
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: Poppins, serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

@media only screen and (min-width: 834px) {
  a {
    justify-content: flex-start;
  }
}

a:hover {
  color: #FF5151;
  cursor: pointer;
}

a span {
  display: none;
}

@media only screen and (min-width: 834px) {
  a span {
    display: inline;
  }
}

img {
  width: 18px;
  height: 18px;
}
</style>
