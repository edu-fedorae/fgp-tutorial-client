<template>
  <v-container>
    <h3>Computer Science - :</h3>
    <v-row align="left" dense>
      <v-col v-for="(i, c) in 3" :key="i" class="d-inline ma-1">
        <v-card :loading="loading" max-width="374" elevation="12" dense>
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Intro to Computer Science</v-card-title>

          <v-card-text>
            <v-row align="left" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">
                4.5 (413)
              </div>
            </v-row>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <p v-show="false">{{ c }}</p>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Available at</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>5:30AM</v-chip>

              <v-chip>7:30AM</v-chip>

              <v-chip>8:00AM</v-chip>

              <v-chip>9:00AM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ComputerScience.vue",
  data() {
    return {
      loading: false,
      selection: 1
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>

<style scoped></style>
