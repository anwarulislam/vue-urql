import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import urql, { createClient, provideClient } from "@urql/vue";

const client = createClient({
  url: "http://localhost:4000",
});

provideClient(client);

const app = createApp(App);

app.use(urql, {
  url: "http://localhost:4000",
});

app.mount("#app");
