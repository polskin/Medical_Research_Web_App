import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import PapaParse from "papaparse";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(PapaParse);
app.mount("#app");
