<script lang="ts">
import {toRefs} from 'vue';
import {getImageUrl} from '../helperFunctions/imageURLBuilder.ts'

export default {
  props: {
    backgroundColor: String
  },
  setup(props) {
    const {backgroundColor} = toRefs(props);

    return {
      backgroundColor,
      getImageUrl,
    }
  }
}
</script>

<template>
  <div class="navbar">
    <div class="navigation-right">
      <img
          class="burger"
          :src="getImageUrl('svg/burger.svg')"
          alt=""
      >
      <div class="search-wrapper">
        <input class="search">
        <img
            class="magnifier"
            :src="getImageUrl('svg/magnifier.svg')"
            alt=""
        >
      </div>
    </div>
    <div class="navigation-left">
      <button
          type="button"
          class="notification"
      >
        <img
            :src="getImageUrl('svg/notification.svg')"
            alt=""
        >
      </button>
      <button
          type="button"
          class="message"
      >
        <img
            :src="getImageUrl('svg/message.svg')"
            alt=""
        >
      </button>
      <div>
        <button
            type="button"
            class="user"
        >
          <img
              class="user--thumbnail"
              :src="getImageUrl('png/user.png')"
              alt=""
          >
          <span class="user--name">Admirra John</span>
          <img
              :src="getImageUrl('svg/arrow.svg')"
              alt=""
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  min-width: 0;
  min-height: 0;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  border-bottom: 1px solid #F1F1F1;
}

@media only screen and (min-width: 834px) {
  .navbar {
    margin-left: 50px;
  }
}

.navigation-right {
  display: flex;
  flex: 1 1 343px;
  align-items: center;
  gap: 8px;
  padding: 23px 0;
}

@media only screen and (min-width: 834px) {
  .navigation-right {
    padding: 23px 0;
  }

  .burger {
    display: none;
  }
}

@media only screen and (min-width: 834px) {
  .navigation-right {
    padding: 23px 0;
  }
}
.search-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 343px;
}

.search {
  height: 44px;
  width: 100%;
  padding: 10px 40px 10px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #E0E0E0;
  background: #FAFAFA;
  display: none;
}

@media only screen and (min-width: 834px) {
  .search {
    display: flex;
  }
}

.magnifier {
  width: 24px;
  height: 24px;
}

@media only screen and (min-width: 834px) {
  .magnifier {
    position: absolute;
    right: 10px;
    bottom: 25%;
  }
}

.navigation-left {
  padding: 23px 20px;
  display: flex;
  align-items: center;
  gap: 30px;
}

@media only screen and (min-width: 834px) {
  .navigation-left {
    padding: 24px 50px 24px 15px;
  }
}

button {
  all: unset;
  display: flex;
}

img {
  width: 24px;
  height: 24px;
  object-fit: cover;
}

.user {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  color: #161E54;
  font-family: Poppins, serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.user--thumbnail {
  width: 42px;
  height: 42px;
  object-fit: cover;
}

.user--name {
  display: inline-flex;
}
</style>
