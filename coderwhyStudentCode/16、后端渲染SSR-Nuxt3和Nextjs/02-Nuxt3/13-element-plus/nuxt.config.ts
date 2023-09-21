// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from "unplugin-element-plus/vite";
export default defineNuxtConfig({
  // dev build
  build: {
    // 使用 Babel 进行语法转换
    transpile: ["element-plus/es"],
  },
  vite: {
    // 配置自动导入样式
    plugins: [ElementPlus()],
  },
});
