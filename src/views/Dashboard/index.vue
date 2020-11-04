<template>
  <div id="app">
    <v-app id="sandbox">

      <AppDrawer />
      <DashHeader />

      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>

  </v-app>
</div>
</template>

<script>
import AppDrawer from "@/components/dashboard/AppDrawer";
import DashHeader from "@/components/dashboard/DashHeader";

export default {
  components: {
    AppDrawer,
    DashHeader
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
