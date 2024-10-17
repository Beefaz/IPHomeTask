<script lang="ts">
import Navbar from "../components/Navbar.vue";
import SideBar from "../components/SideBar.vue";
import NewsCard from "../components/NewsCard.vue";
import StatsCard from "../components/StatsCard.vue";
import ListCard from "../components/ListCard.vue";
import ListCardItem from "../components/ListCardItem.vue";
import ListButton from "../components/ListButton.vue";
import ActivityCard from "../components/ActivityCard.vue";
import {news} from "../dummyData/news.ts";
import {stats} from "../dummyData/stats.ts";
import {announcements} from "../dummyData/announcements.ts";
import {schedule} from "../dummyData/schedule.ts";
import {callAPI} from "../helperFunctions/callAPI.ts";
import {computed, ref} from "vue";
import Select from "../components/Select.vue";

export default {
  components: {
    Select,
    ActivityCard,
    ListButton,
    ListCardItem,
    ListCard,
    StatsCard,
    NewsCard,
    Navbar,
    SideBar,
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
    <Navbar/>

    <SideBar/>
    <main>
      <h1>Dashboard</h1>

      <section class="news">
        <NewsCard v-for="({shade, title, count, description}, index) in news"
                      :key="index"
                      :shade="shade"
                      :title="title"
                      :count="count"
                      :description="description"
        />
      </section>

      <section class="stats">
        <StatsCard
            v-for="({title, count, description, image}, index) in stats"
            :key="index"
            :title="title"
            :count="count"
            :description="description"
            :image="image"
        />
      </section>

      <section class="announcements">
        <ListCard title="Announcement">
          <ListCardItem
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
            <Select
                :select-list="selectBinds"
                @selected="updateSelected"
            />
          </template>
          <ListButton label="See All Announcements"/>
        </ListCard>
      </section>

      <section class="activities">
        <ActivityCard/>
      </section>

      <section class="schedules">
        <ListCard title="Upcoming Schedule"
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
              <ListCardItem
                  v-for="({title, description, pinnable, moreOptionsAvailable}, index) in children"
                  :title="title"
                  :description="description"
                  :pinnable="pinnable"
                  :more-options-available="moreOptionsAvailable"
                  :key="index"
              >
              </ListCardItem>
            </div>
          </div>
          <template v-slot:header-right>
            <Select :select-list="selectBinds"/>
          </template>
          <ListButton label="Create a New Schedule"/>
        </ListCard>
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
