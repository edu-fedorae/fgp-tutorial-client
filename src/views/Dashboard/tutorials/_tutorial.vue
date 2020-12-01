<template>
  <v-container style="max-width: 850px;">
    <h1>Tutorial Session</h1>
    <v-card
        class="mx-auto overflow-hidden"
        style="width: 100%;"
        elevation="12"
    >
      <v-row>
        <v-col
            class="d-flex"
            cols="6"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/ratings/fortnite1.png"
          ></v-img>
        </v-col>
        <v-col cols="6">
          <v-container
              class="pa-0 pl-2"
              style="margin: -4px 0"
          >
            <v-row>
              <v-col
                  class="d-flex"
                  cols="7"
              >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite2.png"
                ></v-img>
              </v-col>
              <v-col
                  class="d-flex"
                  cols="5"
              >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite3.png"
                ></v-img>
              </v-col>
              <v-col
                  class="d-flex"
                  cols="5"
              >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite4.png"
                ></v-img>
              </v-col>
              <v-col
                  class="d-flex"
                  cols="7"
              >
                <v-img
                    src="https://cdn.vuetifyjs.com/images/ratings/fortnite5.png"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-card-title class="align-start">
        <div>
          <span class="headline">FORTNITE</span>
          <div class="grey--text font-weight-light">
            Video game
          </div>
        </div>
        <v-spacer></v-spacer>
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
        <v-spacer></v-spacer>
        <v-dialog
            v-model="dialog"
            width="400"
        >
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">
              mdi-share-variant
            </v-icon>
          </template>
          <v-card>
            <v-card-title>
              <span class="title font-weight-bold">Share</span>
              <v-spacer></v-spacer>
              <v-btn
                  class="mx-0"
                  icon
                  @click="dialog = false"
              >
                <v-icon>mdi-close-circle-outline</v-icon>
              </v-btn>
            </v-card-title>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon color="indigo">
                    mdi-facebook
                  </v-icon>
                </v-list-item-action>
                <v-card-title>Facebook</v-card-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon color="cyan">
                    mdi-twitter
                  </v-icon>
                </v-list-item-action>
                <v-card-title>Twitter</v-card-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-action>
                <v-card-title>Email</v-card-title>
              </v-list-item>
            </v-list>
            <v-text-field
                ref="link"
                :label="copied ? 'Link copied' : 'Click to copy link'"
                class="pa-4"
                readonly
                value="https://g.co/kgs/nkrK43"
                @click="copy"
            ></v-text-field>
          </v-card>
        </v-dialog>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <span class="pl-2 grey--text text--darken-2 font-weight-light caption">16,544 reviews</span>
        <v-spacer></v-spacer>
        <v-rating
            v-model="nrating"
            length="10"
            readonly
        >
          <template v-slot:item="props">
            <v-icon
                large
                :color="props.isFilled ? 'purple darken-4' : ''"
                v-text="`mdi-numeric${props.index}-box`"
            ></v-icon>
          </template>
        </v-rating>
      </v-card-actions>
      <div class="pa-4 pt-0 caption">
        <em>Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.</em>
      </div>
    </v-card>

    <br />
    <h1>Reviews - :</h1>
    <v-container style="max-width: 1000px;">
      <v-timeline dense clipped>
        <v-timeline-item
            fill-dot
            class="white--text mb-12"
            color="orange"
            large
        >
          <template v-slot:icon>
            <span>R</span>
          </template>
          <v-text-field
              v-model="input"
              hide-details
              flat
              label="Leave a review..."
              solo
              @keydown.enter="review"
          >
            <template v-slot:append>
              <v-btn class="mx-0" depressed outlined @click="review">
                Submit
              </v-btn>
            </template>
          </v-text-field>
        </v-timeline-item>

        <v-slide-x-transition group>
          <v-timeline-item
              v-for="event in timeline"
              :key="event.id"
              class="mb-4"
              color="pink"
              small
          >
            <v-row justify="space-between">
              <v-col cols="7" v-text="event.text"></v-col>
              <v-col class="text-right" cols="5" v-text="event.time"></v-col>
            </v-row>
          </v-timeline-item>
        </v-slide-x-transition>

        <v-timeline-item class="mb-6" hide-dot>
          <span>TODAY</span>
        </v-timeline-item>

        <v-timeline-item
            class="mb-4"
            color="grey"
            icon-color="grey lighten-2"
            small
        >
          <v-row justify="space-between">
            <v-col cols="7">
              Amazing Tutorial Session
            </v-col>
            <v-col class="text-right" cols="5">
              15:26 EDT
            </v-col>
          </v-row>
          <v-rating
              v-model="rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              small
          ></v-rating>
        </v-timeline-item>

        <v-timeline-item class="mb-4" small>
          <v-row justify="space-between">
            <v-col cols="7">
              <v-chip class="white--text ml-0" color="purple" label small>
                APP
              </v-chip>
              Great Teaching.
            </v-col>
            <v-col class="text-right" cols="5">
              15:25 EDT
            </v-col>
          </v-row>
          <v-rating
              v-model="rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
              small
          ></v-rating>
        </v-timeline-item>

      </v-timeline>
    </v-container>

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
      copied: false,
      dialog: false,
      nrating: 10,
      rating: 4.5,
      events: [],
      input: null,
      nonce: 0,
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
  },

  computed: {
    timeline() {
      return this.events.slice().reverse();
    }
  },

  methods: {
    review() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(
          /:\d{2}\sGMT-\d{4}\s\((.*)\)/,
          (match, contents) => {
            return `${contents
              .split(" ")
              .map(v => v.charAt(0))
              .join("")}`;
          }
        )
      });

      this.input = null;
    },
    copy () {
      const markup = this.$refs.link
      markup.focus()
      document.execCommand('selectAll', false, null)
      this.copied = document.execCommand('copy')
    },
  },
  mounted () {
    window.scrollTo(0, 0)
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
