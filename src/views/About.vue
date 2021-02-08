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
        class="d-flex align-start "
        :height="$vuetify.breakpoint.height - 78"
        :gradient="
          `to top, ${$vuetify.theme.dark ? '#121212' : '#FFFFFF'}FF -2%, ${
            $vuetify.theme.themes.light.secondary
          }00`
        "
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
                style="max-width: 500px;"
              >
                <!-- <v-card-title> </v-card-title> -->
                <div
                  class="d-flex align-start"
                  :style="{
                    minHeight: $vuetify.breakpoint.mdAndUp ? '200px' : '180px'
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
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        to="/linkedin"
                        target="_blank"
                        v-bind="attrs"
                        v-on="on"
                        x-large
                        text
                        icon
                        class="mt-4 ml-n4"
                        ><v-icon color="secondary">mdi-linkedin</v-icon></v-btn
                      ></template
                    ><span>LinkedIn</span></v-tooltip
                  >
                  <v-spacer></v-spacer>
                  <v-tooltip top>
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
                  >

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
                            ><v-icon color="secondary"
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
                        style="width: 100%; height: 2px;"
                      ></div>

                      <v-list>
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
                              ['/resume'].includes(item.link) ? '_blank' : ''
                            "
                            color="secondary"
                            exact
                            :class="
                              $vuetify.theme.dark ? 'glass-card' : 'morph'
                            "
                            ><v-icon left>{{ item.icon }}</v-icon>
                            {{ item.title }}</v-btn
                          >
                          <!-- :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'" -->
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-menu>
                </div>
                <!-- <v-divider></v-divider> -->
                <div
                  style="background-image: var(--rainbow); height: 3px; width: 100%;"
                ></div>
                <v-card-text
                  class="rounded-b-xl pb-8"
                  :style="{
                    backgroundColor: $vuetify.theme.dark
                      ? '#121212AA'
                      : '#FFFFFFAA'
                  }"
                >
                  <v-avatar
                    size="150"
                    class="primary"
                    style="border: 3px solid var(--primary); margin-top: -95px;"
                  >
                    <img
                      width="200"
                      :src="
                        $vuetify.theme.dark
                          ? require('@/assets/images/nightprofile.jpg.webp')
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
                    <a
                      href="https://primalaero.com"
                      class="text-decoration-none"
                      target="_blank"
                      >@PrimalAero</a
                    >
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
// import Laptop from '@/components/animated/Laptop1.vue';
// import Phone from '@/components/animated/Phone1';
// import Factory from '@/components/animated/Factory.vue';
// import Phone2 from '@/components/animated/Phone2.vue';
export default {
  components: {
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
        { title: "Skills", icon: "mdi-account-hard-hat", link: "/" },
        { title: "Experience", icon: "mdi-briefcase", link: "/" },
        { title: "Certs", icon: "mdi-seal", link: "/" },
        { title: "Resume", icon: "mdi-download", link: "/resume" },
        { title: "Coders Rank", icon: "mdi-code-tags", link: "/coderank" },
        {
          title: "Sourcerer",
          icon: "mdi-code-not-equal-variant",
          link: "/sourcerer"
        },
        {
          title: "Projects",
          icon: "mdi-package-variant-closed",
          link: "/projects"
        },
        {
          title: "Shenanigans",
          icon: "mdi-party-popper",
          link: "/shenanigans"
        }
        // { title: "Web Pieces", icon: "mdi-puzzle", link: "/webpieces" }
        // { title: "About Me", icon: "mdi-account", link: "/about" }
      ],
      colors: {
        firebase: "#FFCA28",
        html5: "#F16529",
        css3: "#2965f1",
        javascript: "#F0DB4F",
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
        ui: "#3d80f7"
      },
      skills: [
        "mdi-language-html5",
        "mdi-language-css3",
        // 'mdi-sass',
        // 'mdi-bootstrap',
        "mdi-language-javascript",
        // 'mdi-language-typescript',
        "mdi-language-php",
        "mdi-database",
        "mdi-language-python",
        "mdi-vuejs",
        "mdi-vuetify",
        "mdi-react",
        "mdi-angular",

        "mdi-nodejs",
        "mdi-firebase",
        "mdi-wordpress"
        // 'mdi-docker',
        // 'mdi-bash',
        // 'mdi-material-ui',
      ]
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
    }
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
      scale: 1
    });
    // }, 1500);
  }
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
