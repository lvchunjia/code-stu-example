<script lang="ts" setup></script>

<template>
  <div>
    <div>Page: Parent</div>
    <div>
      <NuxtLink to="/parent">
        <button>default child1</button>
      </NuxtLink>
      <NuxtLink to="/parent/child1">
        <button>child1</button>
      </NuxtLink>
      <NuxtLink to="/parent/child2">
        <button>child2</button>
      </NuxtLink>
    </div>
    <!-- 嵌套二级路由 -->
    <NuxtPage></NuxtPage>
  </div>
</template>

<style scoped></style>
