<template>
  <div class="not-found">
    <h1>sorry, we could not find the page you are looking.</h1>
    <div class="">
      // Should be conditional if auth or not
      <p>Here are some option:</p>
      <ul>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'Home' }">Sign-In</router-link></li>
        <li><router-link :to="{ name: 'Register' }">Register</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="css" scoped>
.not-found {
  text-align: center;
}
</style>
