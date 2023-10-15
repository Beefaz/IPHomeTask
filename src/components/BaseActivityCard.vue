<script lang="ts">
</script>

<template>
  <div class="activity-card border-rounded">
    <div class="activity-card--title">
      <h2>Recently activity</h2>
    </div>
    <div class="activity-card--content">
      <div class="activity-time">10.40 AM, Fri 10 Sept 2021</div>
      <div class="activity-title">You Posted a New Job</div>
      <div class="activity-description">Kindly check the requirements and terms of work and make sure everything is
        right.
      </div>
      <div class="activity-actions">
        <div class="activity-achievement">Today you makes 12 Activity</div>
        <button class="activity-button btn-primary">See All Activity</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.activity-card {
  height: 100%;
  color: #FFFFFF;
  background: #161E54;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.activity-card--title {
  padding: 16px 20px;
  background: #1B204A;
}

h2 {
  margin: unset;
  font-family: Poppins, serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}

.activity-card--content {
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  background: #161E54;
}

.activity-description {
  font-family: Roboto, serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.activity-time {
  font-family: Roboto, serif;
  font-size: 10px;
  font-weight: 500;
}

.activity-title {
  margin: 8px 0;
  font-family: Poppins, serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px
}

.activity-actions {
  margin-top: 28px;
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media only screen and (min-width: 1200px) {
  .activity-actions {
    flex-wrap: nowrap;
    gap: 10px;
  }
}

.activity-achievement {
  font-family: Poppins, serif;
  font-size: 14px;
  font-weight: 400;
}

.btn-primary {
  all: unset;
  width: 144px;
  height: 38px;
  display: inline-flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Poppins, serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  background: #FF5151;
}
</style>
