<template>
  <div>Page: detail03 id={{ id }}</div>
</template>
<script lang="ts" setup>
// 拿到动态路由的参数
const route = useRoute();
const { id } = route.params;

definePageMeta({
  // 路由参数的验证
  validate: (route) => {
    console.log(route.params.id);
    // return /^\d+$/.test(route.params.id as string);

    // return false  // 404 -> 500  401 ...
    return {
      statusCode: 401, // 路由验证失败
      statusMessage: "validata router error",
    };
  },
});
</script>
<style scoped></style>
