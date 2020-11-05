<template>
  <div id="app">
    <v-app id="sandbox">
      <!-- <AppDrawer /> -->
      <v-navigation-drawer
        v-model="primaryDrawer.model"
        :clipped="primaryDrawer.clipped"
        :floating="primaryDrawer.floating"
        :mini-variant="primaryDrawer.mini"
        :permanent="primaryDrawer.type === 'permanent'"
        :temporary="primaryDrawer.type === 'temporary'"
        app
        overflow
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.src"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- <DashHeader /> -->
      <v-app-bar :clipped-left="primaryDrawer.clipped" app>
        <v-app-bar-nav-icon
          v-if="primaryDrawer.type !== 'permanent'"
          @click.stop="primaryDrawer.model = !primaryDrawer.model"
        ></v-app-bar-nav-icon>
        <v-toolbar-title
          ><v-btn :to="{ name: 'Home' }" text>Tutorion</v-btn></v-toolbar-title
        >
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
// import AppDrawer from "@/components/dashboard/AppDrawer";
// import DashHeader from "@/components/dashboard/DashHeader";

export default {
  // components: {
  //   AppDrawer,
  //   DashHeader
  // },
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

<style scoped>
a {
  text-decoration: none;
}
</style>
