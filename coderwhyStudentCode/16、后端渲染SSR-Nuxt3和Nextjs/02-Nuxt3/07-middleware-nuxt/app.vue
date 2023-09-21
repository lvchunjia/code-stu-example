<template>
  <div>
    <div>App</div>
    <div>
      <NuxtLink to="/">
        <button>Home</button>
      </NuxtLink>
      <NuxtLink to="/detail01">
        <button>detail01</button>
      </NuxtLink>
      <NuxtLink to="/detail02">
        <button>detail02</button>
      </NuxtLink>
      <NuxtLink to="/detail03/123">
        <button>detail03</button>
      </NuxtLink>
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>
