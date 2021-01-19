<template>
  <div class="test">
    <v-card tile :color="$vuetify.theme.dark ? '#121212' : '#FFFFFF'">
      <v-img
        dark
        :src="
          $vuetify.theme.dark
            ? require('@/assets/images/neoncity.gif')
            : require('@/assets/images/neoncityday.gif')
        "
        class="d-flex align-start pt-16"
        :height="$vuetify.breakpoint.height - 72"
        :gradient="
          `to top, ${$vuetify.theme.dark ? '#121212' : '#FFFFFF'}FF -2%, ${
            $vuetify.theme.themes.light.secondary
          }00`
        "
      >
        <!-- gradient="to top right, rgba(100,115,201,.5), rgba(25,32,72,.5)" -->
        <div style="width: 100%; padding: 0;" class="d-flex mt-16">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <div
                ref="titleGlassCard"
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
                  {{ $vuetify.theme.dark ? "The Neon Coder" : "Esan Bankole" }}
                </p>
                <div
                  style="width: 90%; height: 8px; background-image: var(--rainbow); box-shadow: var(--glass-shadow-normal)"
                  class="mx-auto"
                ></div>
              </div>
              <!-- <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
              <h4 class="subheading">Build your application today!</h4> -->
            </v-col>
            <v-col class="text-center" ref="linksMorphCard" cols="12" md="6">
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
          </v-row>
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
  methods: {
    animateStuff() {
      this.gsap.set(this.$refs.linksMorphCard, { duration: 0, opacity: 0 });
      this.gsap.set(this.$refs.titleGlassCard, { duration: 0, opacity: 0 });
      // setTimeout(() => {
      this.gsap.to(this.$refs.linksMorphCard, { duration: 2, opacity: 1 });
      this.gsap.to(this.$refs.titleGlassCard, { duration: 2, opacity: 1 });
      // }, 200);
    }
  },
  mounted() {
    // let tlgears = this.gsap.timeline({
    //   repeat: -1,
    //   yoyo: true,
    //   defaults: { duration: 1 },
    // });
    this.gsap.set(this.$refs.titleGlassCard, { opacity: 0, scale: 1.2 });

    this.gsap.set(this.$refs.linksMorphCard, { opacity: 0, scale: 1.2 });
    // setTimeout(() => {
    this.gsap.to(
      this.$refs.titleGlassCard,
      { duration: 1, opacity: 1, scale: 1 },
      "-=1"
    );

    this.gsap.to(this.$refs.linksMorphCard, {
      duration: 1,
      opacity: 1,
      scale: 1
    });
    // }, 1500);
  }
};
</script>

<style></style>
