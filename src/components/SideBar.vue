<script lang="ts">
import SidebarSection from "./SidebarSection.vue";
import {menuDataList} from "../dummyData/menu.ts"

export default {
  components: {SidebarSection},
  setup() {
    return {
      menuDataList
    }
  }
}
</script>

<template>
  <aside class="aside">
    <div class="logo">
      <span class="text">WeHR</span>
    </div>
    <template v-for="({label, links}) in menuDataList">
      <SidebarSection
          :label="label"
          :links="links"
      />
    </template>
  </aside>
</template>

<style scoped>
.aside {
  padding: 20px 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 39px;
  flex-shrink: 0;
  background: #E0E0E0;
  display: flex;
}

.logo {
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.text {
  color: #000;
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: Poppins, serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 42px;
}

@media only screen and (min-width: 834px) {
  .text {
    font-size: 36px;
  }
}
</style>
