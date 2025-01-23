<template>
  <div class="bg bg-s bg-m bg-l">
    <div class="img img-s img-m img-l">
      <img :src="baseUrl + model.image" alt="" />
    </div>
    <div class="text text-s text-m text-l">
      {{ model.text }}
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
  height: 100vh;
  background-color: #f4f2ec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px;
  gap: 32px;
  .img {
    width: 100%;
    display: flex;
    justify-content: center;
    user-select: none;
    object-fit: contain;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: 600;
    user-select: none;
    flex-shrink: 0;
  }
}

@media screen and (min-width: 768px) {
  .bg-s {
    .text {
      font-size: 56px;
    }
  }
}

@media screen and (min-width: 992px) {
  .bg-m {
    flex-direction: row;
    .img-m {
      width: 50%;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .text-m {
      width: 50%;
      font-size: 60px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .bg-l {
    flex-direction: row;
    .img-l {
      width: 50%;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .text-l {
      font-size: 80px;
    }
  }
}
</style>