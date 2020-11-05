<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-main>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Registration</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-row>
                        <v-col>
                          <v-text-field
                            label="First Name"
                            name="first-name"
                            prepend-icon="mdi-account"
                            type="text"
                          ></v-text-field>
                        </v-col>
                        <v-col>
                          <v-text-field
                            label="Last Name"
                            name="last-name"
                            prepend-icon="mdi-account-outline"
                            type="text"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-text-field
                        label="Email"
                        name="email"
                        prepend-icon="mdi-email"
                        type="text"
                      ></v-text-field>

                      <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                      ></v-text-field>

                      <v-text-field
                        id="password"
                        label="Confirm Password"
                        name="conf-password"
                        prepend-icon="mdi-lock-outline"
                        type="password"
                      ></v-text-field>

                      <v-autocomplete
                        v-model="items.value"
                        :items="items.type"
                        dense
                        filled
                        prepend-icon="mdi-accounts"
                        label="Tutor or Student"
                      ></v-autocomplete>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary">Login</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
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
      items: [
        { type: "Student", value: "0" },
        { type: "Tutor", value: "1" }
      ]
    };
  }
};
</script>

<style lang="css" scoped></style>
