// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import Vue from "vue";
import router from "./router";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import { aliases, md } from "vuetify/iconsets/md";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
  theme: {
    defaultTheme: "dark",
  },
});
const app = createApp(App);

app.use(
  createAuth0({
    domain: "the-hunting-app.us.auth0.com",
    clientId: "Jfz5QJR4B4JLtJ9whxNFnyZFpmbvnAkY",
    // domain: process.env.VITE_AUTH_DOMAIN,
    // clientId: process.env.VITE_CLIENT_ID,
    authorizationParams: {
      redirect_uri: "http://localhost:8080",
    },
  })
);
app.use(router);

app.use(vuetify);
app.mount("#app");
