<template>
  <div>
    <v-slide-y-reverse-transition>
      <v-footer v-if="musicPlayer.show" padless app inset style="z-index: 5;">
        <v-card flat tile width="100%">
          <v-slider
            :value="currentTime"
            height="0"
            @change="setProgress"
            hide-details
            :loading="!songReady"
            :min="0"
            :max="duration"
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
                  class="music-image"
                  :class="musicPlayer.isPlaying ? 'playing' : ''"
                  :src="currentSong.cover"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ currentSong.name }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  currentSong.artist
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-spacer></v-spacer>

              <v-list-item-icon>
                <v-btn icon>
                  <v-icon>mdi-rewind</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp, 'mx-2': true }"
              >
                <v-btn @click="playCurrentSong" icon>
                  <v-icon size="35">{{
                    musicPlayer.isPlaying ? "mdi-pause" : "mdi-play"
                  }}</v-icon>
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
              <v-list-item-icon>
                <v-btn icon @click="toggleMusicPlayer(false)">
                  <v-icon>mdi-menu-down</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-footer>
    </v-slide-y-reverse-transition>
    <audio
      :src="currentSong ? currentSong.audio : ''"
      @loadeddata="songReady = true"
      @timeupdate="updateSongTime"
      @ended="handleSongEnded"
      ref="audioPlayer"
    ></audio>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import allSongs from "../../utils/songs";
export default {
  data() {
    return {
      songIndex: 0,
      songReady: false,
      currentTime: 0,
      duration: 1,
    };
  },
  methods: {
    ...mapActions([
      "toggleMusicPlayer",
      "toggleIsPlaying",
      "setCurrentPlaylist",
      "setCurrentSong",
    ]),
    setProgress(e) {
      console.log({ e });
      this.$refs.audioPlayer.currentTime = e;
    },
    updateSongTime(e) {
      const { currentTime, duration } = e.target;
      this.currentTime = currentTime;
      this.duration = duration;
    },
    playCurrentSong() {
      if (!this.musicPlayer.isPlaying) {
        this.songReady = false;
        const playPromise = this.$refs.audioPlayer.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.songReady = true;
            this.$refs.audioPlayer.play();
            this.toggleIsPlaying(true);
          });
        }
      } else {
        this.$refs.audioPlayer.pause();
        this.toggleIsPlaying(false);
      }
    },
    handleSongEnded(e) {
      console.log({ e });
      this.toggleIsPlaying(false);
    },
  },
  computed: {
    ...mapGetters(["musicPlayer", "currentSong", "currentPlaylist"]),
  },
  // mounted() {},
  created() {
    const playlist = allSongs();
    console.log({ playlist });
    this.setCurrentPlaylist(playlist).then(() => {
      this.setCurrentSong(playlist[2]);
      console.log(this.currentSong);
      console.log(this.currentPlaylist);
    });
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
