<template>
  <div>Page: detail04 role={{ role }} id={{ id }}</div>
</template>
<script lang="ts" setup>
// 拿到动态路由的参数
const route = useRoute();
const { role, id } = route.params;
</script>
<style scoped></style>
