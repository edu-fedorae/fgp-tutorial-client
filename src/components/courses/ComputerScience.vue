<template>
  <v-container>
    <h3>Computer Science - :</h3>
    <v-row align="left" dense>
      <v-col v-for="(i, c) in 3" :key="i" class="d-inline ma-1">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="344" elevation="12">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
              ></v-img>

              <v-card-text>
                <h2 class="title primary--text">
                  Principles of Programming
                </h2>
                Travel to the best outdoor experiene on planet Earth. A vacation
                you will never forget!
              </v-card-text>

              <p v-show="false">{{ c }}</p>

              <v-card-title>
                <v-rating
                  :value="4"
                  dense
                  color="orange"
                  background-color="orange"
                  hover
                  class="mr-2"
                ></v-rating>
                <span class="primary--text subtitle-2">64 Reviews</span>
              </v-card-title>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn>See more info</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Psychology",
  data() {
    return {
      overlay: false
    };
  }
};
</script>

<style scoped></style>
