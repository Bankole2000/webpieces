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
          <v-list-item-avatar>
            <img
              :src="
                $vuetify.theme.dark
                  ? require('@/assets/images/nightprofile.jpg.webp')
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
                {{ $vuetify.theme.dark ? "@CodingInNeon" : "Bankole Esan" }}
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
              >Logout</v-btn
            >
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
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
        class="ml-4"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        >Banky.<span class="font-weight-black primary--text"
          >Studio</span
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <!-- <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          class="mr-2 primary primary-morph"
          :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
          outlined
          tile
          >primary</v-btn
        >
        <v-btn
          class="mr-2 secondary secondary-morph"
          :class="$vuetify.theme.dark ? 'morph-dark primary--text' : 'morph white--text'"
          tile
          to="/about"
          >secondary</v-btn
        >
        <v-btn
          to="/"
          tile
          class="mr-3 accent accent-morph"
          :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
          >accent</v-btn
        >
        <v-btn
          to="/test"
          tile
          class="mr-3 error error-morph"
          :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
          >error</v-btn
        >
        <v-btn tile class="mr-3 info info-morph" :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
          >info</v-btn
        >
        <v-btn tile class="mr-3 success success-morph" :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
          >success</v-btn
        >
        <v-btn tile class="mr-3 warning warning-morph" :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
          >warning</v-btn
        >
        <v-btn
          tile
          class="mr-3"
          @click="displayToast($event)"
          :loading="loadingTestButton"
          :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'"
          :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
          >test</v-btn
        >
      </div> -->

      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          v-for="(link, index) in socialLinks"
          :key="index"
          icon
          :color="link.color"
          class="mx-2"
          :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
          ><v-icon size="32">{{ link.icon }}</v-icon></v-btn
        >
        <TwitchModal />
        <DiscordModal />
        <YoutubeModal />
      </div>
      <v-switch
        style="margin-top: 22px;"
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
      </v-switch>
    </v-app-bar>
    <v-footer
      :inset="true"
      :style="{ backgroundColor: $vuetify.theme.dark ? '#12121260' : '#FFF' }"
      absolute
      app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <Snackbar />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Snackbar from "./Snackbar.vue";
import YoutubeModal from "../blocks/YoutubeModal.vue";
import TwitchModal from "../blocks/TwitchModal.vue";
import DiscordModal from "../blocks/DiscordModal";

export default {
  components: {
    Snackbar,
    YoutubeModal,
    TwitchModal,
    DiscordModal
  },
  data() {
    return {
      loadingTestButton: false,
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
      items: [
        { title: "Studio", icon: "mdi-web", link: "/" },
        { title: "Projects", icon: "mdi-quadcopter", link: "/projects" },
        { title: "Web Pieces", icon: "mdi-puzzle", link: "/webpieces" },
        { title: "About Me", icon: "mdi-account", link: "/about" }
      ],
      socialLinks: [
        { name: "", link: "", color: "info", icon: "mdi-twitter" },
        { name: "", link: "", color: "info darken-2", icon: "mdi-facebook" },
        { name: "", link: "", color: "success", icon: "mdi-whatsapp" },
        // { name: '', link: '', color: 'error', icon: 'mdi-youtube' },
        // { name: '', link: '', color: 'primary', icon: 'mdi-twitch' },
        { name: "", link: "", color: "secondary", icon: "mdi-github" }
        // { name: '', link: '', color: 'accent', icon: 'mdi-discord' },
      ]
    };
  },
  methods: {
    ...mapActions(["showToast"]),
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
    }
  },
  mounted() {
    if (this.$vuetify.breakpoint.mdAndUp) {
      setTimeout(() => {
        this.primaryDrawer.model = true;
      }, 2000);
    }
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
</style>
