<template>
  <div class="login">
    login

    <div><button @click="login">login</button></div>
  </div>
</template>

<script setup lang="ts">
// const { data } = await useFetch("/api/homeInfo", { method: "POST" });
// console.log(data.value?.data);

async function login() {
  const { data } = await useFetch("/api/login?id=100", {
    method: "POST",
    body: {
      usename: "admin",
      password: 123456,
    },
  });
  console.log(data.value?.data);
  const cookie = useCookie("token", {
    maxAge: 10, // 10 s
  });
  cookie.value = data.value?.data.token as string;
  return navigateTo("/"); // 回到home
}
</script>
