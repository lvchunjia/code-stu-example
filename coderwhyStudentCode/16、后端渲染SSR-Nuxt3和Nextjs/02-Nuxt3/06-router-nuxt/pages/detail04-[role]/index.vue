<template>
  <div>Page: detail04 role={{ role }}</div>
</template>
<script lang="ts" setup>
// 拿到动态路由的参数
const route = useRoute();
const { role } = route.params;
</script>
<style scoped></style>
