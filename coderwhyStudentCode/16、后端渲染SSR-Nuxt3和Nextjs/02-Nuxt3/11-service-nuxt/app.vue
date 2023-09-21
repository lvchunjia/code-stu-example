<template>
  <div>
    <div>
      <NuxtLink to="/">
        <button>home</button>
      </NuxtLink>
      <NuxtLink to="/lazy">
        <button>lazy</button>
      </NuxtLink>
      <NuxtLink to="/refresh">
        <button>refresh</button>
      </NuxtLink>
      <NuxtLink to="/useFetch">
        <button>useFetch</button>
      </NuxtLink>
      <NuxtLink to="/login">
        <button>login</button>
      </NuxtLink>
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>
