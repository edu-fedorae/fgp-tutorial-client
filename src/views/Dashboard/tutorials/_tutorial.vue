<template>
  <v-container>
    <h1>Tutorial Session</h1>
    <v-card class="mx-auto" elevation="12" height="100">
      <v-card-text>
        <div class="text-center">
          <v-btn
            color="deep-purple accent-4"
            class="white--text"
            @click="overlay = !overlay"
          >
            Join Session
            <v-icon right>
              mdi-open-in-new
            </v-icon>
          </v-btn>

          <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
        </div>
      </v-card-text>
    </v-card>

    <br />
    <h1>Session Recordings - :</h1>
    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="item.img" height="225px">
                  <v-card-title class="title white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">
                        {{ item.title }}
                      </p>

                      <div>
                        <p
                          class="ma-0 body-1 font-weight-bold font-italic text-left"
                        >
                          {{ item.text }}
                        </p>
                        <p
                          class="caption font-weight-medium font-italic text-left"
                        >
                          {{ item.subtext }}
                        </p>
                      </div>

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          color="transparent"
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>

    <br />
    <h1>Session Slides - :</h1>
    <v-card elevation="12" class="mx-auto">
      <v-system-bar lights-out></v-system-bar>
      <v-carousel
        :continuous="false"
        :cycle="cycle"
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="400"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-list two-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            <v-list-item-subtitle>Tutor</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-switch v-model="cycle" label="Cycle Slides" inset></v-switch>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tutorial: "",
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1"
      ],
      overlay: false,
      cycle: true,
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
      items: [
        {
          title: "New Releases",
          text: `It's New Release Friday`,
          subtext: "Newly released songs. Updated daily.",
          img: "http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg"
        },
        {
          title: "Rock",
          text: "Greatest Rock Hits",
          subtext: "Lose yourself in rock tunes.",
          img:
            "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        },
        {
          title: "Mellow Moods",
          text: "Ambient Bass",
          subtext: "Chill beats to mellow you out.",
          img: "http://lorempixel.com/output/abstract-q-c-640-480-6.jpg"
        }
      ],
      transparent: "rgba(255, 255, 255, 0)"
    };
  },
  created() {
    this.slug = this.$route.params.tutorial;
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 3000);
    }
  }
};
</script>

<style lang="css" scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
