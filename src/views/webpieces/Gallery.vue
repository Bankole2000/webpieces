<template>
  <div class="gallery">
    <h1 class=" display-2 font-weight-light" :class="$vuetify.breakpoint.mdAndUp ? 'mx-8' : ''">
      Gallery
      <span class="text-h5 font-weight-light" v-if="$vuetify.breakpoint.mdAndUp"
        >(Webpiece specimen library)</span
      >
    </h1>
    <div
      class=" mt-8"
      style="height: 5px; width: 100%; background-image: var(--rainbow); box-shadow: var(--glass-shadow-normal)"
    ></div>
    <v-container class="my-4 px-0">
      <transition name="router-anim">
        <router-view></router-view>
      </transition>
    </v-container>
  </div>
</template>

<script>
// import WebpieceCard from '@/components/blocks/WebpieceCard';
export default {
  components: {
    // WebpieceCard,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
