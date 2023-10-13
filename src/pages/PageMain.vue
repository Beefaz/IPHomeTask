<script lang="ts">
import BaseNavbar from "../components/BaseNavbar.vue";
import BaseSideBar from "../components/BaseSideBar.vue";
import BaseSidebarSection from "../components/BaseSidebarSection.vue";
import BaseCard from "../components/BaseCard.vue";


export default {
  components: {BaseNavbar, BaseSideBar, BaseSidebarSection, BaseCard},
  setup() {
    return {}
  }
}
</script>

<template>
  <div class="page-wrapper">
    <BaseNavbar></BaseNavbar>
    <BaseSideBar>
      <BaseSidebarSection section-label="main menu"/>
    </BaseSideBar>
    <BaseCard></BaseCard>
  </div>
</template>

<style scoped>
.page-wrapper {
  display: grid;
  grid-template-areas:
    "aside navbar"
    "aside main";
}

.page-wrapper::v-deep .aside {
  grid-area: aside;
}

.page-wrapper::v-deep .navbar {
  grid-area: navbar;
}

.page-wrapper::v-deep .card {
  grid-area: main;
}
</style>
