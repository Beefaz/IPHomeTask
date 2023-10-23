<script lang="ts">
import BaseNavbar from "../components/BaseNavbar.vue";
import BaseSideBar from "../components/BaseSideBar.vue";
import BaseNewsCard from "../components/BaseNewsCard.vue";
import BaseStatsCard from "../components/BaseStatsCard.vue";
import BaseListCard from "../components/BaseListCard.vue";
import BaseListCardItem from "../components/BaseListCardItem.vue";
import BaseListButton from "../components/BaseListButton.vue";
import BaseActivityCard from "../components/BaseActivityCard.vue";
import {news} from "../dummyData/news.ts";
import {stats} from "../dummyData/stats.ts";
import {announcements} from "../dummyData/announcements.ts";
import {schedule} from "../dummyData/schedule.ts";
import {callAPI} from "../helperFunctions/callAPI.ts";
import {computed, ref} from "vue";
import BaseSelect from "../components/BaseSelect.vue";

export default {
  components: {
    BaseSelect,
    BaseActivityCard,
    BaseListButton,
    BaseListCardItem,
    BaseListCard,
    BaseStatsCard,
    BaseNewsCard,
    BaseNavbar,
    BaseSideBar,
  },

  setup() {
    callAPI('GET', 'products/category/smartphones')
        .then(({products}) => productList.value = products);

    const productList = ref([]);
    const selected = ref('id');

    const selectBinds = [
      {
        value: 'title',
        text: 'Title',
      },
      {
        value: 'description',
        text: 'Description'
      },
      {
        value: 'rating',
        text: 'Rating'
      },
      {
        value: 'price',
        text: 'Price',
      },
    ];

    const updateSelected = (event: Event) => {
        const target = event.target as HTMLInputElement;
        selected.value = target.value;
    };

    const sortByProperty = (key: string | number, list: Array<Record<string|number, any>>) =>
        list.sort((a, b) => {
          if (typeof a[key] === 'number' && typeof b[key] === 'number') return a[key] - b[key];

          const upperA = `${a[key]}`.toUpperCase();
          const upperB = `${b[key]}`.toUpperCase();

          if (upperA < upperB) return -1;
          if (upperA > upperB) return 1;
          return 0;
        });

    const sortedList = computed(() => sortByProperty(selected.value, productList.value));

    return {
      news,
      stats,
      announcements,
      schedule,
      productList,
      selected,
      sortedList,
      selectBinds,
      sortByProperty,
      updateSelected
    }
  }
}
</script>

<template>
  <div class="page-wrapper">
    <BaseNavbar/>

    <BaseSideBar/>
    <main>
      <h1>Dashboard</h1>

      <section class="news">
        <BaseNewsCard v-for="({shade, title, count, description}, index) in news"
                      :key="index"
                      :shade="shade"
                      :title="title"
                      :count="count"
                      :description="description"
        />
      </section>

      <section class="stats">
        <BaseStatsCard
            v-for="({title, count, description, image}, index) in stats"
            :key="index"
            :title="title"
            :count="count"
            :description="description"
            :image="image"
        />
      </section>

      <section class="announcements">
        <BaseListCard title="Announcement">
          <BaseListCardItem
              v-for="({id, title, description, rating, price}) in sortedList"
              :title="title"
              :description="description"
              :rating="rating"
              :price="price"
              :pinnable="true"
              :more-options-available="true"
              :key="id"
          />
          <template v-slot:header-right>
            <BaseSelect
                :select-list="selectBinds"
                @selected="updateSelected"
            />
          </template>
          <BaseListButton label="See All Announcements"/>
        </BaseListCard>
      </section>

      <section class="activities">
        <BaseActivityCard/>
      </section>

      <section class="schedules">
        <BaseListCard title="Upcoming Schedule"
                      :list="schedule"
        >
          <div
              class="list-item-group"
              v-for="({groupTitle, children}, index) in schedule"
              :key="`group-${index}`"
          >
            <div class="list-item-group--title">
              {{ groupTitle }}
            </div>
            <div class="list-item-group--items">
              <BaseListCardItem
                  v-for="({title, description, pinnable, moreOptionsAvailable}, index) in children"
                  :title="title"
                  :description="description"
                  :pinnable="pinnable"
                  :more-options-available="moreOptionsAvailable"
                  :key="index"
              >
              </BaseListCardItem>
            </div>
          </div>
          <template v-slot:header-right>
            <BaseSelect :select-list="selectBinds"/>
          </template>
          <BaseListButton label="Create a New Schedule"/>
        </BaseListCard>
      </section>
    </main>
  </div>
</template>

<style scoped>

.page-wrapper {
  display: grid;
  grid-template-areas:
    "aside navbar"
    "aside main";
}

.page-wrapper:deep(.aside) {
  grid-area: aside;
}

.page-wrapper:deep(.navbar) {
  grid-area: navbar;
}

main {
  grid-area: main;
}

main {
  padding: 10px 20px 10px 20px;
  display: grid;
  grid-gap: 16px;
  grid-template-areas:
    "title"
    "news"
    "stats"
    "announcements"
    "activities"
    "schedules";
}

h1 {
  margin: unset;
  grid-area: title;
  color: #161E54;
  font-family: Poppins, serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 42px;
}

.news {
  grid-area: news;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
}

.stats {
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
}

.announcements {
  max-height: 330px;
  grid-area: announcements;
}

.activities {
  grid-area: activities;

}

.schedules {
  grid-area: schedules;
}

@media only screen and (min-width: 834px) {
  main {
    padding: 11px 50px 34px 50px;
    grid-gap: 15px 30px;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
    "title title"
    "news news"
    "stats stats"
    "announcements announcements"
    "activities schedules"
  }

  .news {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 14px;
  }

  .stats {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (min-width: 1200px) {
  main {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
    "title title"
    "news activities"
    "stats activities"
    "stats schedules"
    "announcements schedules";
  }
}
</style>
