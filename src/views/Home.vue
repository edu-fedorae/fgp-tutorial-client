<template>
  <div class="home">
    <SignIn v-if="!isAuthenticated" />
    <v-divider></v-divider>
    <v-container>
      <h1>Courses</h1>
      <div>
        <ComputerScience />
      </div>
      <v-divider></v-divider>
      <div>
        <Psychology />
      </div>
    </v-container>
  </div>
</template>

<script>
import SignIn from "../components/home/SignIn";
import ComputerScience from "../components/courses/ComputerScience";
import Psychology from "../components/courses/Psychology";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Psychology,
    ComputerScience,
    SignIn
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapGetters('context', [
      'isAuthenticated'
    ])
  },
};
</script>

<style scoped></style>
