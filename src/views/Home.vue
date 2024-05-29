<template>
  <div class="centered">
    <h1 style="font-size: xxx-large">Welcome to The Hunting App</h1>
  </div>
  <div class="centered">
    <v-img
      contain
      :height="350"
      :src="require('../assets/hunting-collage.png')"
    >
    </v-img>
  </div>
  <div class="centered">
    <h3 class="welcome-lable">
      Embark on Your Hunting Journey Whether you're a seasoned hunter looking to
      refine your skills or a newcomer eager to learn the art of hunting, you've
      come to the right place. Welcome to The Hunting App, your ultimate
      destination for all things hunting.
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "home",
  props: {
    msg: String,
  },
  setup() {
    // const serverArr: Server[] = [
    //   {
    //     name: "Test 1",
    //     description: "Test 1 Server Description",
    //     link: "www.link1serve.com",
    //   },
    //   {
    //     name: "Test 2",
    //     description: "Test 2 Server Description",
    //     link: "www.link1serve.com",
    //   },
    //   {
    //     name: "Test 3",
    //     description: "Test 3 Server Description",
    //     link: "www.link1serve.com",
    //   },
    //   {
    //     name: "Test 4",
    //     description: "Test 4 Server Description",
    //     link: "www.link1serve.com",
    //   },
    //   {
    //     name: "Test 5",
    //     description: "Test 5 Server Description",
    //     link: "www.link1serve.com",
    //   },
    //   {
    //     name: "Test 6",
    //     description: "Test 6 Server Description",
    //     link: "www.link1serve.com",
    //   },
    // ];

    return {};
  },
});
</script>

<style scoped>
.card-style {
  margin: 5%;
  height: 40vh;
}

.centered {
  display: flex;
  justify-content: center;
  width: 100%;
}

.welcome-lable {
  align-items: center;
  text-align: center;
  max-width: 50%;
  white-space: normal;
}
</style>
