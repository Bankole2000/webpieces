<template>
  <v-slide-y-reverse-transition>
    <v-footer v-if="musicPlayer.show" padless app inset style="z-index: 5;">
      <v-card flat tile width="100%">
        <v-slider
          :value="50"
          height="0"
          @change="showValue"
          hide-details
          min="0"
          max="100"
          class="mx-0"
        ></v-slider>
        <!-- <v-progress-linear
          :value="50"
          class="my-0 pb-2"
          height="6"
          @click="showValue"
        ></v-progress-linear> -->

        <!-- Here's the card
        <v-btn @click="toggleMusicPlayer(false)"
          ><v-icon>mdi-cancel</v-icon></v-btn
        > -->
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                class="music-image playing"
                :src="'https://cdn.vuetifyjs.com/images/lists/5.jpg'"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>The Walker</v-list-item-title>
              <v-list-item-subtitle>Fitz & The Trantrums</v-list-item-subtitle>
            </v-list-item-content>

            <v-spacer></v-spacer>

            <v-list-item-icon>
              <v-btn icon>
                <v-icon>mdi-rewind</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon
              @click="toggleMusicPlayer(false)"
              :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }"
            >
              <v-btn icon>
                <v-icon>mdi-pause</v-icon>
              </v-btn>
            </v-list-item-icon>

            <v-list-item-icon
              class="ml-0"
              :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
            >
              <v-btn icon>
                <v-icon>mdi-fast-forward</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-footer>
  </v-slide-y-reverse-transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      showFooter: true,
    };
  },
  methods: {
    ...mapActions(["toggleMusicPlayer"]),
    showValue(e) {
      console.log({ e });
    },
  },
  computed: {
    ...mapGetters(["musicPlayer"]),
  },
};
</script>

<style>
.music-image {
  animation: rotate 5s linear infinite;

  animation-play-state: paused;
}

.music-image.playing {
  animation-play-state: running;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
