<template>
  <div class="test">
    <v-card tile flat :color="$vuetify.theme.dark ? '#121212' : '#FFFFFF'">
      <!-- :height="$vuetify.breakpoint.smAndUp ? $vuetify.breakpoint.height - 72 : 'full'" -->
      <v-img
        dark
        :src="
          $vuetify.theme.dark
            ? require('@/assets/images/neoncity.gif')
            : require('@/assets/images/neoncityday.gif')
        "
        class="d-flex align-start"
        :height="$vuetify.breakpoint.height - 78"
        :gradient="`to top, ${
          $vuetify.theme.dark ? '#121212' : '#FFFFFF'
        }FF -2%, ${$vuetify.theme.themes.light.secondary}00`"
      >
        <!-- gradient="to top right, rgba(100,115,201,.5), rgba(25,32,72,.5)" -->
        <div
          style="width: 100%; padding: 0; display: flex; align-items: center"
          :style="{ height: `${$vuetify.breakpoint.height - 108}px` }"
        >
          <v-row>
            <v-col class="text-center" cols="12">
              <div
                ref="linksMorphCard"
                :class="$vuetify.breakpoint.smAndUp ? 'mx-auto' : 'mx-4'"
                class="glass-card rounded-xl"
                style="max-width: 500px"
              >
                <!-- <v-card-title> </v-card-title> -->
                <div
                  class="d-flex align-start"
                  :style="{
                    minHeight: $vuetify.breakpoint.mdAndUp ? '200px' : '180px',
                  }"
                >
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        href="https://github.com/Bankole2000"
                        target="_blank"
                        x-large
                        text
                        v-bind="attrs"
                        v-on="on"
                        icon
                        class="ma-4"
                        ><v-icon color="secondary">mdi-github</v-icon></v-btn
                      >
                    </template>
                    <span>Github</span></v-tooltip
                  >
                  <v-menu>
                    <template v-slot:activator="{ on: menu, attrs }">
                      <v-tooltip top>
                        <template v-slot:activator="{ on: tooltip }">
                          <v-btn
                            dark
                            v-bind="attrs"
                            x-large
                            text
                            icon
                            class="mt-4 ml-n4"
                            v-on="{ ...tooltip, ...menu }"
                            ><v-icon color="secondary"
                              >mdi-linkedin</v-icon
                            ></v-btn
                          >
                        </template>
                        <span>Linked In</span>
                      </v-tooltip>
                    </template>
                    <v-card max-width="330" class="rounded-lg">
                      <v-card-title style="background-color: #38434f">
                        <svg
                          style="width: 85px"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 84 21"
                          preserveAspectRatio="xMinYMin meet"
                          version="1.1"
                          focusable="false"
                        >
                          <g
                            class="inbug"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <path
                              d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0"
                              class="bug-text-color"
                              transform="translate(63.000000, 0.000000)"
                            ></path>
                            <path
                              d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z"
                              class="background"
                              fill="currentColor"
                            ></path>
                          </g>
                          <g class="linkedin-text">
                            <path
                              d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z"
                              fill="currentColor"
                            ></path>
                            <polygon
                              fill="currentColor"
                              points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"
                            ></polygon>
                            <path
                              d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z"
                              fill="currentColor"
                            ></path>
                            <polygon
                              fill="currentColor"
                              points="3 3 0 3 0 18 9 18 9 15 3 15"
                            ></polygon>
                          </g>
                        </svg>
                      </v-card-title>
                      <v-card-text class="black white--text pa-4">
                        <v-avatar class="mb-4">
                          <v-img
                            src="https://media-exp1.licdn.com/dms/image/C4E03AQHfHnEHokv7Zg/profile-displayphoto-shrink_200_200/0/1620959899633?e=1647475200&v=beta&t=6FI1g3H9pdgmJOItWAvUf7cfwSTep4FYCEb8Lv92H14"
                          ></v-img>
                        </v-avatar>
                        <p class="mb-2 title">Bankole Esan</p>
                        <p class="font-weight-light mb-2">
                          Full Stack Web Developer. Working with Vue JS, React,
                          Angular, NodeJS, and Apollo GraphQL. Senior Software
                          Engineer in training @TalentQL
                        </p>
                        <p class="caption mb-2">University of Benin</p>
                        <v-btn
                          to="/linkedin"
                          target="_blank"
                          rounded
                          outlined
                          class="text-capitalize"
                          >View Profile</v-btn
                        >
                      </v-card-text>
                    </v-card>
                  </v-menu>

                  <v-spacer></v-spacer>
                  <!-- <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        href="https://profile.codersrank.io/user/bankole2000"
                        target="_blank"
                        v-bind="attrs"
                        v-on="on"
                        x-large
                        text
                        icon
                        class="ma-4 mr-0"
                        ><v-icon color="secondary">mdi-code-tags</v-icon></v-btn
                      ></template
                    ><span>Coders Rank</span></v-tooltip
                  > -->

                  <v-menu
                    v-model="aboutMeMenu"
                    :close-on-click="false"
                    :close-on-content-click="false"
                    class="rounded-xl"
                    :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
                    transition="slide-x-transition"
                    bottom
                    left
                  >
                    <template v-slot:activator="{ on: menu, attrs }">
                      <v-tooltip top>
                        <template v-slot:activator="{ on: tooltip }">
                          <v-btn
                            v-bind="attrs"
                            v-on="{ ...tooltip, ...menu }"
                            x-large
                            text
                            icon
                            class="ma-4 ml-0"
                            ><v-icon
                              :color="
                                $vuetify.theme.dark ? 'primary' : 'accent'
                              "
                              >mdi-information-outline</v-icon
                            ></v-btn
                          ></template
                        ><span>Menu</span></v-tooltip
                      >
                    </template>
                    <v-card class="rounded-xl" width="300">
                      <v-card-title
                        class="d-flex align-center headline primary--text"
                      >
                        About me <v-spacer></v-spacer>
                        <v-btn
                          icon
                          @click="aboutMeMenu = false"
                          :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
                          ><v-icon>mdi-close</v-icon></v-btn
                        >
                      </v-card-title>
                      <div
                        :class="
                          $vuetify.theme.dark ? 'rainbow-dark' : 'rainbow'
                        "
                        style="width: 100%; height: 2px"
                      ></div>

                      <v-list>
                        <v-list-item>
                          <Certs />
                        </v-list-item>
                        <v-list-item>
                          <Skills />
                        </v-list-item>
                        <v-list-item>
                          <Experience />
                        </v-list-item>
                        <v-list-item>
                          <Shenanigans />
                        </v-list-item>
                        <v-list-item
                          v-for="(item, index) in navItems"
                          :key="index"
                        >
                          <!-- <v-list-item-action>
                            <v-icon>{{ navLink.icon }}</v-icon>
                          </v-list-item-action>
                          <v-list-item-subtitle>{{ navLink.title }}</v-list-item-subtitle> -->
                          <v-btn
                            block
                            class="ma-2 rounded-lg"
                            text
                            :to="item.link"
                            :target="
                              ['/resume', '/codersrank', '/sourcerer'].includes(
                                item.link
                              )
                                ? '_blank'
                                : ''
                            "
                            color="secondary"
                            exact
                            :class="
                              $vuetify.theme.dark ? 'glass-card' : 'morph'
                            "
                            ><v-icon left>{{ item.icon }}</v-icon>
                            {{ item.title }}
                            <v-icon right>mdi-open-in-new</v-icon></v-btn
                          >
                          <!-- :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'" -->
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-menu>
                </div>
                <!-- <v-divider></v-divider> -->
                <div
                  style="
                    background-image: var(--rainbow);
                    height: 3px;
                    width: 100%;
                  "
                ></div>
                <v-card-text
                  class="rounded-b-xl pb-8"
                  :style="{
                    backgroundColor: $vuetify.theme.dark
                      ? '#121212AA'
                      : '#FFFFFFAA',
                  }"
                >
                  <v-avatar
                    size="150"
                    class="primary"
                    style="border: 3px solid var(--primary); margin-top: -95px"
                  >
                    <img
                      width="200"
                      :src="
                        $vuetify.theme.dark
                          ? require('@/assets/blackneon.jpg')
                          : require('@/assets/images/dayprofile.jpg.webp')
                      "
                      alt=""
                    />
                  </v-avatar>
                  <p
                    class="display-1 mt-4 mb-0 font-weight-light"
                    :class="
                      $vuetify.theme.dark ? 'primary--text' : 'secondary--text'
                    "
                  >
                    {{ $vuetify.theme.dark ? "@CodingInNeon" : "Bankole Esan" }}
                  </p>
                  <!-- <p
                    class="text-h6 font-weight-light"
                    :class="$vuetify.theme.dark ? 'grey--text' : 'grey--text text--darken-2'"
                  >
                    <v-icon color="grey" size="24">mdi-map-marker</v-icon> Abuja, Africa
                  </p> -->
                  <p
                    :class="$vuetify.breakpoint.mdAndUp ? 'mx-16' : 'mx-auto'"
                    class="text-h6 secondary--text font-weight-light"
                  >
                    Fullstack Developer
                    <!-- <a
                      href="https://primalaero.com"
                      class="text-decoration-none"
                      target="_blank"
                      >@PrimalAero</a
                    > -->
                    <!-- <v-icon>mdi-language-typescript</v-icon> -->
                  </p>
                  <div :class="$vuetify.breakpoint.mdAndUp ? 'mx-12' : 'mx-2'">
                    <v-tooltip top v-for="(tech, i) in skills" :key="i">
                      <template v-slot:activator="{ on, attrs }">
                        <v-chip
                          :color="$vuetify.theme.dark ? '#1e1e1e' : 'white'"
                          v-on="on"
                          v-bind="attrs"
                          class="px-1 ma-1"
                          :text-color="
                            colors[tech.split('-')[tech.split('-').length - 1]]
                          "
                        >
                          <v-icon>{{ tech }}</v-icon>
                        </v-chip>
                        <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on">Top</v-btn> -->
                      </template>
                      <span class="text-capitalize">{{
                        techname(tech.split("-")[tech.split("-").length - 1])
                      }}</span>
                    </v-tooltip>
                  </div>
                </v-card-text>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-img>
    </v-card>
  </div>
</template>

<script>
import Certs from "@/components/modals/Certs";
import Skills from "@/components/modals/Skills";
import Experience from "@/components/modals/Experience";
import Shenanigans from "@/components/modals/Shenanigans";
// import Laptop from '@/components/animated/Laptop1.vue';
// import Phone from '@/components/animated/Phone1';
// import Factory from '@/components/animated/Factory.vue';
// import Phone2 from '@/components/animated/Phone2.vue';
export default {
  components: {
    Certs,
    Skills,
    Experience,
    Shenanigans,
    // Laptop,

    // Phone,
    // Factory,
    // Phone2,
  },
  data() {
    return {
      aboutMeMenu: false,
      navItems: [
        // { title: "Studio", icon: "mdi-web", link: "/" },

        { title: "Resume", icon: "mdi-download", link: "/resume" },
        { title: "Coders Rank", icon: "mdi-code-tags", link: "/codersrank" },
        {
          title: "Sourcerer",
          icon: "mdi-code-not-equal-variant",
          link: "/sourcerer",
        },
        // {
        //   title: "Projects",
        //   icon: "mdi-package-variant-closed",
        //   link: "/projects"
        // }

        // { title: "Web Pieces", icon: "mdi-puzzle", link: "/webpieces" }
        // { title: "About Me", icon: "mdi-account", link: "/about" }
      ],
      colors: {
        firebase: "#FFCA28",
        html5: "#F16529",
        css3: "#2965f1",
        javascript: "#F0DB4F",
        // typescript: "#61DBFB",
        vuejs: "#41B883",
        bootstrap: "#602C50",
        python: "#FFD43B",
        sass: "#cc6699",
        wordpress: "#00749C",
        database: "#00758F",
        php: "#474A8A",
        react: "#61DBFB",
        nodejs: "#3C873A",
        vuetify: "#1775d0",
        angular: "#B52E31",
        typescript: "#007acc",
        docker: "#0db7ed",
        bash: "#540D6E",
        ui: "#3d80f7",
        graphql: "#da0093",
      },
      skills: [
        "mdi-language-html5",
        "mdi-language-css3",
        // 'mdi-sass',
        // 'mdi-bootstrap',
        "mdi-language-javascript",
        "mdi-language-typescript",
        "mdi-language-php",
        "mdi-database",
        "mdi-language-python",
        "mdi-vuejs",
        "mdi-vuetify",
        "mdi-react",
        "mdi-angular",
        "mdi-graphql",
        "mdi-nodejs",
        "mdi-docker",
        "mdi-firebase",
        "mdi-wordpress",
        // 'mdi-bash',
        // 'mdi-material-ui',
      ],
    };
  },
  methods: {
    animateStuff() {
      this.gsap.set(this.$refs.linksMorphCard, { duration: 0, opacity: 0 });
      this.gsap.set(this.$refs.titleGlassCard, { duration: 0, opacity: 0 });
      // setTimeout(() => {
      this.gsap.to(this.$refs.linksMorphCard, { duration: 2, opacity: 1 });
      this.gsap.to(this.$refs.titleGlassCard, { duration: 2, opacity: 1 });
      // }, 200);
    },
    techname(tech) {
      if (tech == "database") {
        return "SQL Databases";
      }
      if (tech == "ui") {
        return "Material Design";
      }

      return tech;
    },
  },
  computed: {},
  mounted() {
    // let tlgears = this.gsap.timeline({
    //   repeat: -1,
    //   yoyo: true,
    //   defaults: { duration: 1 },
    // });
    // this.gsap.set(this.$refs.titleGlassCard, { opacity: 0, scale: 1.2 });

    this.gsap.set(this.$refs.linksMorphCard, { opacity: 0, scale: 1.2 });
    // setTimeout(() => {
    // this.gsap.to(this.$refs.titleGlassCard, { duration: 1, opacity: 1, scale: 1 }, '-=1');

    this.gsap.to(this.$refs.linksMorphCard, {
      duration: 1,
      opacity: 1,
      scale: 1,
    });
    // }, 1500);
  },
};
</script>

<style scoped>
/* "technologies": [
      "mdi-firebase",
      "mdi-language-html5",
      "mdi-language-css3",
      "mdi-language-javascript",
      "mdi-vuejs",
      "mdi-vuetify",
      "mdi-bootstrap",
      "mdi-language-python",
      "mdi-sass",
      "mdi-wordpress",
      "mdi-language-php",
      "mdi-react",
      "mdi-nodejs",
      "mdi-microsoft-windows",
      "mdi-ubuntu",
      "mdi-apple"
    ], */
.morph {
  box-shadow: 5px 5px 5px #dadada, -5px -5px 5px #ffffff !important;
}

.glass-card {
  transition: all 0.3s;
  border-top: 1px solid #ffffff88;
  border-left: 1px solid #ffffff88;
  backdrop-filter: blur(3px);
  /* border-radius: 15px; */
  box-shadow: 3px 3px 4.5px rgba(0, 0, 0, 0.5);
  background: #25252510 !important;
}

.glass-card[disabled] {
  box-shadow: none;
  border: none;
}

.glass-panel {
  transition: all 0.3s;
  border-top: 1px solid #ffffff88;
  border-left: 1px solid #ffffff88;
  backdrop-filter: blur(3px);
  /* border-radius: 15px; */
  box-shadow: 3px 3px 4.5px rgba(0, 0, 0, 0.5);
  background: #25252510 !important;
}

.morph:hover {
  box-shadow: inset 5px 5px 5px #dadada, inset -5px -5px 5px #ffffff !important;
}

.morph-dark {
  box-shadow: 3px 3px 3px #000000, -3px -3px 3px #252525 !important;
}

.morph-dark:hover {
  box-shadow: inset 3px 5px 5px #000000, inset -3px -5px 5px #252525 !important;
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
