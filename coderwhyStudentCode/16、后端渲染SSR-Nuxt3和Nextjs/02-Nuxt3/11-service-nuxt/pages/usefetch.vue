<template>
  <div class="use-fetch">useFetch</div>
</template>
<script setup lang="ts">
import hyRequest from "@/service/index";
import type { IResultData } from "@/service/index";
import { fetchHomeInfoData } from "@/service/home";
// hyRequest.get<IResultData<any>>("/homeInfo").then((res) => {
//   console.log(res.data.value);
// });

// const { data } = await hyRequest.get<IResultData<any>>("/homeInfo");
// console.log(data.value?.data);

const { data } = await fetchHomeInfoData();
console.log(data.value?.data);
</script>
