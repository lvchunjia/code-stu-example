<template>
  <div>
    <div>
      <!-- 1.组件的方式 -->
      <NuxtLink to="/">
        <button>home</button>
      </NuxtLink>
      <!-- 2.通过navigateTo -->
      <!-- <NuxtLink @click="goToCategory">
        <button>category</button>
      </NuxtLink> -->
      <button @click="goToCategory">category</button>

      <!-- 3.通过编程的方式进行导航 -->
      <button @click="goToCart">cart</button>

      <button @click="goBack">Back</button>
    </div>
    <!-- 是对router-view的封装 -->
    <NuxtPage></NuxtPage>
  </div>
</template>
<script setup>
function goToCategory() {
  return navigateTo("/category");

  // return navigateTo(
  //   {
  //     path: "/category",
  //     query: {
  //       id: 200,
  //     },
  //   },
  //   {
  //     replace: true, // 是否是替换当前的页面
  //   }
  // );

  // return navigateTo("https://www.jd.com", {
  //   external: true,
  // });
}

// useRouter
let router = useRouter();
function goToCart() {
  router.push("/cart"); // navigateTo
}
function goBack() {
  router.go(-1);
}

// 路由的守卫
router.beforeEach((to, form) => {
  console.log(to);
  console.log(form);
});
</script>
