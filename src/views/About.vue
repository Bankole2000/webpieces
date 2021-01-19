<template>
  <div class="test">
    <v-card tile :color="$vuetify.theme.dark ? '#121212' : '#FFFFFF'">
      <!-- :height="$vuetify.breakpoint.smAndUp ? $vuetify.breakpoint.height - 72 : 'full'" -->
      <v-img
        dark
        :src="
          $vuetify.theme.dark
            ? require('@/assets/images/neoncity.gif')
            : require('@/assets/images/neoncityday.gif')
        "
        class="d-flex align-start "
        :height="$vuetify.breakpoint.height - 108"
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
                :class="$vuetify.breakpoint.smAndUp ? 'mx-auto' : 'mx-2'"
                class="glass-card rounded-xl"
                style="max-width: 500px;"
              >
                <!-- <v-card-title> </v-card-title> -->
                <div
                  class="d-flex align-start"
                  :style="{ minHeight: $vuetify.breakpoint.mdAndUp ? '200px' : '180px' }"
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
                  <v-menu class="rounded-xl" transition="slide-x-transition" bottom left>
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
                            ><v-icon color="secondary">mdi-dots-vertical</v-icon></v-btn
                          ></template
                        ><span>Menu</span></v-tooltip
                      >
                    </template>
                    <v-card class="rounded-xl" width="300">
                      <v-card-title class="d-flex align-center headline primary--text">
                        About me <v-spacer></v-spacer>
                        <v-btn icon :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
                          ><v-icon>mdi-close</v-icon></v-btn
                        >
                      </v-card-title>
                      <div
                        :class="$vuetify.theme.dark ? 'rainbow-dark' : 'rainbow'"
                        style="width: 100%; height: 2px;"
                      ></div>

                      <v-list>
                        <v-list-item v-for="(item, index) in navItems" :key="index">
                          <!-- <v-list-item-action>
                            <v-icon>{{ navLink.icon }}</v-icon>
                          </v-list-item-action>
                          <v-list-item-subtitle>{{ navLink.title }}</v-list-item-subtitle> -->
                          <v-btn
                            class="ma-2 rounded-lg"
                            text
                            :to="item.link"
                            color="secondary"
                            exact
                            :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
                            ><v-icon left>{{ item.icon }}</v-icon> {{ item.title }}</v-btn
                          >
                          <!-- :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'" -->
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-menu>
                </div>
                <!-- <v-divider></v-divider> -->
                <div style="background-image: var(--rainbow); height: 3px; width: 100%;"></div>
                <v-card-text
                  class="rounded-b-xl pb-8"
                  :style="{ backgroundColor: $vuetify.theme.dark ? '#121212AA' : '#FFFFFFAA' }"
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
                    :class="$vuetify.theme.dark ? 'primary--text' : 'secondary--text'"
                  >
                    {{ $vuetify.theme.dark ? '@CodingInNeon' : 'Bankole Esan' }}
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
                    <a href="https://primalaero.com" class="text-decoration-none" target="_blank"
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
                          :text-color="colors[tech.split('-')[tech.split('-').length - 1]]"
                        >
                          <v-icon>{{ tech }}</v-icon>
                        </v-chip>
                        <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on">Top</v-btn> -->
                      </template>
                      <span class="text-capitalize">{{
                        techname(tech.split('-')[tech.split('-').length - 1])
                      }}</span>
                    </v-tooltip>
                  </div>
                </v-card-text>
                <!-- <v-card-actions
                  class="pa-4 rounded-b-xl"
                  :style="{ backgroundColor: $vuetify.theme.dark ? '#121212aa' : '#efefefaa' }"
                >
                  <v-spacer></v-spacer>
                  <v-btn text :class="$vuetify.theme.dark ? 'glass-card' : 'morph secondary--text'"
                    >Start A Project</v-btn
                  >
                  <v-btn text :class="$vuetify.theme.dark ? 'glass-card' : 'morph secondary--text'"
                    >Hire me</v-btn
                  >
                </v-card-actions> -->
              </div>
            </v-col>
          </v-row>
          <!-- <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <div
                class="mx-auto pa-4"
                :class="$vuetify.theme.dark ? 'glass-card' : 'glass-card'"
                style="width: 70%;"
              >
                <p
                  class="display-2 mb-0"
                  :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                  style="text-shadow: var(--glass-shadow-depressed)"
                >
                  Hi, I'm
                  {{ $vuetify.theme.dark ? 'The Neon Coder' : 'Esan Bankole' }}
                </p>
                <div
                  style="width: 90%; height: 8px; background-image: var(--rainbow); box-shadow: var(--glass-shadow-normal)"
                  class="mx-auto"
                ></div>
              </div>
             
            </v-col>
            <v-col class="text-center" cols="12" md="6">
              <v-card
                elevation="6"
                :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'"
                class="rounded-lg d-flex justify-space-around align-center pa-4 ma-4"
              >
                <v-btn
                  :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'"
                  class="mx-2"
                  fab
                  large
                  :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
                >
                  <v-icon color="error" x-large>mdi-youtube</v-icon>
                </v-btn>
                <v-btn
                  :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'"
                  class="mx-2"
                  fab
                  large
                  :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
                >
                  <v-icon color="info" x-large>mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'"
                  class="mx-2"
                  fab
                  large
                  :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
                >
                  <v-icon color="primary" x-large>mdi-xml</v-icon>
                </v-btn>
                <v-btn
                  @click="animateStuff()"
                  :color="$vuetify.theme.dark ? '#121212' : '#f5f5f5'"
                  class="mx-2"
                  fab
                  large
                  :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
                >
                  <v-icon color="secondary" x-large>mdi-github</v-icon>
                </v-btn>
              </v-card>
            </v-col>
          </v-row> -->
        </div>
      </v-img>
      <!-- <v-row style="max-width: 100vw;" class="mr-0">
        <v-col cols="12" sm="6" class="pr-0 ma-auto">
          <Phone2 />
        </v-col>
        <v-col cols="12" sm="6">
          <Phone />
        </v-col>
        <v-col cols="12" sm="6" class="pr-0 ma-auto">
          <Factory />
        </v-col>
      </v-row> -->
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
      navItems: [
        { title: 'Studio', icon: 'mdi-web', link: '/' },
        { title: 'Projects', icon: 'mdi-quadcopter', link: '/projects' },
        { title: 'Web Pieces', icon: 'mdi-puzzle', link: '/webpieces' },
        { title: 'About Me', icon: 'mdi-account', link: '/about' },
      ],
      colors: {
        firebase: '#FFCA28',
        html5: '#F16529',
        css3: '#2965f1',
        javascript: '#F0DB4F',
        vuejs: '#41B883',
        bootstrap: '#602C50',
        python: '#FFD43B',
        sass: '#cc6699',
        wordpress: '#00749C',
        database: '#00758F',
        php: '#474A8A',
        react: '#61DBFB',
        nodejs: '#3C873A',
        vuetify: '#1775d0',
        angular: '#B52E31',
        typescript: '#007acc',
        docker: '#0db7ed',
        bash: '#540D6E',
        ui: '#3d80f7',
      },
      skills: [
        'mdi-language-html5',
        'mdi-language-css3',
        // 'mdi-sass',
        // 'mdi-bootstrap',
        'mdi-language-javascript',
        // 'mdi-language-typescript',
        'mdi-language-php',
        'mdi-database',
        'mdi-language-python',
        'mdi-vuejs',
        'mdi-vuetify',
        'mdi-react',
        'mdi-angular',

        'mdi-nodejs',
        'mdi-firebase',
        'mdi-wordpress',
        // 'mdi-docker',
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
      if (tech == 'database') {
        return 'SQL Databases';
      }
      if (tech == 'ui') {
        return 'Material Design';
      }

      return tech;
    },
  },
  computed: {},
  mounted() {
    console.log({
      sm: this.$vuetify.breakpoint.smOnly,
      xs: this.$vuetify.breakpoint.xsOnly,
      md: this.$vuetify.breakpoint.mdOnly,
      lg: this.$vuetify.breakpoint.lgOnly,
    });
    // let tlgears = this.gsap.timeline({
    //   repeat: -1,
    //   yoyo: true,
    //   defaults: { duration: 1 },
    // });
    // this.gsap.set(this.$refs.titleGlassCard, { opacity: 0, scale: 1.2 });

    this.gsap.set(this.$refs.linksMorphCard, { opacity: 0, scale: 1.2 });
    // setTimeout(() => {
    // this.gsap.to(this.$refs.titleGlassCard, { duration: 1, opacity: 1, scale: 1 }, '-=1');

    this.gsap.to(this.$refs.linksMorphCard, { duration: 1, opacity: 1, scale: 1 });
    // }, 1500);
  },
};
</script>

<style></style>
