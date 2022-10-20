import { createApp } from "vue";
import "@/styles/index.css";
import App from "./App.vue";

import { createVui } from "../index";

const app = createApp(App);

app.use(createVui()).mount("#app");
