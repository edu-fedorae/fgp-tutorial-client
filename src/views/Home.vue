<template>
  <div class="home">
    <SignIn />
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
import SignIn from "@/components/home/SignIn";
import ComputerScience from "@/components/courses/ComputerScience";
import Psychology from "../components/courses/Psychology";

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
  }
};
</script>

<style scoped></style>
