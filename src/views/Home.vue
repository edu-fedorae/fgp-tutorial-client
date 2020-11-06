<template>
  <div class="home">
    <SignIn />
    <v-divider></v-divider>
    <v-main>
      <div class="courses">
        <v-card class="mx-auto elevation-10" outlined>
          <v-container class="fill-height" fluid>
            <h1>Computer Science</h1>
            <v-row align="left" justify="left">
              <v-col cols="12" sm="8" md="4" v-for="(i, n) in 3" :key="i">
                <v-card
                  class="elevation-12"
                  max-width="344"
                >
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                  ></v-img>

                  <v-card-title>
                    Top western road trips - {{ n }}
                  </v-card-title>

                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      color="orange lighten-2"
                      text
                    >
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                      icon
                      @click="show = !show"
                    >
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>

      <div class="courses">
        <v-card class="mx-auto elevation-10" outlined>
          <v-container class="fill-height" fluid>
            <h1>Psychology</h1>
            <v-row align="left" justify="left">
              <v-col cols="12" sm="8" md="4" v-for="(i, n) in 3" :key="i">
                <v-card
                  class="elevation-12"
                  max-width="344"
                >
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                  ></v-img>

                  <v-card-title>
                    Top western road trips - {{ n }}
                  </v-card-title>

                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      color="orange lighten-2"
                      text
                    >
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                      icon
                      @click="show = !show"
                    >
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>

      <div class="courses">
        <v-card class="mx-auto elevation-10" outlined>
          <v-container class="fill-height" fluid>
            <h1>Business</h1>
            <v-row align="left" justify="left">
              <v-col cols="12" sm="8" md="4" v-for="(i, n) in 3" :key="i">
                <v-card
                  class="elevation-12"
                  max-width="344"
                >
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                  ></v-img>

                  <v-card-title>
                    Top western road trips - {{ n }}
                  </v-card-title>

                  <v-card-subtitle>
                    1,000 miles of wonder
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      color="orange lighten-2"
                      text
                    >
                      Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                      icon
                      @click="show = !show"
                    >
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
    </v-main>
  </div>
</template>

<script>
import SignIn from "@/components/home/SignIn";

export default {
  name: "Home",
  components: {
    SignIn
  },
  data() {
    return {
      show: false
    }
  }
};
</script>

<style scoped>
  .courses {
    margin: 2rem;
  }
</style>
