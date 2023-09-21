<template>
  <div class="home">{{ title }}</div>
</template>
<script lang="ts" setup>
export interface IProps {
  title?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  title: "home",
});
</script>

<style lang="scss">
.home {
}
</style>
