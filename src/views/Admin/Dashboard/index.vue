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
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <small v-if="user.role === 1">Tutor</small>
            <small v-else>Student</small>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
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

        <v-btn title="Tutorion Home" :to="{ name: 'Home' }" text
          >Tutorion</v-btn
        >

        <v-spacer></v-spacer>

        <v-btn title="Dashboard" :to="{ name: 'Dashboard-Home' }" icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>

        <v-btn title="Notifications" icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>

        <v-btn title="Logout" @click.prevent="logout" icon>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main class="mt-0 pt-0">
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
// import AppDrawer from "@/components/dashboard/AppDrawer";
// import DashHeader from "@/components/dashboard/DashHeader";

import { mapGetters, mapActions } from "vuex";

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
        { title: "Home", icon: "mdi-view-dashboard", src: "/dashboard/home" },
        { title: "Profile", icon: "mdi-account", src: "/dashboard/profile" },
        {
          title: "Tutorials",
          icon: "mdi-bookmark",
          src: "/dashboard/tutorials"
        },
        { title: "Chat", icon: "mdi-chat", src: "/dashboard/chat" },
        { title: "Settings", icon: "mdi-cog", src: "/dashboard/settings" }
      ]
    };
  },
  computed: {
    ...mapGetters({
      user: "context/user"
    })
  },
  methods: {
    ...mapActions("context", ["logout"])
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
