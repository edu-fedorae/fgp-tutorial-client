<template>
  <v-app>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "@/components/core/AppHeader";
import AppFooter from "@/components/core/AppFooter";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
    ...mapActions("tutorials", ["getTutorials"])
  },
  created() {
    this.getTutorials()
  },
  mounted () {
    window.scrollTo(0, 0)
  }
};
</script>
