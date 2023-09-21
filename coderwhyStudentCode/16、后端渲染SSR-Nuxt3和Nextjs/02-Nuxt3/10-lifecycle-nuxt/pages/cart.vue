<template>
  <div class="home">home</div>
</template>

<script setup>
console.log("setup");
onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("onMounted");
});
</script>
