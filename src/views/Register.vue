<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <!--    For when it's time to submit    -->
        <v-form @submit.prevent="onSubmit">
          <v-card class="mx-auto elevation-12" max-width="500">
            <v-card-title
              class="title font-weight-regular justify-space-between"
            >
              <span>{{ currentTitle }}</span>
              <v-avatar
                color="#1E3D58"
                style="color: #ffffff;"
                class="subheading white--text"
                size="24"
                v-text="step"
              ></v-avatar>
            </v-card-title>

            <v-window v-model="step">
              <v-window-item :value="1">
                <v-card-text>
                  <v-text-field
                    v-model="form.name"
                    label="Name"
                    value="Jane Doe"
                    prepend-icon="mdi-account"
                  ></v-text-field>
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    value="jane@tutorion.com"
                    prepend-icon="mdi-email"
                  ></v-text-field>
                  <span class="caption grey--text text--darken-1">
                    This is the email you will use to login to your Tutorion
                    account
                  </span>
                  <span class="caption grey--text text--darken-1">
                    Already have an account?
                    <router-link :to="{ name: 'Home' }">Sign-In</router-link>
                  </span>
                </v-card-text>
              </v-window-item>

              <v-window-item :value="2">
                <v-card-text>
                  <v-text-field
                    v-model="form.password"
                    label="Password"
                    type="password"
                    prepend-icon="mdi-lock"
                  ></v-text-field>
                  <!--                  <v-text-field-->
                  <!--                    v-model="form.passwordConfirm"-->
                  <!--                    label="Confirm Password"-->
                  <!--                    type="password"-->
                  <!--                    prepend-icon="mdi-lock-outline"-->
                  <!--                  ></v-text-field>-->
                  <span class="caption grey--text text--darken-1">
                    Please enter a password for your account
                  </span>
                </v-card-text>
              </v-window-item>

              <v-window-item :value="3">
                <v-card-text>
                  <v-radio-group v-model="form.role" mandatory>
                    <v-radio label="Student" :value="number[0]"></v-radio>
                    <v-radio label="Tutor" :value="number[1]"></v-radio>
                  </v-radio-group>
                  <!--                  <v-autocomplete-->
                  <!--                    v-model="form.role"-->
                  <!--                    :items="userRole"-->
                  <!--                    dense-->
                  <!--                    filled-->
                  <!--                    prepend-icon="mdi-account-multiple"-->
                  <!--                    label="Tutor or Student"-->
                  <!--                  ></v-autocomplete>-->
                  <!--                  <span class="caption grey&#45;&#45;text text&#45;&#45;darken-1">-->
                  <!--                    Please select your role-->
                  <!--                  </span>-->
                </v-card-text>
              </v-window-item>

              <v-window-item :value="4">
                <div class="pa-4 text-center">
                  <v-img
                    class="mb-4"
                    contain
                    height="128"
                    src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                  ></v-img>
                  <h3 class="title font-weight-light mb-2">
                    Welcome to Tutorion
                    <p>
                      You can now Login.
                    </p>
                  </h3>
                  <span class="caption grey--text">Thanks for signing up!</span>
                </div>
              </v-window-item>
            </v-window>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn :disabled="step === 1" text @click="step--">
                Back
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                v-show="step === 3"
                type="submit"
                color="#1E3D58"
                depressed
                style="color: #ffffff"
              >
                Create
              </v-btn>
              <v-btn
                v-show="step === 4"
                :to="{ name: 'Home' }"
                color="#1E3D58"
                depressed
              >
                Sign-In
              </v-btn>
              <v-btn
                v-show="step !== 3 && step <= 3"
                color="#1E3D58"
                depressed
                style="color: #ffffff"
                @click="step++"
              >
                Next
              </v-btn>
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
        name: "",
        email: "",
        password: "",
        role: 0
      },
      number: [0, 1],
      step: 1
      // userRole: [
      //     { type: "Student", value: 0, },
      //     { type: "Tutor", value: 1, }
      //     ]
    };
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up";
        case 2:
          return "Create a password";
        case 3:
          return "Student or Tutor";
        default:
          return "Account created";
      }
    }
  },
  methods: {
    ...mapActions("context", ["register"]),
    onSubmit() {
      this.register({ user: this.form }).then(() => {
        this.step++;
      });
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="css" scoped></style>
