<template>
  <div>
    <v-app-bar
      color="#1E3D58"
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title><v-btn :to="{ name: 'Home'}" text>Tutorion</v-btn></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :to="{ name:'Home' }" text outline>
        Sign In
      </v-btn>

      <v-btn :to="{ name:'Register' }" text outline>
        Sign Up
      </v-btn>

    </v-app-bar>
  </div>
</template>
