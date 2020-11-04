<template>
  <div id="app">
  <v-app id="inspire">
    <v-app id="sandbox">
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
          link
        >
          <v-list-item-icon>
            <router-link :to="item.src">
              <v-icon>{{ item.icon }}</v-icon>
            </router-link>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="item.src">
              <v-list-item-title :to="item.src">{{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>

      <v-app-bar
        :clipped-left="primaryDrawer.clipped"
        app
      >
        <v-app-bar-nav-icon
          v-if="primaryDrawer.type !== 'permanent'"
          @click.stop="primaryDrawer.model = !primaryDrawer.model"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>Tutorion</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>


    </v-app>
  </v-app>
</div>
</template>

<script>
export default {
  data() {
    return {
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
      },
      items: [
          { title: 'Home', icon: 'mdi-view-dashboard', src: '/dashboard' },
          { title: 'Profile', icon: 'mdi-account', src: '/dashboard/profile' },
          { title: 'Tutorials', icon: 'mdi-bookmark', src: '/dashboard/tutorials' },
          { title: 'Settings', icon: 'mdi-settings', src: '/dashboard/settings' },
        ],
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
