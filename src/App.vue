<template>
  <v-toolbar border>
    <v-toolbar-title>The Basement</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="ma-2"
          color="orange"
          icon="mdi-account-circle"
        ></v-btn>
      </template>

      <v-card variant="tonal">
        <profile />
        <v-btn @click="logout" class="ma-2" color="orange"> Logout</v-btn>
      </v-card>
    </v-menu>
  </v-toolbar>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import Profile from "./views/Profile.vue";
export default {
  components: { Profile },
  setup() {
    const auth0 = useAuth0();

    return {
      logout() {
        auth0.logout({
          logoutParams: {
            returnTo: "http://localhost:8080/login",
          },
        });
      },
    };
  },
};
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
