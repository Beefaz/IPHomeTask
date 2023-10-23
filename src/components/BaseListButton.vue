<script lang="ts">

export default {
  props: {
    label: String
  },
  setup(props) {
    const {label} = props;

    return {
      label,
    }
  }
}
</script>

<template>
  <button type="button" class="button">
    <span>{{ label }}</span>
  </button>
</template>

<style scoped>
.button {
  all: unset;
  height: 39px;
  width: 100%;
  margin: -1px -21px;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
  border-top: 1px solid #E0E0E0;
  background: #FFF;
}

span {
  width: 100%;
  padding: 10px;
  color: #FF5151;
  text-align: center;
  font-family: Poppins, serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
</style>

