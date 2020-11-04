<template>
  <div class="app-drawer">
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
          { title: 'Home', icon: 'mdi-view-dashboard', src: '/dashboard/home' },
          { title: 'Profile', icon: 'mdi-account', src: '/dashboard/profile' },
          { title: 'Tutorials', icon: 'mdi-bookmark', src: '/dashboard/tutorials' },
          { title: 'Settings', icon: 'mdi-settings', src: '/dashboard/settings' },
        ],
    }
  }
}
</script>

<style lang="css" scoped>
</style>
