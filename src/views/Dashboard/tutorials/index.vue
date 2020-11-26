<template>
  <v-container>
    <v-row v-if="user.role != 0">
      <v-col>
        <v-card class="mt-2 mx-auto" elevation="12">
          <v-card-text class="pt-0">
            <v-toolbar flat color="">
              <v-icon>mdi-account</v-icon>
              <v-toolbar-title class="font-weight-bold">
                Create Tutorial
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-text-field label="Title"></v-text-field>

              <v-text-field label="Description"></v-text-field>

              <v-text-field label="Session URL"></v-text-field>

              Create Session (optional):
              <v-btn class="ma-1" block>Google Meet</v-btn>
              <v-btn class="ma-1 deep-purple white--text" block>Discord</v-btn>
              <v-btn class="ma-1" block>Aeorion - Blackboard</v-btn>

              <br />

              <v-divider></v-divider>

              <v-row>
                <v-col>
                  Start Date & Time:
                  <v-date-picker></v-date-picker>
                </v-col>
                <v-col>
                  End Date & Time:
                  <v-date-picker></v-date-picker>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#1E3D58" style="color: #ffffff" @click="save">
                Create
              </v-btn>
            </v-card-actions>
            <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
              Your new tutorial has been created
            </v-snackbar>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <h1>Active Tutorials</h1>
    <v-row dense>
      <v-col v-for="(i, n) in 4" :key="i" class="d-inline">
        <v-card max-width="344" elevation="12">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title>
            Top western road trips
          </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder {{ n }} </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              :to="{ path: `/dashboard/tutorials/${n}` }"
            >
              Join
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      show: false,
      hasSaved: false,
      isEditing: null,
      model: null,
      value: [200, 675, 410, 390, 310, 460, 250, 240]
    };
  },
  computed: {
    ...mapGetters({
      user: "context/user"
    })
  },
  methods: {
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    }
  }
};
</script>
