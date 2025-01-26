<template>
  <div class="head">
    <n-menu
      :value="activeKey"
      mode="horizontal"
      :options="menuOptions"
      style="margin: 0 auto; width: 300px"
    />
  </div>
</template>

<script setup>
import { ref, h } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const $route = useRoute()
const activeKey = ref($route.path.split('/')[1])
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
            activeKey.value = 'home'
          },
        },
        { default: () => h('div', { style: 'font-size: 18px' }, '首页') },
      ),
    key: 'home',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/content',
          },
          onClick() {
            activeKey.value = 'content'
          },
        },
        { default: () => h('div', { style: 'font-size: 18px' }, '内容') },
      ),
    key: 'content',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/message',
          },
          onClick() {
            activeKey.value = 'message'
          },
        },
        { default: () => h('div', { style: 'font-size: 18px' }, '留言') },
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
            activeKey.value = 'about'
          },
        },
        { default: () => h('div', { style: 'font-size: 18px' }, '关于') },
      ),
    key: 'about',
  },
]
</script>

<style scoped lang="less">
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 56px;
  border-bottom: 1px solid #e8e8e8;
  background-color: #fff;
  ul {
    display: flex;
    gap: 48px;
  }
  .head-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    opacity: 0.01;
  }
}
</style>

