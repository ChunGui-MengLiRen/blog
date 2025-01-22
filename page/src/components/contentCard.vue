<template>
  <div class="content-card">
    <div class="title">
      <img :src="baseUrl + content.image" alt="" />
      <div class="card-title">
        <h2>{{ content.title }}</h2>
        <div class="date">{{ content.datetime }}</div>
      </div>
    </div>
    <div class="card-subtitle">{{ content.subtitle }}</div>
  </div>
</template>

<script setup>
const baseUrl = import.meta.env.VITE_APP_BASE_API
defineProps({
  content: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
</script>

<style scoped lang="less">
.content-card {
  width: 400px;
  height: 216px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #efeff5;
  padding: 16px;
  background-color: #fafafc;
  border-radius: 12px;
  .title {
    width: 100%;
    display: flex;
    gap: 32px;
    img {
      width: 160px;
      height: 120px;
      border: 1px solid #ccc;
    }

    .card-title {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .date {
        color: #0b19267a;
      }
    }
  }
}
</style>