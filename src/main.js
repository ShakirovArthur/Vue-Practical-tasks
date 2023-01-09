import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/main.scss";
import {store} from "./store";

const app = createApp(App); //рендер элемента App

// app.use(createPinia(),simplePlugin)
app.use(router);
app.use(store)
app.mount("#app"); //вызываем метод mount
