<template>
  <div class="bg">
    <div class="img">
      <img :src="baseUrl + model.image" alt="" />
    </div>
    <div class="text">
      <span>{{ model.text }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getHome } from '../../api/index.js'
// import { useMessage } from 'naive-ui'
// const message = useMessage()
const baseUrl = import.meta.env.VITE_APP_BASE_API
const model = ref({
  image: '',
  text: '',
})
// 获取详情
const getHomeDetail = async () => {
  try {
    const res = await getHome()
    model.value = res.data
  } catch (error) {
    message.error(error.message)
  }
}
getHomeDetail()
</script>
<style scoped lang="less">
.bg {
  width: 100%;
  min-height: 100vh;
  background-color: #f4f2ec;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px;
  .img {
    max-width: 50%;
    height: 600px;
    display: flex;
    justify-content: center;
    user-select: none;
    // flex-shrink: 0;
    > img {
      width: 100%;
      height: 600px;
    }
  }
  .text {
    width: 50%;
    display: flex;
    justify-content: center;
    font-size: 120px;
    font-weight: 600;
    user-select: none;
    flex-shrink: 0;
  }
}
</style>