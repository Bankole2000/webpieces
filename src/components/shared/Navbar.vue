<template>
  <div>
    <!-- :src="$vuetify.theme.dark ? require(`@/assets/images/247.jpg`) : ''" -->
    <v-navigation-drawer
      :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'"
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
      :style="{ backgroundColor: $vuetify.theme.dark ? '#121212' : '' }"
    >
      <v-list dense nav class="py-0 my-0">
        <!-- :style="{ backgroundColor: $vuetify.theme.dark ? '#12121260' : '' }" -->
        <v-list-item two-line class="my-0">
          <v-list-item-avatar size="50">
            <img
              :src="
                $vuetify.theme.dark
                  ? require('@/assets/blackneon.jpg')
                  : require('@/assets/images/dayprofile.jpg.webp')
              "
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              ><p
                class="text-h6 my-0"
                :class="
                  $vuetify.theme.dark ? 'primary--text' : 'secondary--text'
                "
              >
                {{ $vuetify.theme.dark ? "@TheNeonCoder" : "Bankole Esan" }}
              </p></v-list-item-title
            >
            <v-list-item-subtitle class="mt-n1"
              >Fullstack Freelance</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list>
          <v-list-item class="my-3" v-for="item in items" :key="item.title">
            <v-btn
              class="mr-3 rounded-lg"
              block
              :to="item.link"
              x-large
              :loading="loadingTestButton"
              :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'"
              :class="{
                'glass-card': $vuetify.theme.dark,
                morph: !$vuetify.theme.dark,
                'primary--text': $route.path.includes(item.link)
              }"
              ><v-icon left>{{ item.icon }}</v-icon> {{ item.title }}</v-btn
            >
            <!-- <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content> -->
          </v-list-item>
        </v-list>
      </v-list>
      <template v-slot:append>
        <div class="pa-0">
          <div
            class="d-flex flex-wrap pa-2"
            :style="{ backgroundColor: $vuetify.theme.dark ? '#121212' : '' }"
            v-if="$vuetify.breakpoint.smAndDown"
          >
            <v-btn
              v-for="(link, index) in socialLinks"
              :key="index"
              icon
              large
              :href="link.link"
              :target="
                ['twitter', 'facebook', 'github'].includes(link.name)
                  ? '_blank'
                  : ''
              "
              :color="link.color"
              class="ma-2"
              :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
              ><v-icon size="32">{{ link.icon }}</v-icon></v-btn
            >
            <TwitchModal />
            <DiscordModal />
            <YoutubeModal />
          </div>
          <div
            class="pa-2"
            :style="{ backgroundColor: $vuetify.theme.dark ? '#121212' : '' }"
          >
            <v-btn
              large
              :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
              block
              to="/clients"
              target="_blank"
            >
              <v-icon left>mdi-calendar-check</v-icon>
              Book a Meeting
            </v-btn>
          </div>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'"
      height="72"
      :clipped-left="primaryDrawer.clipped"
      app
    >
      <v-app-bar-nav-icon
        :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
        id="menuIcon"
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
        class="ml-4"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        >{{ $vuetify.theme.dark ? "@Neon" : "Bankole" }}.<span
          class="font-weight-black primary--text"
          >{{ $vuetify.theme.dark ? "Coder" : "Esan" }}</span
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>

      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          v-for="(link, index) in socialLinks"
          :key="index"
          icon
          :href="link.link"
          :target="
            ['twitter', 'facebook', 'github'].includes(link.name)
              ? '_blank'
              : ''
          "
          :color="link.color"
          class="mx-2"
          :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
          ><v-icon size="32">{{ link.icon }}</v-icon></v-btn
        >
        <TwitchModal />
        <DiscordModal />
        <YoutubeModal />
        <v-btn icon @click="colorMenu = true">
          <v-icon size="32">mdi-palette</v-icon>
        </v-btn>
      </div>
      <v-btn
        icon
        class="mx-2"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>
          {{
            $vuetify.theme.dark
              ? "mdi-weather-night"
              : "mdi-white-balance-sunny"
          }}
        </v-icon>
      </v-btn>
      <!-- <v-switch
        style="margin-top: 22px"
        class="mx-6"
        v-model="$vuetify.theme.dark"
        primary
      >
        <template v-slot:label>
          <v-icon>{{
            $vuetify.theme.dark
              ? "mdi-weather-night"
              : "mdi-white-balance-sunny"
          }}</v-icon>
        </template>
      </v-switch> -->
    </v-app-bar>
    <v-footer
      v-if="!musicPlayer.show"
      :inset="true"
      :style="{ backgroundColor: $vuetify.theme.dark ? '#12121260' : '#FFF' }"
      absolute
      app
    >
      <div class="d-flex" style="width: 100%; align-items: center">
        <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
        <v-spacer></v-spacer>
        <a
          class="mb-0 mr-4"
          style="cursor: pointer; text-decoration: none"
          @click="toggleMusicPlayer(true)"
        >
          Music {{ $vuetify.breakpoint.mdAndUp ? "Player" : "" }} 🎵
        </a>
        <a
          class="mb-0 mr-4"
          style="cursor: pointer; text-decoration: none"
          @click="colorMenu = true"
        >
          {{ $vuetify.breakpoint.mdAndUp ? "Try out different" : "" }} colors 🎨
        </a>
      </div>
    </v-footer>
    <MusicFooter @showColorModal="colorMenu = true" />
    <v-dialog v-model="colorMenu" max-width="500">
      <v-card class="rounded-xl">
        <v-card-title>
          Pick your preferred color
          <v-spacer></v-spacer>
          <v-btn
            :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
            icon
            @click="colorMenu = false"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-card-title>
        <div
          :class="$vuetify.theme.dark ? 'rainbow-dark' : 'rainbow'"
          style="width: 100%; height: 2px"
        ></div>
        <v-card-text class="pa-4">
          <v-radio-group
            v-model="preferredColor"
            @change="changeColorScheme($event)"
            row
          >
            <v-radio hide-details value="pink">
              <template v-slot:label>
                <v-icon :color="defaultColorScheme.light.primary"
                  >mdi-invert-colors</v-icon
                >
              </template>
            </v-radio>
            <v-radio label="purple" value="purple">
              <template v-slot:label>
                <v-icon :color="defaultColorScheme.light.purple"
                  >mdi-invert-colors</v-icon
                >
              </template>
            </v-radio>
            <v-radio label="green" value="green">
              <template v-slot:label>
                <v-icon :color="defaultColorScheme.light.green"
                  >mdi-invert-colors</v-icon
                >
              </template>
            </v-radio>
            <v-radio label="blue" value="blue">
              <template v-slot:label>
                <v-icon :color="defaultColorScheme.light.blue"
                  >mdi-invert-colors</v-icon
                >
              </template>
            </v-radio>
            <v-radio label="orange" value="orange">
              <template v-slot:label>
                <v-icon :color="defaultColorScheme.light.orange"
                  >mdi-invert-colors</v-icon
                >
              </template>
            </v-radio>
            <v-radio label="red" value="red">
              <template v-slot:label>
                <v-icon :color="defaultColorScheme.light.red"
                  >mdi-invert-colors</v-icon
                >
              </template>
            </v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer> </v-spacer>
          <v-btn
            text
            class="rounded-lg error--text morph"
            @click="colorMenu = false"
            ><v-icon left>mdi-close</v-icon> Close</v-btn
          >
          <!-- :class="$vuetify.theme.dark ? 'glass-card' : 'morph'" -->
        </v-card-actions>
      </v-card>
    </v-dialog>
    <Snackbar />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Snackbar from "./Snackbar.vue";
