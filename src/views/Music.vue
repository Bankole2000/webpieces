<template>
  <div
    class="music-player"
    style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: center;"
  >
    <!-- :style="{
          width: expand2 ? '100%' : '0',
          display: expand2 ? '' : 'none',
        }" -->
    <!-- :style="{
            width: expand2 ? '50%' : '100%',
          }" -->
    <v-expand-x-transition>
      <div
        class="music-display"
        style="background-color: orange; width: 100%;"
        :style="{
          width: expand2 ? '60%' : '100%',
        }"
        @click="expand2 = !expand2"
      >
        <v-container>
          <v-row>
            <v-col cols="8" offset-md="2">
              <v-card>
                <v-card-title>Now Playing</v-card-title>
                <v-card-text style="display: flex; justify-content: center">
                  <v-avatar
                    size="350"
                    class="primary"
                    style="border: 3px solid var(--primary);"
                  >
                    <img width="200" :src="currentSong.cover" alt="" />
                  </v-avatar>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-expand-x-transition>
    <!-- :style="{
          width: expand2 ? '0' : '100%',
          display: expand2 ? 'none' : '',
        }" -->
    <v-expand-x-transition>
      <div
        class="playlist-display"
        style="background-color: green; width: 40%;"
        v-if="expand2"
        @click="expand2 = !expand2"
      >
        <v-container>
          <v-row>
            <v-col cols="8" offset-md="2">
              <v-card>
                <v-card-title>Now Playing</v-card-title>
                <v-card-text>some buttonw or whatever</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-expand-x-transition>

    <!-- <v-container>
      <v-row>
        <v-card
          class="glass pt-4 pb-6 my-auto"
          :style="{
            'background-color': $vuetify.theme.dark ? '' : '#f5f5f5',
          }"
          max-width="50%"
          style="display: flex; flex-direction: column"
        >
          <v-img
            @click="expand2 = !expand2"
            src="https://cdn.vuetifyjs.com/images/lists/5.jpg"
            class="music-image"
            contain
            style="border-radius: 50%;"
          />
          <v-card-text>
            <h3 class="text-center display-1">Song Title</h3>
            <h3 class="text-center display-1">Artist Name</h3>
            <div
              class="player-controls"
              style="display: flex; width: 100%; justify-content: center;"
            >
              <v-btn
                class="pa-8 "
                :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
                icon
              >
                <v-icon size="32">mdi-rewind</v-icon>
              </v-btn>
              <v-btn
                class="pa-8 mx-8"
                :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
                icon
              >
                <v-icon size="48">mdi-play</v-icon>
              </v-btn>
              <v-btn
                class="pa-8"
                :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
                icon
              >
                <v-icon size="32">mdi-fast-forward</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>

        <v-expand-x-transition>
          <v-card v-show="expand2" style="width: 40%;" class="mx-auto">
            <v-card-title>
              <v-spacer></v-spacer>
              <v-btn @click="expand2 = false" icon>
                <v-icon>mdi-arrow-right-bold</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-expand-x-transition>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      expand2: true,
    };
  },
  computed: {
    ...mapGetters(["currentSong"]),
  },
  mounted() {
    if (this.$vuetify.breakpoint.mdAndUp) {
      setTimeout(() => {
        this.expand2 = true;
      }, 3000);
    }
  },
};
</script>

<style>
.music-display {
  transition: all 0.2s ease-in-out;
}
/*
.playlist-display {
  transition: all 0.2s ease-in-out;
} */
</style>
