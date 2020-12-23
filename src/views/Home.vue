<template>
  <div class="home">
    <SignIn/>
    <v-divider></v-divider>
  </div>
</template>

<script>
import SignIn from "../components/home/SignIn";

export default {
  name: "Home",
  components: {
    SignIn
  },
};
</script>

<style scoped></style>
