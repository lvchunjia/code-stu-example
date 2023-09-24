<template>
  <div class="test3">{{message}}</div>
</template>

<script>
export default {
    name:'TestComponent3',
    setup(){
      // let a = 0;
        const message = 'Hello World!3'
        return {
            message
        }
    },
}
</script>

<style lang="scss" scoped>
.test3 {
  color: green;
}
</style>