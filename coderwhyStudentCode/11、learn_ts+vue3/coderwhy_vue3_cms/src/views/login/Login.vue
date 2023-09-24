<script setup lang="ts">
import loginPanel from './c-cpns/login-panel.vue'
</script>

<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<style scoped lang="less">
.login {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  background-image: url(@/assets/img/login-bg.svg);
}
</style>
