<template>
  <v-app>
    <Navbar :style="cssProps" />
    <v-main :style="cssProps" style="margin-top: -18px">
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
// import MusicFooter from "./components/shared/MusicFooter.vue";

export default Vue.extend({
  name: "App",

  components: {
    // HelloWorld,
    Navbar
    // MusicFooter,
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

  watch: {
    $route(to) {
      document.title = `Banky Studio - ${to.meta.title ? to.meta.title : ""}`;
      const link = document.querySelector("[rel='icon']");
      if (link) {
        // link.setAttribute("href", "img/icons/nightprofile.jpg.webp");
        link.setAttribute("href", "img/icons/nightprofile.jpg");
        console.log(link);
      }
    }
  },
  mounted() {
    // console.log({
    //   breakpoint: this.$vuetify.breakpoint,
    //   sm: this.$vuetify.breakpoint.smOnly,
    //   xs: this.$vuetify.breakpoint.xsOnly,
    //   md: this.$vuetify.breakpoint.mdOnly,
    //   lg: this.$vuetify.breakpoint.lgOnly
    // });
    // console.log({ colors: this.$vuetify.theme });
  },
  beforeCreate() {
    this.$vuetify.theme.dark = true;
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

* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}

*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: #e91e63;
  border-radius: 10px;
  border: transparent;
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
