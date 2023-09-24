<template>
  <div class="test2">{{message}}</div>
</template>

<script>
export default {
    name:'TestComponent2',
    setup(){
      // let a = 0;
        const message = 'Hello World!2'
        return {
            message
        }
    },
}
</script>

<style lang="scss" scoped>
.test {
  color: blue;
}
</style>