<template>
  <div class="home">
    <SignIn />
    <v-divider></v-divider>
    <v-container>
      <h1>Courses</h1>
      <div>
        <ComputerScience />
      </div>
    </v-container>
  </div>
</template>

<script>
import SignIn from "@/components/home/SignIn";
import ComputerScience from "@/components/courses/ComputerScience";

export default {
  name: "Home",
  components: {
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
