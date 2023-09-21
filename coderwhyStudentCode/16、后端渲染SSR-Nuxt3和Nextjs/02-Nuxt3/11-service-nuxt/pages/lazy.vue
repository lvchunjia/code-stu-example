<template>
  <div class="lazy">lazy</div>
</template>

<script setup lang="ts">
const BASE_URL = "http://codercba.com:9060/juanpi/api";
interface IResultData {
  code: number;
  data: any;
}
// 1. useFetch 默认会阻塞 页面的导航
// const { data } = await useFetch<IResultData>(BASE_URL + "/homeInfo", {
//   method: "GET",
//   lazy: true, // 不会阻塞页面的导航
// });
// console.log(data.value?.data);

// // 确保一定可以拿到这个data的数据
// watch(data, (newData) => {
//   console.log("data=>", data);
// });

// onMounted(() => {
//   console.log("onMounted");
// });

// 2.简写
const { data } = await useLazyFetch<IResultData>(BASE_URL + "/homeInfo", {
  method: "GET",
});
console.log(data.value?.data);

// 确保一定可以拿到这个data的数据 ( client )
watch(data, (newData) => {
  console.log("data=>", data);
});

onMounted(() => {
  console.log("onMounted");
});
</script>
