<template>
  <v-app>
    <Navbar :style="cssProps" />
    <v-main :style="cssProps">
      <transition name="router-anim">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from './components/HelloWorld.vue';
// import VuetifyColors from "vuetify/lib/util/colors";
/* eslint-disable */
// @ts-ignore
import { generateColors } from "./utils/customColors";
/* eslint-enable */
import Navbar from "./components/shared/Navbar.vue";

export default Vue.extend({
  name: "App",

  components: {
    // HelloWorld,
    Navbar
  },

  data: () => ({
    //
  }),
  computed: {
    cssProps() {
      const generatedColors = generateColors(this.$vuetify.theme.currentTheme);
      return generatedColors;
    }
  },
  mounted() {
    console.log({
      breakpoint: this.$vuetify.breakpoint,
      sm: this.$vuetify.breakpoint.smOnly,
      xs: this.$vuetify.breakpoint.xsOnly,
      md: this.$vuetify.breakpoint.mdOnly,
      lg: this.$vuetify.breakpoint.lgOnly
    });
  }
});
</script>
<style>
.router-anim-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.3s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 0.3s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
/* body::-webkit-scrollbar {
  width: 1rem;
}

body::-webkit-scrollbar-track {
  background: var(--secondary);
}

body::-webkit-scrollbar-thumb {
  background: var(--primary);
}
*::-webkit-scrollbar-thumb {
  background: var(--primary);
}

*::-webkit-scrollbar {
  width: 1rem;
}

*::-webkit-scrollbar-track {
  background: var(--secondary);
} */
</style>
