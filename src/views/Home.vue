<template>
  <div style="display: flex; flex-direction: column">
    <v-card tile>
      <v-img
        :height="
          $vuetify.breakpoint.mdAndUp ? $vuetify.breakpoint.height - 72 : ''
        "
        :src="
          $vuetify.theme.dark
            ? require('@/assets/images/247.jpg.webp')
            : require('@/assets/images/homelight.jpg.webp')
        "
      >
        <v-container
          class="fill-height"
          :class="$vuetify.breakpoint.lgAndUp ? 'px-16 py-8' : 'py-8 px-4'"
        >
          <v-row class="d-flex align-start" style="justify-content: flex-start">
            <v-col cols="12" sm="6">
              <v-card class="glass-card rounded-xl pa-6">
                <v-card-title>
                  <h1
                    class="font-weight-light secondary--text"
                    :class="
                      $vuetify.breakpoint.lgAndUp ? 'display-1' : 'text-h5'
                    "
                  >
                    Welcome to <br v-if="$vuetify.breakpoint.smAndDown" />
                    <span class="primary--text font-weight-black">
                      the Studio</span
                    >
                  </h1>
                </v-card-title>
                <div
                  style="background-image: var(--rainbow); height: 5px; width 100%;"
                ></div>
                <v-card-text class="pb-0">
                  <p class="text-h6 font-weight-light secondary--text mb-0">
                    👋 Hi, I'm
                    <a
                      target="_blank"
                      :href="
                        !$vuetify.theme.dark
                          ? 'www.linkedin.com/in/bankoleesan'
                          : 'https://twitter.com/CodingInNeon'
                      "
                      class="secondary--text font-weight-medium"
                      >{{
                        !$vuetify.theme.dark ? "Bankole Esan" : "@CodingInNeon"
                      }}</a
                    >. A Fullstack Developer with over 6 years coding
                    experience.
                    <small class="caption"
                      ><br />
                      Also part time musician + gamer 🎸👾🎮
                    </small>
                  </p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <home-info></home-info>
                </v-card-actions>
              </v-card>
              <!-- <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
              <h4 class="subheading">Build your application today!</h4> -->
            </v-col>
            <v-col
              cols="12"
              sm="6"
              class="d-flex flex-column justify-space-between"
              style="align-self: stretch;"
            >
              <v-toolbar
                elevation="0"
                color="transparent"
                class="d-flex flex-row-reverse"
                style="width: 100%;"
                :floating="$vuetify.breakpoint.mdAndUp"
                :class="$vuetify.breakpoint.smAndDown ? 'mb-12 mt-0' : ''"
              >
                <v-card
                  class="d-flex align-center glass-card rounded-xl py-2 px-4 subactioncard"
                >
                  <p class="text-h6 font-weight-light mb-0 text-right">
                    {{
                      new Date(currentTime).toLocaleString(["en-us"], {
                        hour12: "true",
                        year: "numeric",
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit"
                      })
                    }}
                  </p>
                </v-card>
              </v-toolbar>

              <v-card class="rounded-xl menu-card glass-card px-2 py-4">
                <!-- :search-input.sync="search" -->
                <v-autocomplete
                  v-model="select"
                  :loading="loading"
                  id="homeSearch"
                  prepend-inner-icon="mdi-magnify"
                  :items="searchTerms"
                  :item-value="searchTerms.route"
                  :item-text="searchTerms.name"
                  cache-items
                  class="mx-4"
                  flat
                  dark
                  rounded
                  @change="gotoResult"
                  :placeholder="
                    $vuetify.breakpoint.mdAndDown
                      ? 'Search Web Pieces / Pages'
                      : 'Search (\'/\' to focus, \';\' to toggle menu)'
                  "
                  solo-inverted
                ></v-autocomplete>
                <v-card-actions class="py-0">
                  <v-tooltip
                    v-for="(link, index) in otherLinks"
                    :key="index"
                    top
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        large
                        :href="link.link"
                        target="_blank"
                        icon
                        class="glass-card mx-2 subactioncard"
                        :class="`${link.class}--text`"
                        v-bind="attrs"
                        v-on="on"
                        ><v-icon>{{ link.icon }}</v-icon></v-btn
                      >
                    </template>
                    <span>{{ link.tooltipText }}</span>
                  </v-tooltip>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        large
                        v-on="on"
                        @click="supdialog = true"
                        class="glass-card mx-2 subactioncard"
                        icon
                        v-bind="attrs"
                        ><v-icon>mdi-help</v-icon></v-btn
                      >
                    </template>
                    <span>What's up with me lately?</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" v-for="(item, i) in items" :key="i">
              <v-card
                class="rounded-xl menu-card"
                :class="`${item.color}-glass-card`"
              >
                <div
                  :class="$vuetify.breakpoint.lgAndUp ? 'pr-8' : 'pr-4'"
                  class="d-flex flex-no-wrap align-center justify-space-between"
                >
                  <v-avatar
                    v-if="$vuetify.breakpoint.lgAndUp"
                    class="ma-3 pl-4"
                    size="125"
                    rounded="xl"
                  >
                    <v-img
                      contain
                      :src="require(`@/assets/images/${item.src}`)"
                    ></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title
                      class="headline"
                      v-text="item.title"
                    ></v-card-title>

                    <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                  </div>
                  <v-btn
                    :to="item.link"
                    :target="['/clients'].includes(item.link) ? '_blank' : ''"
                    x-large
                    class="rounded-xl"
                    :class="$vuetify.theme.dark ? 'glass-card' : 'glass-card'"
                    ><v-icon size="32" :color="item.color">{{
                      item.icon
                    }}</v-icon></v-btn
                  >
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-card>
    <v-dialog
      scrollable
      :fullscreen="$vuetify.breakpoint.smAndDown"
      v-model="supdialog"
      max-width="500"
    >
      <v-card
        :tile="$vuetify.breakpoint.smAndDown"
        :class="$vuetify.breakpoint.smAndDown ? '' : 'rounded-xl'"
      >
        <v-card-title class="headline">
          <v-icon color="primary" class="mr-4">mdi-help</v-icon>

          What I'm up to to lately
          <v-spacer></v-spacer>
          <v-btn
            :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
            icon
            @click="supdialog = false"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-card-title>
        <div
          :class="$vuetify.theme.dark ? 'rainbow-dark' : 'rainbow'"
          style="width: 100%; height: 2px;"
        ></div>
        <v-card-text
          class="py-0 pl-0"
          :style="{ maxHeight: $vuetify.breakpoint.mdAndUp ? '390px' : '' }"
        >
          <v-timeline align-top dense>
            <v-timeline-item
              v-for="(item, i) in currently"
              :key="i"
              :icon="item.icon"
              class="pb-2"
              fill-dot
            >
              <div class="pb-0 mt-n2">
                <!-- <h2 class="headline font-weight-light mb-0 primary--text">
                  Currently watching
                </h2> -->
                <v-expansion-panels flat>
                  <v-expansion-panel class="pl-0">
                    <v-expansion-panel-header class="pl-0">
                      <h2
                        class="headline font-weight-light mb-0"
                        :class="
                          $vuetify.theme.dark
                            ? 'secondary--text'
                            : 'primary--text'
                        "
                      >
                        {{ item.title }}
                      </h2></v-expansion-panel-header
                    >
                    <v-expansion-panel-content class="pl-0 contently">
                      <div class="ma-0 pa-0" v-if="item.list">
                        <div
                          class="ma-0 mb-4 pa-0"
                          v-for="(listItem, j) in item.list"
                          :key="j"
                        >
                          <h2 class="ma-0 mb-2 pa-0 font-weight-light">
                            {{ j + 1 }}. {{ listItem.title }}
                          </h2>
                          <v-img
                            v-if="listItem.image"
                            :src="
                              require(`@/assets/images/projectImages/${listItem.image}`)
                            "
                          />

                          <div
                            class="ma-0 mt-1 pa-0 caption"
                            v-html="listItem.description"
                          >
                            <!-- {{ listItem.description }} -->
                          </div>
                        </div>
                      </div>
                      <div v-if="item.comment" v-html="item.comment"></div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="supdialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import HomeInfo from "@/components/modals/HomeInfo.vue";
