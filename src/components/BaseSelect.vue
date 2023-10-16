<script lang="ts">
import {getImageUrl} from '../helperFunctions/imageURLBuilder.ts'

interface SelectOptionList {
  [index: number]: SelectOption
}

interface SelectOption {
  value: string | number,
  text: string,
}

export default {
  props: {
    selectList: {
      type: Array,
      default: ()=> [] as SelectOptionList,
    }
  },
  setup() {
    return {
      getImageUrl,
    }
  }
}
</script>

<template>
  <div class="select-container">
    <select @change="$emit('selected', $event.target.value)">
      <option selected value="000" hidden>Sort by</option>
      <option
          v-for="({value, text}, index) in selectList"
          :value="value"
          :key="index"
      >
        {{ text }}
      </option>
    </select>
    <img
        :src="getImageUrl('svg/arrow.svg')"
        alt=""
    >
  </div>

</template>

<style scoped>
.select-container {
  position: relative;
  display: flex;
  align-items: center;
}

select {
  width: 145px;
  padding: 2px 32px 3px 8px;
  color: #686868;
  font-family: Roboto, serif;
  font-size: 12px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #EFEFEF;
  background: #FFF;
  line-height: 28px;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

img {
  width: 18px;
  height: 18px;
  position: absolute;
  right: 6px;
}
</style>
