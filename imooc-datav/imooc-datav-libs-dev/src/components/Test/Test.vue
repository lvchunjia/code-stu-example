<template>
  <svg width="0" height="0">
    <defs>
      <symbol id="more" viewBox="0 0 100 100">
        <circle r="5" cx="20" cy="25" fill="currentColor" />
        <circle r="5" cx="20" cy="50" fill="currentColor" />
        <circle r="5" cx="20" cy="75" fill="currentColor" />
        <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor" />
        <line x1="40" y1="25" x2="90" y2="25" stroke-width="8" stroke="currentColor" />
        <line x1="40" y1="50" x2="80" y2="50" stroke-width="8" stroke="currentColor" />
        <line x1="40" y1="75" x2="90" y2="75" stroke-width="8" stroke="currentColor" />
      </symbol>
      <symbol id="filledArrowRight" viewBox="0 0 100 100">
        <polyline points="20 10, 80 50, 20 90" fill="currentColor"></polyline>
      </symbol>
      <symbol id="arrowRight" viewBox="0 0 100 100">
        <polyline points="30 20, 70 50, 20 90" fill="transparent" stroke="currentColor" stroke-width="4"></polyline>
      </symbol>
      <symbol id="add" viewBox="0 0 100 100">
        <line x1="0" y1="50" x2="100" y2="50" stroke-width="8" stroke="currentColor" />
        <line x1="50" y1="0" x2="50" y2="100" stroke-width="8" stroke="currentColor" />
      </symbol>
    </defs>
  </svg>
</template>

<script>
export default {
    name:'TestComponent',
    setup(){
      // let a = 0;
        const message = 'Hello World!'
        return {
            message
        }
    },
}
</script>

<style lang="scss" scoped>
</style>