import YoutubeModal from "../blocks/YoutubeModal.vue";
import TwitchModal from "../blocks/TwitchModal.vue";
import DiscordModal from "../blocks/DiscordModal";
import MusicFooter from "./MusicFooter";

document.addEventListener("keydown", e => {
  if (e.key == ";") {
    document.querySelector("#menuIcon").click();
    // document.querySelector("#sideNav").focus();
  }
});

export default {
  components: {
    Snackbar,
    YoutubeModal,
    TwitchModal,
    DiscordModal,
    MusicFooter
  },
  data() {
    return {
      colorMenu: false,
      loadingTestButton: false,
      defaultColorScheme: {
        light: {
          accent: "#9c27b0",
          primary: "#e91e63",
          error: "#FF0000",
          warning: "#FFB300",
          success: "#4CAF50",
          info: "#2196F3",
          purple: "#d500f9",
          green: "#00c853",
          blue: "#00b0ff",
          orange: "#ef6c00",
          red: "#ff0000"
        },
        dark: {
          accent: "#9c27b0",
          primary: "#e91e63",
          error: "#FF0000",
          warning: "#FFB300",
          success: "#4CAF50",
          info: "#2196F3",
          purple: "#d500f9",
          green: "#00FF00",
          blue: "#00b0ff",
          orange: "#fb8c00",
          red: "#ff0000"
        }
      },
      drawers: ["Default (no property)", "Permanent", "Temporary"],
      primaryDrawer: {
        model: false,
        type: "default (no property)",
        clipped: false,
        floating: false,
        mini: false
      },
      footer: {
        inset: false
      },
      preferredColor: "pink",
      items: [
        { title: "Studio", icon: "mdi-web", link: "/" },
        { title: "Projects", icon: "mdi-quadcopter", link: "/projects" },
        { title: "Web Pieces", icon: "mdi-puzzle", link: "/webpieces" },
        { title: "About Me", icon: "mdi-account", link: "/about" },
        { title: "Music", icon: "mdi-music", link: "/music" }
      ],
      socialLinks: [
        {
          name: "twitter",
          link: "https://twitter.com/TheNeonCoder",
          color: "#2196f3",
          icon: "mdi-twitter"
        },
        {
          name: "email",
          link: "mailto:techybanky@gmail.com",
          color: "orange",
          icon: "mdi-email"
        },
        {
          name: "whatsapp",
          link: "https://wa.me/+2348069166906",
          color: "#52b155",
          icon: "mdi-whatsapp"
        },
        // { name: '', link: '', color: 'error', icon: 'mdi-youtube' },
        // { name: '', link: '', color: 'primary', icon: 'mdi-twitch' },
        {
          name: "github",
          link: "https://github.com/bankole2000",
          color: "secondary",
          icon: "mdi-github"
        }
        // { name: '', link: '', color: 'accent', icon: 'mdi-discord' },
      ]
    };
  },
  methods: {
    ...mapActions(["showToast", "toggleMusicPlayer"]),
    displayToast(e) {
      this.loadingTestButton = true;
      console.log({ e });
      this.showToast({
        sclass: "info",
        message: "This is a test Snackbar",
        timeout: 2000
      }).then(() => {
        setTimeout(() => {
          this.loadingTestButton = false;
        }, 2000);
      });
    },
    changeColorScheme(e) {
      console.log({ e });
      if (e == "pink") {
        this.$vuetify.theme.themes.dark.primary = this.defaultColorScheme.dark.primary;
        this.$vuetify.theme.themes.light.primary = this.defaultColorScheme.light.primary;
        this.$vuetify.theme.themes.dark.accent = this.defaultColorScheme.dark.accent;
        this.$vuetify.theme.themes.light.accent = this.defaultColorScheme.light.accent;
        this.$vuetify.theme.themes.dark.warning = this.defaultColorScheme.dark.warning;
        this.$vuetify.theme.themes.light.warning = this.defaultColorScheme.light.warning;
        this.$vuetify.theme.themes.dark.success = this.defaultColorScheme.dark.success;
        this.$vuetify.theme.themes.light.success = this.defaultColorScheme.light.success;
        this.$vuetify.theme.themes.dark.info = this.defaultColorScheme.dark.info;
        this.$vuetify.theme.themes.light.info = this.defaultColorScheme.light.info;
      }
      if (e == "purple") {
        this.$vuetify.theme.themes.dark.primary = this.defaultColorScheme.dark.purple;
        this.$vuetify.theme.themes.light.primary = this.defaultColorScheme.light.purple;
        this.$vuetify.theme.themes.dark.accent = this.defaultColorScheme.dark.primary;
        this.$vuetify.theme.themes.light.accent = this.defaultColorScheme.light.primary;
        this.$vuetify.theme.themes.dark.warning = this.defaultColorScheme.dark.warning;
        this.$vuetify.theme.themes.light.warning = this.defaultColorScheme.light.warning;
        this.$vuetify.theme.themes.dark.success = this.defaultColorScheme.dark.success;
        this.$vuetify.theme.themes.light.success = this.defaultColorScheme.light.success;
        this.$vuetify.theme.themes.dark.info = this.defaultColorScheme.dark.info;
        this.$vuetify.theme.themes.light.info = this.defaultColorScheme.light.info;
      }
      if (e == "green") {
        this.$vuetify.theme.themes.dark.primary = this.defaultColorScheme.dark.green;
        this.$vuetify.theme.themes.light.primary = this.defaultColorScheme.light.green;
        this.$vuetify.theme.themes.dark.accent = this.defaultColorScheme.dark.accent;
        this.$vuetify.theme.themes.light.accent = this.defaultColorScheme.light.accent;
        this.$vuetify.theme.themes.dark.warning = this.defaultColorScheme.dark.warning;
        this.$vuetify.theme.themes.light.warning = this.defaultColorScheme.light.warning;
        this.$vuetify.theme.themes.dark.success = this.defaultColorScheme.dark.primary;
        this.$vuetify.theme.themes.light.success = this.defaultColorScheme.light.primary;
        this.$vuetify.theme.themes.dark.info = this.defaultColorScheme.dark.info;
        this.$vuetify.theme.themes.light.info = this.defaultColorScheme.light.info;
      }
      if (e == "blue") {
        this.$vuetify.theme.themes.dark.primary = this.defaultColorScheme.dark.blue;
        this.$vuetify.theme.themes.light.primary = this.defaultColorScheme.light.blue;
        this.$vuetify.theme.themes.dark.accent = this.defaultColorScheme.dark.accent;
        this.$vuetify.theme.themes.light.accent = this.defaultColorScheme.light.accent;
        this.$vuetify.theme.themes.dark.warning = this.defaultColorScheme.dark.warning;
        this.$vuetify.theme.themes.light.warning = this.defaultColorScheme.light.warning;
        this.$vuetify.theme.themes.dark.success = this.defaultColorScheme.dark.success;
        this.$vuetify.theme.themes.light.success = this.defaultColorScheme.light.success;
        this.$vuetify.theme.themes.dark.info = this.defaultColorScheme.dark.primary;
        this.$vuetify.theme.themes.light.info = this.defaultColorScheme.light.primary;
      }
      if (e == "orange") {
        this.$vuetify.theme.themes.dark.primary = this.defaultColorScheme.dark.orange;
        this.$vuetify.theme.themes.light.primary = this.defaultColorScheme.light.orange;
        this.$vuetify.theme.themes.dark.accent = this.defaultColorScheme.dark.accent;
        this.$vuetify.theme.themes.light.accent = this.defaultColorScheme.light.accent;
        this.$vuetify.theme.themes.dark.warning = this.defaultColorScheme.dark.primary;
        this.$vuetify.theme.themes.light.warning = this.defaultColorScheme.light.primary;
        this.$vuetify.theme.themes.dark.success = this.defaultColorScheme.dark.success;
        this.$vuetify.theme.themes.light.success = this.defaultColorScheme.light.success;
        this.$vuetify.theme.themes.dark.info = this.defaultColorScheme.dark.info;
        this.$vuetify.theme.themes.light.info = this.defaultColorScheme.light.info;
      }
      if (e == "red") {
        this.$vuetify.theme.themes.dark.primary = this.defaultColorScheme.dark.red;
        this.$vuetify.theme.themes.light.primary = this.defaultColorScheme.light.red;
        this.$vuetify.theme.themes.dark.accent = this.defaultColorScheme.dark.accent;
        this.$vuetify.theme.themes.light.accent = this.defaultColorScheme.light.accent;
        this.$vuetify.theme.themes.dark.warning = this.defaultColorScheme.dark.warning;
        this.$vuetify.theme.themes.light.warning = this.defaultColorScheme.light.warning;
        this.$vuetify.theme.themes.dark.success = this.defaultColorScheme.dark.success;
        this.$vuetify.theme.themes.light.success = this.defaultColorScheme.light.success;
        this.$vuetify.theme.themes.dark.info = this.defaultColorScheme.dark.info;
        this.$vuetify.theme.themes.light.info = this.defaultColorScheme.light.info;
      }
    }
  },
  computed: {
    ...mapGetters(["musicPlayer"])
  },
  mounted() {
    if (this.$vuetify.breakpoint.mdAndUp) {
      setTimeout(() => {
        this.primaryDrawer.model = true;
      }, 2000);
    }

    setTimeout(() => {
      this.toggleMusicPlayer(true);
    }, 1000);
  }
};
</script>

