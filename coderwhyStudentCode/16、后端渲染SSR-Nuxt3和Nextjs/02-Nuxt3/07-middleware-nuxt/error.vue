<template>
  <div>
    Error Page {{ error }}
    <div>
      <button @click="goHome">Home</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  error: Object,
});

function goHome() {
  clearError({ redirect: "/" });
}
</script>
<style scoped></style>
