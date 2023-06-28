<template>
  <view :class="['container', theme === 'default' ? 'theme-default' : 'theme-dark']">
    <view class="show-theme-container"><text>展示主题</text></view>
    <button type="primary" @click="toggleTheme" class="button">切换主题</button>
    <button type="primary" @click="trtcLogin" class="button">TRTC 登录</button>
    <button type="primary" @click="trtcCall" class="button">呼叫</button>
    <button type="primary" @click="navigateToPage2" class="button">跳转页面</button>
  </view>
</template>

<script setup>
import { ref } from 'vue';
// #ifdef APP-PLUS
import { login, TUICallKit } from '@/common/trtc.js';
// #endif

const theme = ref('default');

const toggleTheme = () => {
  theme.value = theme.value === 'default' ? 'dark' : 'default';
};

const trtcLogin = () => {
  // #ifdef APP-PLUS
  login();
  // #endif
};

const trtcCall = () => {
  const options = {
    userID: 'hezhou2',
    callMediaType: 1 // 语音通话(callMediaType = 1)、视频通话(callMediaType = 2)
  };
  TUICallKit.call(options, (res) => {
    if (res.code === 0) {
      console.log('call success');
    } else {
      console.log(`call failed, error message = ${res.msg}`);
    }
  });
};

const navigateToPage2 = () => {
  uni.navigateTo({
    url: '/pages/page2/page2?id=1&name=uniapp'
  });
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

.button {
  margin-bottom: 8px;
}
</style>