<style>
.morph {
  box-shadow: var(--neomorph-light) !important;
}

.morph[disabled] {
  box-shadow: none !important;
}

.morph-card {
  transition: all 0.3s;
  box-shadow: var(--neomorph-light) !important;
}

.glass-card {
  transition: all 0.3s;
  border-top: var(--glass-border-light);
  border-left: var(--glass-border-light);
  backdrop-filter: var(--glass-blur-normal);
  /* border-radius: 15px; */
  box-shadow: var(--glass-shadow-normal);
  background: var(--glass-light) !important;
}

.glass-card[disabled] {
  box-shadow: none;
  border: none;
}

.glass-panel {
  transition: all 0.3s;
  border-top: var(--glass-border-light);
  border-left: var(--glass-border-light);
  backdrop-filter: var(--glass-blur-normal);
  /* border-radius: 15px; */
  box-shadow: var(--glass-shadow-depressed);
  background: var(--glass-light) !important;
}

.glass-card:hover {
  box-shadow: var(--glass-shadow-elevated);
  backdrop-filter: var(--glass-blur-elevated);
}

.glass-card-dark:hover {
  box-shadow: var(--glass-shadow-elevated);
  backdrop-filter: var(--glass-blur-elevated);
}

.glass-card-dark {
  transition: all 0.3s;
  border-top: var(--glass-border-dark);
  border-left: var(--glass-border-dark);
  backdrop-filter: var(--glass-blur-normal);
  /* border-radius: 15px; */
  box-shadow: var(--glass-shadow-normal);
  background: var(--glass-dark) !important;
}

