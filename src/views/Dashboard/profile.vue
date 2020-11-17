<template>
  <v-container>

    <v-card class="mt-2 mx-auto" elevation="12">

      <v-card-text class="pt-0">
          <v-toolbar flat color="">
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-light">
              User Profile
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="" fab small @click="isEditing = !isEditing">
              <v-icon v-if="isEditing">
                mdi-close
              </v-icon>
              <v-icon v-else>
                mdi-pencil
              </v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                    v-model="user.name"
                    :disabled="!isEditing"
                    label="Name"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
                v-model="user.email"
                :disabled="!isEditing"
                label="Email"
            ></v-text-field>

            <v-text-field
                :disabled="!isEditing"
                label="Password"
                value="********"
            ></v-text-field>

            <v-text-field
              v-if="user.role === 0"
              disabled
              label="Student"
            ></v-text-field>
            <v-text-field
              v-else
              disabled
              label="Tutor"
            ></v-text-field>

          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!isEditing" color="#1E3D58" style="color: #ffffff" @click="save">
              Save
            </v-btn>
          </v-card-actions>
          <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
            Your profile has been updated
          </v-snackbar>
      </v-card-text>
    </v-card>


  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
    };
  },
  computed: {
    ...mapState("context", ["user"])
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

<style lang="css" scoped>

</style>
