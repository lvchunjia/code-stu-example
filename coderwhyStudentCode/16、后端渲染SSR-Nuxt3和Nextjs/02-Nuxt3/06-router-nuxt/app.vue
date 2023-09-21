<template>
  <div>
    <NuxtLink to="/">
      <button>Home</button>
    </NuxtLink>
    <NuxtLink to="/detail01">
      <button>detail01</button>
    </NuxtLink>
    <NuxtLink to="/detail02">
      <button>detail02/index</button>
    </NuxtLink>
    <NuxtLink to="/detail02/abc?name=liujun">
      <button>detail02/abc</button>
    </NuxtLink>
    <NuxtLink to="/detail03/user-1234">
      <button>detail03/user-1234</button>
    </NuxtLink>
    <NuxtLink to="/detail04-admin">
      <button>detail04-admin</button>
    </NuxtLink>
    <NuxtLink to="/detail04-admin/abc">
      <button>detail04-admin/abc</button>
    </NuxtLink>
    <NuxtLink to="/detail05/abc">
      <button>detail05/abc</button>
    </NuxtLink>
    <NuxtLink to="/parent">
      <button>parent</button>
    </NuxtLink>
    <!-- router-view -->
    <NuxtPage></NuxtPage>
  </div>
</template>
