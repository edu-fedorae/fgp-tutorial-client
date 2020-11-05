<template>
  <div class="dash-header">
    <v-app-bar :clipped-left="primaryDrawer.clipped" app>
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        ><v-btn :to="{ name: 'Home' }" text>Tutorion</v-btn></v-toolbar-title
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawers: ["Default (no property)", "Permanent", "Temporary"],
      primaryDrawer: {
        model: null,
        type: "default (no property)",
        clipped: false,
        floating: false,
        mini: false
      },
      items: [
        { title: "Home", icon: "mdi-view-dashboard", src: "/dashboard" },
        { title: "Profile", icon: "mdi-account", src: "/dashboard/profile" },
        {
          title: "Tutorials",
          icon: "mdi-bookmark",
          src: "/dashboard/tutorials"
        },
        { title: "Settings", icon: "mdi-settings", src: "/dashboard/settings" }
      ]
    };
  }
};
</script>

<style lang="css" scoped></style>
