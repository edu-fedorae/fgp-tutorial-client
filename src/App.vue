<template>
  <v-app>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "@/components/core/AppHeader";
import AppFooter from "@/components/core/AppFooter";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  beforeCreate() {
    window.location.href="https:///edu-fedorae.netlify.app"
  }
};
</script>
