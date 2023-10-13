<script lang="ts">
import BaseSidebarSection from "./BaseSidebarSection.vue";
import {menuData} from "../dummyData/menu.js"

export default {
  components: {BaseSidebarSection},
  setup() {
    return {
      menuData: menuData
    }
  }
}
</script>

<template>
  <aside class="aside">
    <div class="logo">
      <span class="text">WeHR</span>
    </div>
    <template v-for="({label, links}) in menuData">
      <BaseSidebarSection :label="label" :links="links"/>
    </template>
  </aside>
</template>

<style scoped>
.aside {
  display: flex;
  width: 242px;
  height: 100vh;
  padding: 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 39px;
  flex-shrink: 0;
  background: #E0E0E0;
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
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
}
</style>
