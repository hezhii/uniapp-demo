<template>
  <view :class="['container', theme === 'default' ? 'theme-default' : 'theme-dark']">
    <view class="show-theme-container"><text>展示主题</text></view>
    <button type="primary" @click="toggleTheme">切换主题</button>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const theme = ref('default');

const toggleTheme = () => {
  theme.value = theme.value === 'default' ? 'dark' : 'default';
};
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}

.show-theme-container {
  height: 40px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $bg-color;

  text {
    color: $text-color;
  }
}
</style>