.primary-glass-card {
  transition: all 0.3s;
  border-top: var(--glass-border-light);
  border-left: var(--glass-border-light);
  backdrop-filter: var(--glass-blur-normal);
  /* border-radius: 15px; */
  box-shadow: var(--glass-shadow-normal);
  background: var(--primary-glass) !important;
}

.primary-glass-card:hover {
  box-shadow: var(--glass-shadow-elevated);
  backdrop-filter: var(--glass-blur-elevated);
}

.primary-glass-card:hover {
  box-shadow: var(--glass-shadow-elevated);
  backdrop-filter: var(--glass-blur-elevated);
}

.info-glass-card {
  transition: all 0.3s;
  border-top: var(--info-glass-border);
  border-left: var(--info-glass-border);
  backdrop-filter: var(--glass-blur-normal);
  /* border-radius: 15px; */
  box-shadow: var(--glass-shadow-normal);
  background: var(--info-glass) !important;
}

.info-glass-card:hover {
  box-shadow: var(--glass-shadow-elevated);
  backdrop-filter: var(--glass-blur-elevated);
}

.error-glass-card {
  transition: all 0.3s;
  border-top: var(--error-glass-border);
  border-left: var(--error-glass-border);
  backdrop-filter: var(--glass-blur-normal);
  /* border-radius: 15px; */
  box-shadow: var(--glass-shadow-normal);
  background: var(--error-glass) !important;
}

