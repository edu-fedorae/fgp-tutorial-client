<template>
  <div>
    <v-app-bar color="#1E3D58" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-btn :to="{ name: 'Home' }" text outlined>Tutorion</v-btn>

      <v-spacer></v-spacer>

      <template v-if="!isAuthenticated">
        <v-btn :to="{ name: 'Register' }" outlined>
          Sign Up
        </v-btn>
      </template>
      <template v-else>
        <v-btn title="Dashboard" class="ma-2" :to="{name: 'Dashboard-Home'}" outlined>
          <v-icon left>mdi-view-dashboard</v-icon>
          Dashboard
        </v-btn>
        <v-btn title="Logout" @click.prevent="logout" icon>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState('context', [
      'user'
    ]),
    ...mapGetters('context', [
      'isAuthenticated'
    ])
  },
  methods: {
    ...mapActions('context', [
      'logout'
    ])
  }
}
</script>
