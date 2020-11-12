<template>
  <div class="app-footer">
    <v-footer :inset="footer.inset">
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <span><router-link :to="{ name: 'About' }">About Us</router-link></span>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: {
        inset: false
      }
    };
  }
};
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
