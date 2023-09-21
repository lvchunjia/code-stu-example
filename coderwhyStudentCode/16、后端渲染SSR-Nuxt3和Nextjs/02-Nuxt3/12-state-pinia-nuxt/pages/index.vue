<template>
  <div class="home">
    home
    <div>{{ counter }}</div>
    <div>{{ loginInfo }}</div>
    <button @click="addCounter">+1</button>
  </div>
</template>

<script setup>
// counter -> Ref
const counter = useCounter();
const loginInfo = useLoginInfo();
if (process.server) {
  console.log("counter=>", counter);
}
function addCounter() {
  counter.value++;
  loginInfo.value.age++;
}
</script>
