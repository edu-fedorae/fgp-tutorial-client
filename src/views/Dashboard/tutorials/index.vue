<template>
  <v-container>
    <v-row v-if="user.role != 0">
      <v-col>
        <v-form @submit.prevent="create">
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
                <v-text-field label="Title" v-model="form.title"></v-text-field>

                <v-text-field
                  label="Description"
                  v-model="form.description"
                ></v-text-field>

                <v-text-field
                  label="Session URL"
                  v-model="form.sessionUrl"
                ></v-text-field>

                Create Session (optional):
                <a href="https://meet.google.com" target="_blank"
                  ><v-btn class="ma-1" block>Google Meet</v-btn></a
                >
                <a href="https://discord.com" target="_blank"
                  ><v-btn class="ma-1 deep-purple white--text" block
                    >Discord</v-btn
                  ></a
                >
                <a href="https://ncu.edu.jm" target="_blank"
                  ><v-btn class="ma-1" block>Aeorion - Blackboard</v-btn></a
                >

                <br />

                <v-divider></v-divider>

                <v-row>
                  <v-col>
                    Start Date & Time:
                    <v-date-picker v-model="form.startAt"></v-date-picker>
                  </v-col>
                  <v-col>
                    End Date & Time:
                    <v-date-picker v-model="form.endAt"></v-date-picker>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="#1E3D58" style="color: #ffffff">
                  Create
                </v-btn>
              </v-card-actions>
              <v-snackbar
                v-model="hasSaved"
                :timeout="2000"
                absolute
                bottom
                left
              >
                Your new tutorial has been created
              </v-snackbar>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>

    <h1>Active Tutorials</h1>
    <v-row dense>
      <v-col v-for="(i, tutorial) in tutorials" :key="i" class="d-inline">
        <v-card max-width="344" elevation="12">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <p>{{ tutorial }}</p>

          <v-card-title>
<!--            {{ tutorials[i].title }}-->
          </v-card-title>

          <v-card-subtitle> by  </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              :to="{ path: `/dashboard/tutorials/` }"
            >
              View
            </v-btn>

            <v-btn
              color="blue lighten-2"
              v-if="user.role == 1"
              :to="{ path: `/dashboard/tutorials/edit` }"
            >
              Edit
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
                description
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
import axios from "axios";

export default {
  data() {
    return {
      show: false,
      hasSaved: false,
      isEditing: null,
      model: null,
      value: [200, 675, 410, 390, 310, 460, 250, 240],
      form: {
        title: "",
        description: "",
        sessionUrl: "",
        startAt: "",
        endAt: ""
      },
      tutorials: this.$store.getters["tutorials/allTutorials"]
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
    },
    create() {
      axios.post("tutorial", this.form).then(() => {
        alert("Tutorial Create Successfully");
      });
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