import VuetifyColors from "vuetify/lib/util/colors";

document.addEventListener("keypress", (e) => {
  // console.log(window.location);
  console.log({ e, location: window.location.pathname });
  if (e.key == "/") {
    if (window.location.hash == "#/") {
      e.preventDefault();
      // console.log(menuItems);
      document.querySelector("#homeSearch").focus();
    }
  }
});

export default {
  components: {
    HomeInfo
  },
  data: () => ({
    supdialog: false,
    currently: [
      {
        title: "Currently Working on",
        icon: "mdi-hammer-screwdriver",
        list: [
          {
            title: "An 'Airbnb-like' App",
            image: "djangorealestate.png.webp",
            description:
              "A personal web app project to help address the looming housing crisis, both locally, and (if possible), internationally"
          },
          {
            title: "Webpieces",
            image: "webpieces.webp",
            description:
              "Prepping the Youtube, Twitch, and Discord for the Webpieces series"
          }
        ],
        comment: ""
      },
      {
        title: "Currently Learning",
        icon: "mdi-brain",
        list: [
          {
            title: "React",
            image: "",
            description: "",
            links: [{ url: "", text: "" }]
          },
          {
            title: "Docker",
            image: "",
            description: "",
            links: [{ url: "", text: "" }]
          },
          {
            title: "Digital Art && Drawing",
            image: "",
            description: "",
            links: [{ url: "", text: "" }]
          }
        ]
      },
      {
        title: "Currently Reading",
        icon: "mdi-book-open-page-variant",
        list: [
          {
            title: "Realms of Runeterra",
            image: "runeterra.webp",
            description: "League of Legends lore - super interesting."
          }
        ]
      },
      {
        title: "Currently Watching",
        icon: "mdi-television-classic",
        comment: "<p>I'm not watching anything right now. No time for TV 😓</p>"
      },
      {
        title: "Currencly Playing",
        icon: "mdi-google-controller",
        list: [
          {
            title: "League of Legends",
            image: "league.webp",
            description: ""
          },
          {
            title: "Valorant",
            image: "valorant.webp",
            description: ""
          },
          {
            title: "Genshin Impact",
            image: "genshin.webp",
            description: ""
          }
        ],
        comment: ""
      },
      {
        title: "Current Wishlist",
        icon: "mdi-cart-variant",
        list: [
          {
            title: "",
            image: "",
            description: "",
            links: [{ url: "", text: "" }]
          }
        ]
      },
      {
        title: "Current Hopes",
        icon: "mdi-cart-variant",
        list: [
          {
            title: "",
            image: "",
            description: "",
            links: [{ url: "", text: "" }]
          }
        ]
      },
      {
        title: "Current Dreams",
        icon: "mdi-cart-variant",
        list: [
          {
            title: "",
            image: "",
            description: "",
            links: [{ url: "", text: "" }]
          }
        ]
      },
      {
        title: "Current Fears",
        icon: "mdi-cart-variant",
        list: [
          {
            title: "",
            image: "",
            description: "",
            links: [{ url: "", text: "" }]
          }
        ]
      }
    ],
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    currentTime: new Date(),
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: false,
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    },
    items: [
      {
        color: "warning",
        icon: "mdi-puzzle-check",
        src: "webpiece.svg",
        title: "Web Pieces",
        link: "/webpieces",
        artist: `Browse Webpieces or add a webpiece you're curious about`
      },
      {
        color: "info",
        icon: "mdi-briefcase",
        src: "needhelp.svg",
        title: "Projects",
        link: "/projects",
        artist: `View some of my work. Interested in building together?`
      },
      {
        color: "accent",
        icon: "mdi-account-circle",
        src: "about.svg",
        title: "About Me",
        link: "/about",
        artist: "View info about me. Stack, skills, experience, my resume etc."
      },
      {
        color: "success",
        icon: "mdi-handshake",
        src: "client.svg",
        title: "Clients",
        link: "/clients",
        artist: "Current/previous clients, click here to access the client area"
      }
    ],
    loading: false,
    autoitems: [],
    search: null,
    select: null,
    searchTerms: [
      {
        value: "/webpieces",
        text: "Webpieces"
      },
      {
        value: "/webpieces/add",
        text: "Webpieces - Add a webpiece"
      },
      {
        value: "/webpieces/queue",
        text: "Webpieces - Request queue"
      },
      {
        value: "/webpieces/vuetify/alerts",
        text: "Webpieces - Vuetify Alerts"
      },
      {
        value: "/webpieces/vanilla/splitscreen",
        text: "Webpieces - Vanilla Splitscreen"
      },

      {
        value: "/projects",
        text: "Projects - My Web Projects"
      },
      {
        value: "/projects/technologies",
        text: "Projects - Technologies"
      },
      {
        value: "/projects/myprocess",
        text: "Projects - My Process"
      },
      {
        value: "/about",
        text: "About Me"
      }
    ],
    otherLinks: [
      {
        tooltipText: "Call me",
        link: "tel:+2348069166906",
        class: "warning",
        icon: "mdi-phone"
      },
      {
        tooltipText: "Send me an Email",
        link: "mailto:techybanky@gmail.com?subject=👋Hey&body=Hi",
        class: "info",
        icon: "mdi-email"
      },
      {
        tooltipText: "The Studio Blog",
        link: "https://blog.banky.studio",
        class: "accent",
        icon: "mdi-post"
      }
      // {
      //   tooltipText: `What's up with me`,
      //   link: "sup",
      //   class: "secondary",
      //   icon: "mdi-help"
      // }
    ]
  }),

  watch: {},
  methods: {
    gotoResult(e) {
      this.$router.push(e);
    },
    updateTime() {
      setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
    },
    showColors() {
      console.log(VuetifyColors);
      console.log(this.$vuetify);
    }
  },
  mounted() {
    // document.addEventListener("DOMContentLoaded", (e) => {
    //   // console.log("ready");
    // });
    setInterval(() => {
      this.updateTime();
    }, 1000);
    this.gsap.from(".menu-card", {
      x: 500,
      opacity: 0,
      duration: 0.75,
      stagger: 0.25
    });
    this.gsap.from(".subactioncard", {
      x: 500,
      opacity: 0,
      duration: 1,
      stagger: 0.15
    });
  }
};
</script>
<style>
.contently .v-expansion-panel-content__wrap {
  padding-left: 0px !important;
  padding-bottom: 0px !important;
}
</style>
