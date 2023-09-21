<template>
  <div>Page: detail03 id={{ id }}</div>
</template>
<script lang="ts" setup>
// 拿到动态路由的参数
const route = useRoute();
const { id } = route.params;
</script>
<style scoped></style>
