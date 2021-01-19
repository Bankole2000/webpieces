<template>
  <div class="web-pieces">
    <div style="position: relative">
      <v-row :class="$vuetify.breakpoint.mdAndDown ? 'pa-0 ma-0' : ''">
        <v-col
          cols="12"
          :class="$vuetify.breakpoint.mdAndDown ? 'pa-0 ma-0' : ''"
          sm="6"
          :offset="$vuetify.breakpoint.smAndUp ? 6 : 0"
        >
          <Phone1 id="phone" />
        </v-col>
      </v-row>
      <div v-if="$vuetify.breakpoint.smAndUp" style="position: absolute; top: 15%; left: 0; width: 100%;">
        <v-container>
          <v-row>
            <v-col cols="12" sm="7">
              <v-card class="glass-panel px-8 py-6 rounded-xl" id="header">
                <v-card-title>
                  <p class="display-1 font-weight-light">Web Pieces</p>
                </v-card-title>
                <div
                  class="mx-4 mt-n3"
                  style="width: 95%; height: 10px; background-image: var(--rainbow)"
                ></div>
                <v-card-text class="pb-0">
                  <p class="text-h5 font-weight-light" style="line-height: 3rem">
                    Welcome to the lab. Here I collaboratively deconstruct pieces of the web (for
                    science!🕵️‍♂)
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-spacer></v-spacer>
                  <v-btn large class="text-capitalize primary-glass-card rounded-xl"
                    ><v-icon left>mdi-information-outline</v-icon> What do you mean?</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div
      id="headerTrigger"
      v-if="$vuetify.breakpoint.smAndUp"
      class="mt-n15"
      style="height: 10px; width: 100%; background-image: var(--primary-accent-gradient-horizontal); box-shadow: var(--glass-shadow-normal)"
    ></div>
    <v-container class="mt-8">
      <v-tabs
        :grow="$vuetify.breakpoint.mdAndUp"
        class="mb-8"
        :center-active="$vuetify.breakpoint.mdAndUp"
        show-arrows
      >
        <v-tab to="/webpieces" exact>Gallery</v-tab>
        <v-tab to="/webpieces/add">Add A WebPiece</v-tab>
        <v-tab to="/webpieces/queue">Request Queue</v-tab>
      </v-tabs>
      <transition name="router-anim">
        <router-view></router-view>
      </transition>
    </v-container>
  </div>
</template>

<script>
import VuetifyColors from 'vuetify/lib/util/colors';
// import GlassCard from '@/components/blocks/GlassCard';
import Phone1 from '@/components/animated/Phone1';

export default {
  components: {
    // GlassCard,
    Phone1,
  },
  data: () => ({
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      type: 'default (no property)',
      clipped: false,
      floating: false,
      mini: false,
    },
    footer: {
      inset: false,
    },
  }),
  methods: {
    showColors() {
      console.log(VuetifyColors);
      console.log(this.$vuetify);
    },
  },
  mounted() {
    if (this.$vuetify.breakpoint.mdAndUp) {
      this.gsap.from('#header', {
        x: 200,
        opacity: 0,
        duration: 1.5,
      });
    }
    // if (this.$vuetify.breakpoint.smAndUp) {
    //   this.gsap.to('#factory', {
    //     scrollTrigger: {
    //       trigger: '#headerTrigger',
    //       scrub: true,
    //       // markers: true,
    //       start: 'top 60%',
    //       end: 'top 10%',
    //     },
    //     opacity: 0,
    //     duration: 1,
    //   });
    //   this.gsap.to('#header', {
    //     scrollTrigger: {
    //       trigger: '#headerTrigger',
    //       scrub: true,
    //       // markers: true,
    //       start: 'top 60%',
    //       end: 'top 10%',
    //     },
    //     // x: 400,
    //     opacity: 0,
    //     y: 50,
    //     // rotation: 360,
    //     duration: 1,
    //   });
    // }
  },
};
</script>
