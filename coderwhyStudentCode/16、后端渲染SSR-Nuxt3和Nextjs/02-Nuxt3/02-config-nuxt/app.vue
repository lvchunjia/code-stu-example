<template>
  <div>
    <h2>Hello Nuxt3</h2>
    <Title>Template Title</Title>
    <Meta name="key" content="key key key"></Meta>
  </div>
</template>

<script setup>
// 1.判断代码之心的环境
// if (process.server) {
//   console.log("运行在 server");
// }

// if (process.client) {
//   console.log("运行在 client");
// }

// if (typeof window === "object") {
//   console.log("运行在 client");
// }

// 2.获取运行时配置( server and client )
// const runtimeConfig = useRuntimeConfig();
// if (process.server) {
//   console.log(runtimeConfig.appKey);
//   console.log(runtimeConfig.public.baseURL);
// }
// if (process.client) {
//   // console.log(runtimeConfig.appKey); // not
//   console.log(runtimeConfig.public.baseURL);
// }
// console.log(process.env.appKey); // undefined

// 3.获取appConfig
let appConifg = useAppConfig();
// server client
console.log(appConifg.title);
console.log(appConifg.theme.primary);

onMounted(() => {
  document.title = appConifg.title;
});

// 4.动态的该app所有的页面添加 head的内容
useHead({
  title: "app useHead", // Ref
  bodyAttrs: {
    class: "liujun",
  },
  meta: [
    {
      name: "dsec",
      content: "广州弘源科教 hy kj",
    },
  ],
  style: [],
  link: [],
  // script: [
  //   {
  //     src: "http://liujun.com",
  //     body: true,
  //   },
  // ],
});
</script>
