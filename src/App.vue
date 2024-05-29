<template>
  <v-toolbar fixed border>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>The Hunting App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="ma-2"
          color="orange"
          icon="mdi-account-circle"
        >
          <v-img
            class="user-pic mx-auto"
            :width="50"
            aspect-ratio="4/3"
            cover
            :src="user?.picture"
          ></v-img
        ></v-btn>
      </template>

      <v-card variant="tonal">
        <profile />
        <v-btn
          @click="logout"
          style="margin: 2%; background-color: darkgoldenrod"
        >
          Logout</v-btn
        >
      </v-card>
    </v-menu>
  </v-toolbar>
  <v-layout>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>

  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import Profile from "./views/Profile.vue";

export default {
  components: { Profile },
  data() {
    const items = [
      { text: "Real Time" },
      { text: "Audience" },
      { text: "Conversions" },
    ];
    return {
      drawer: true,
      items,
    };
  },
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
      user: auth0.user,
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading,
    };
  },
};
</script>
<style>
.user-pic {
  border-radius: 50%;
}
</style>
