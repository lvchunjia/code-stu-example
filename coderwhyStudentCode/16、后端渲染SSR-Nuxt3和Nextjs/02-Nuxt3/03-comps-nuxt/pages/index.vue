<template>
  <div class="home">
    <div>我是Home Page</div>

    <!-- <ClientOnly fallback-tag="h3" fallback="loading....">
      <div>我只会在 client 渲染</div>
    </ClientOnly> -->

    <ClientOnly>
      <div>我只会在 client 渲染</div>
      <template #fallback>
        <h2>服务器端渲染的 loading 页面</h2>
      </template>
    </ClientOnly>
  </div>
</template>
