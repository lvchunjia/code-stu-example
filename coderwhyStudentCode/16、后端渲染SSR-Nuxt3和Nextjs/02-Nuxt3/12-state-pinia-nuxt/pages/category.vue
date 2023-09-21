<template>
  <div class="category">
    category

    <div>{{ counter }}</div>
    <button @click="addCounter">+1</button>
    <button @click="getHomeInfo">fetchHomeInfoData</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomeStore } from "~/store/home";

const homeStore = useHomeStore();
const { counter, homeInfo } = storeToRefs(homeStore);
function addCounter() {
  homeStore.increment();
}

if (process.server) {
  homeStore.fetchHomeData();
}
function getHomeInfo() {
  homeStore.fetchHomeData();
}
</script>
