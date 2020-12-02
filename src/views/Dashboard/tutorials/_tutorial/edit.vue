<template>
  <v-container>
    <v-form @submit.prevent="update">
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
            <v-text-field label="Title" v-model="tutorial.title"></v-text-field>

            <v-text-field
              label="Description"
              v-model="tutorial.description"
            ></v-text-field>

            <v-text-field
              label="Session URL"
              v-model="tutorial.sessionUrl"
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
                <v-date-picker v-model="tutorial.startAt"></v-date-picker>
              </v-col>
              <v-col>
                End Date & Time:
                <v-date-picker v-model="tutorial.endAt"></v-date-picker>
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
        </v-card-text>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "edit",
  data() {
    return {
      tutorial: [],
      slug: null
    };
  },
  mounted() {
    this.slug = this.$route.params.tutorial;
    axios.get(`tutorial/${this.slug}`).then(res => {
      this.tutorial = res.data;
      console.log("Tutorials Received Successful.");
    });
  },
  methods: {
    update() {
      axios.put(`tutorial/${this.slug}`, this.form).then(() => {
        alert("Tutorial Updated Successfully");
      });
    }
  }
};
</script>

<style scoped></style>
