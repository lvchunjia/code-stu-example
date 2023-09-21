<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
// 方式一:创建插件
const nuxtApp = useNuxtApp();
nuxtApp.provide("formData", () => {
  return "2020-12-14";
});
nuxtApp.provide("version", "1.0.0");

// 使用插件
console.log(nuxtApp.$formData());
console.log(nuxtApp.$version);
if (process.client) {
  console.log(nuxtApp.$formPrice(1000.78987));
}
</script>
