<template>
  <div>Page: Index</div>
</template>
<script lang="ts" setup>
definePageMeta({
  // 路由中间件( 监听路由 )
  middleware: [
    // 第一个中间件
    function (to, from) {
      // console.log(from);
      // console.log(to);
      console.log("index 第一个中间件");

      // 如果返回的是 "" null, 或 没有返回语句,name就会执行下一个中间件
      // 如果返回的是 navigateTo, 直接导航到新的页面
      // return navigateTo("/detail02");
    },
    // 第二个中间件
    "home",
    // function (to, from) {
    //   // console.log(from);
    //   // console.log(to);
    //   console.log("index 第二个中间件");
    // },
    // 'auth'
    // 专门用来判断用户是否已登录
    // function (to, from) {
    //   console.log("index 第三个中间件");
    // },
  ],
});
</script>
<style scoped></style>
