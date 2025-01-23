<template>
  <n-layout has-sider>
    <n-layout-sider>
      <div class="title">后台管理</div>
      <n-menu :options="menuOptions" :value="menuValue" />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <div class="head">
          <h2>羽化自在仙</h2>
          <n-button @click="logout">退出</n-button>
        </div>
      </n-layout-header>
      <n-layout-content>
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
<script setup>
import { ref, h } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
const $router = useRouter()
const $route = useRoute()
const menuValue = ref($route.path.split('/')[1])
const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/home',
          },
          onClick() {
            menuValue.value = 'home'
          },
        },
        { default: () => '首页' },
      ),
    key: 'home',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/content/index',
          },
          onClick() {
            menuValue.value = 'content'
          },
        },
        { default: () => '内容分享' },
      ),
    key: 'content',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/message/index',
          },
          onClick() {
            menuValue.value = 'message'
          },
        },
        { default: () => '留言墙' },
      ),
    key: 'message',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/about',
          },
          onClick() {
            menuValue.value = 'about'
          },
        },

        { default: () => '关于' },
      ),
    key: 'about',
  },
]

const logout = () => {
  // 跳转登录页
  $router.push('/login')
  // 清除本地 token
  localStorage.removeItem("BLOG_TOKEN");
}
</script>

<style scoped lang="less">
.head {
  height: 56px;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.n-layout-sider {
  border-right: 1px solid #ccc;
}

.title {
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
}
</style>