.error-glass-card:hover {
  box-shadow: var(--glass-shadow-elevated);
  backdrop-filter: var(--glass-blur-elevated);
}

.success-glass-card {
  transition: all 0.3s;
  border-top: var(--success-glass-border);
  border-left: var(--success-glass-border);
  backdrop-filter: var(--glass-blur-normal);
  /* border-radius: 15px; */
  box-shadow: var(--glass-shadow-normal);
  background: var(--success-glass) !important;
}

.success-glass-card:hover {
  box-shadow: var(--glass-shadow-elevated);
  backdrop-filter: var(--glass-blur-elevated);
}

.warning-glass-card {
  transition: all 0.3s;
  border-top: var(--warning-glass-border);
  border-left: var(--warning-glass-border);
  backdrop-filter: var(--glass-blur-normal);
  /* border-radius: 15px; */
  box-shadow: var(--glass-shadow-normal);
  background: var(--warning-glass) !important;
}

.warning-glass-card:hover {
  box-shadow: var(--glass-shadow-elevated);
  backdrop-filter: var(--glass-blur-elevated);
}

.accent-glass-card {
  transition: all 0.3s;
  border-top: var(--accent-glass-border);
  border-left: var(--accent-glass-border);
  backdrop-filter: var(--glass-blur-normal);
  /* border-radius: 15px; */
  box-shadow: var(--glass-shadow-normal);
  background: var(--accent-glass) !important;
}

