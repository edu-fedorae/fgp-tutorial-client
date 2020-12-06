<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-form @submit.prevent="onSubmit">
          <v-card class="elevation-12">
            <v-toolbar color="#1E3D58" dark flat>
              <v-toolbar-title>Sign-In</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                v-model="form.email"
                label="Email"
                name="email"
                prepend-icon="mdi-email"
                type="email"
                required
              ></v-text-field>

              <v-text-field
                v-model="form.password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                required
              ></v-text-field>
              <span class="caption grey--text text--darken-1">
                Don't have an account?
                <router-link :to="{ name: 'Register' }">Register</router-link>
              </span>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#1E3D58" style="color: #ffffff" type="submit"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "student@tutorion.com",
        password: "my-super-secret-password"
      },
      authMode: "jwt",
      authOptions: [
        { text: "Cookie", value: "cookie" },
        { text: "JWT Bearer", value: "jwt" }
      ]
    };
  },
  methods: {
    ...mapActions("context", ["login"]),
    onSubmit() {
      this.login({ authMethod: this.authMode, credentials: this.form }).then(
        () => {
          console.log("Route to dashboard/home");
        }
      );
    }
  }
};
</script>

<style lang="css" scoped></style>
