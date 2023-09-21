// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/styles/main.css",
    "@/assets/styles/global.scss",
    "@/assets/cus-font/iconfont.css", // 自定字体图标
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 自动的给  scss 模块首行添加额外的数据:@use "@/assets/styles/variables.scss" as *;
          additionalData: '@use "@/assets/styles/variables.scss" as *;',
        },
      },
    },
  },
});
