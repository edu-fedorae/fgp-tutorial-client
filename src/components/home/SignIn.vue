<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="#1E3D58" dark flat>
            <v-toolbar-title>Sign-In</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                  v-model="form.email"
                  label="Login"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
              ></v-text-field>

              <v-text-field
                  v-model="form.password"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="{ name: 'Dashboard-Home' }" color="primary"
            >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: "",
          password: ""
        }
      }
    }
  }
</script>

<style lang="css" scoped></style>
