<template>
  <div class="cart">
    cart
    <div>{{ counter }}</div>
    <button @click="addCounter">+1</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomeStore } from "~/store/home";

const homeStore = useHomeStore();
const { counter } = storeToRefs(homeStore);
function addCounter() {
  homeStore.increment();
}
</script>
