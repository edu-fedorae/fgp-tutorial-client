<template>
  <v-container>
    Session Slug - {{ tutorial }}
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tutorial: ""
    }
  },
  created() {
    this.slug = this.$route.params.tutorial
  }
};
</script>

<style lang="css" scoped></style>
