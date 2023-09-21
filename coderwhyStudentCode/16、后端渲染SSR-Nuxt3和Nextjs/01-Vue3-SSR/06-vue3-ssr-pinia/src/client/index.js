import { createApp } from "vue";
import { createWebHistory } from "vue-router";
import App from "../App.vue";
import createRouter from "../router";
import { createPinia } from "pinia";
// spa
let app = createApp(App);

// 安装路由插件
let router = createRouter(createWebHistory());
app.use(router);

// app 安装pinia插件
let pinia = createPinia();
app.use(pinia);

router.isReady().then(() => {
  app.mount("#app");
});
