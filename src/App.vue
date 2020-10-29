<template>
  <v-app>
    <AppHeader />
    <router-view></router-view>
  </v-app>
</template>

<script>

import AppHeader from "@/components/core/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>