.accent-glass-card:hover {
  box-shadow: var(--glass-shadow-elevated);
  backdrop-filter: var(--glass-blur-elevated);
}

.morph-card:hover {
  box-shadow: var(--neomorph-light-raised) !important;
}
.morph:hover {
  box-shadow: var(--neomorph-light-reverse) !important;
}
.morph-dark {
  box-shadow: var(--neomorph-dark) !important;
}

.morph-card-dark {
  transition: all 0.3s;
  box-shadow: var(--neomorph-dark) !important;
}

.morph-card-dark:hover {
  box-shadow: var(--neomorph-dark-raised) !important;
}

.morph-dark:hover {
  box-shadow: var(--neomorph-dark-reverse) !important;
}

.primary-morph:hover {
  box-shadow: var(--primary-neomorph-reverse) !important;
}

.secondary-morph:hover {
  box-shadow: var(--secondary-neomorph-reverse) !important;
}

.accent-morph:hover {
  box-shadow: var(--accent-neomorph-reverse) !important;
}

.warning-morph:hover {
  box-shadow: var(--warning-neomorph-reverse) !important;
}

.info-morph:hover {
  box-shadow: var(--info-neomorph-reverse) !important;
}

.success-morph:hover {
  box-shadow: var(--success-neomorph-reverse) !important;
}

.error-morph:hover {
  box-shadow: var(--error-neomorph-reverse) !important;
}
.rainbow {
  background-image: linear-gradient(
    to right,
    #101010 0%,
    #101010 14.2857%,
    #ff0000 1%,
    #ff0000 28.5714%,
    #ffb300 2%,
    #ffb300 42.8571%,
    #4caf50 3%,
    #4caf50 57.1429%,
    #2196f3 4%,
    #2196f3 71.4286%,
    #e91e63 5%,
    #e91e63 85.7143%,
    #9c27b0 6%,
    #9c27b0 100%
  );
}

.rainbow-dark {
  background-image: linear-gradient(
    to right,
    #efefef 0%,
    #efefef 14.2857%,
    #ff0000 1%,
    #ff0000 28.5714%,
    #ffb300 2%,
    #ffb300 42.8571%,
    #4caf50 3%,
    #4caf50 57.1429%,
    #2196f3 4%,
    #2196f3 71.4286%,
    #e91e63 5%,
    #e91e63 85.7143%,
    #9c27b0 6%,
    #9c27b0 100%
  );
}
</style>
