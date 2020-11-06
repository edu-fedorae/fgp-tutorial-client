<template>
  <div>
    <v-app-bar color="#1E3D58" dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title
        ><v-btn :to="{ name: 'Home' }" text  outlined>Tutorion</v-btn></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn :to="{ name: 'Home' }" text>
        Sign In
      </v-btn>

      <v-btn :to="{ name: 'Register' }" text outlined>
        Sign Up
      </v-btn>
    </v-app-bar>
  </div>
</template>
