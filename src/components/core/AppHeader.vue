<template>
  <div>
    <v-app-bar color="#1E3D58" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-btn
          title="Home"
          class=""
          :to="{ name: 'Home' }"
          outlined
      >
        <v-icon left>mdi-battlenet</v-icon>
        Tutorion
      </v-btn>

      <v-spacer></v-spacer>

      <template v-if="!isAuthenticated">
        <v-btn
            title="Register"
            class="ma-2 d-none d-md-flex"
            :to="{ name: 'Register' }"
            outlined
        >
          <v-icon left>mdi-login</v-icon>
          Sign Up
        </v-btn>
        <v-menu
            class="d-md-none"
            left
            bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
                :to="{ name: 'Register' }"
            >
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        
      </template>
      <template v-else>
        <v-btn
          title="Dashboard"
          class="ma-2 d-none d-md-flex"
          :to="{ name: 'Dashboard-Home' }"
          outlined
        >
          <v-icon left>mdi-view-dashboard</v-icon>
          Dashboard
        </v-btn>
        <v-btn
            title="Logout"
            class="ma-2 d-none d-md-flex"
            @click.prevent="logout"
            outlined
        >
          <v-icon left>mdi-logout</v-icon>
          Logout
        </v-btn>

        <v-btn class="d-md-none" title="Dashboard" :to="{ name: 'Dashboard-Home' }" icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-btn>
        <v-btn class="d-md-none" title="Logout" @click.prevent="logout" icon>
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
    ...mapState("context", ["user"]),
    ...mapGetters("context", ["isAuthenticated"])
  },
  methods: {
    ...mapActions("context", ["logout"])
  }
};
</script>
