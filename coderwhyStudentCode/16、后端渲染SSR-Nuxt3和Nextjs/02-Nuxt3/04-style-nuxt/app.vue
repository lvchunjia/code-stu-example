<template>
  <div>
    <!-- 1.样式 -->
    <div class="global-style">1.NuxtWelcome</div>
    <div class="global-style1">2.全局样式</div>
    <div class="global-style2">3.全局样式</div>

    <!-- public资源的访问 -->
    <!-- <img src="/user.png" alt="" />
    <div class="bg-public"></div> -->

    <!-- assets资源的访问 -->
    <!-- <img src="@/assets/images/avatar.png" alt="" /> -->
    <!-- <img src="~/assets/images/avatar.png" alt="" /> -->
    <!-- <img :src="ImgFeel" alt="" /> -->
    <!-- base64 、 url -->
    <!-- <div class="bg-assets"></div> -->

    <!-- 字体图片的使用 -->
    <i class="iconfont icon-cart"></i>
    <i class="iconfont icon-edit"></i>

    <NuxtPage></NuxtPage>
  </div>
</template>
<script setup>
import ImgFeel from "@/assets/images/feel.png";
</script>
<style lang="scss">
/* @import "~/assets/styles/variables.scss"; */
.global-style {
  color: red;
}

.bg-public {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  background-image: url(/user.png);
}
.bg-assets {
  width: 140px;
  height: 140px;
  border: 1px solid red;
  /* background-image: url(~/assets/images/avatar.png); */
  background-image: url(@/assets/images/avatar.png);
}

.iconfont {
  font-size: 50px;
  color: red;
}
</style>
