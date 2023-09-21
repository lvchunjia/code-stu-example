<template>
  <div class="layout">
    <!-- header -->
    <app-header></app-header>
    <navbar :navbars="navbars"></navbar>
    <!-- 页面内容的占位 -->
    <slot></slot>
    <!-- footer -->
    <app-footer></app-footer>
  </div>
</template>

<script setup lang="ts">
// import { getHomeInfo } from "@/service/home";
// const { data } = await getHomeInfo("oppo");
// console.log(data.value?.data.navbars);
import { useHomeStore } from "@/store/home";
import { storeToRefs } from "pinia";
const homeStore = useHomeStore();
const { navbars } = storeToRefs(homeStore);
homeStore.fetchHomeInfoData("oppo"); // 触发了一个 action
</script>
