<template>
  <div>
    <v-slide-y-reverse-transition>
      <v-footer v-if="musicPlayer.show" padless app inset style="z-index: 5">
        <v-card flat tile width="100%">
          <div class="music-slider">
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
          </div>
          <!-- Here's the card
        <v-btn @click="toggleMusicPlayer(false)"
          ><v-icon>mdi-cancel</v-icon></v-btn
        > -->
          <v-list>
            <v-list-item v-if="currentSong">
              <v-list-item-avatar>
                <v-img
                  class="music-image"
                  :class="musicPlayer.isPlaying ? 'playing' : ''"
                  :src="
                    !isLoadingPlaylist
                      ? require(`@/assets/images/playlists/${
                          currentPlaylist.key
                        }/${
                          $vuetify.theme.dark && currentSong.coverDark
                            ? currentSong.coverDark
                            : currentSong.cover
                        }`)
                      : require(`@/assets/images/disc.webp`)
                  "
                  :lazy-src="require(`@/assets/images/disc.webp`)"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ currentSong.name }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  currentSong.artist
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <!-- <v-spacer></v-spacer> -->

              <v-list-item-icon>
                <v-btn @click="playPrevSong" icon :disabled="!songReadyState">
                  <v-icon>mdi-rewind</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp, 'mx-2': true }"
              >
                <v-btn
                  @click="playCurrentSong"
                  icon
                  :loading="!songReadyState"
                  :disabled="!songReadyState"
                >
                  <v-icon size="35">{{
                    musicPlayer.isPlaying ? "mdi-pause" : "mdi-play"
                  }}</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                class="ml-0"
                :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn @click="playNextSong" icon :disabled="!songReadyState">
                  <v-icon>mdi-fast-forward</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-spacer></v-spacer>
              <v-list-item-icon>
                <v-btn icon @click="$emit('showColorModal', true)">
                  <v-icon size="32">mdi-palette</v-icon>
                </v-btn>
              </v-list-item-icon>
              <v-list-item-icon>
                <v-btn icon @click="toggleMusicPlayer(false)">
                  <v-icon size="32">mdi-menu-down</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-footer>
    </v-slide-y-reverse-transition>
    <audio
      :src="
        currentSong && playListIncludesSong
          ? require(`@/assets/audio/${currentPlaylist.key}/${currentSong.audio}`)
          : ''
      "
      @loadeddata="songReady = true"
      @loadstart="songReady = false"
      @timeupdate="updateSongTime"
      @ended="handleSongEnded"
      ref="audioPlayer"
    ></audio>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
// import allSongs from "../../utils/songs";
import getPlaylists from "../../utils/playlists";
export default {
  data() {
    return {
      currentTime: 0,
      duration: 1
    };
  },
  methods: {
    ...mapActions([
      "toggleMusicPlayer",
      "toggleIsPlaying",
      "setCurrentPlaylist",
      "setCurrentSong",
      "setPlaylists"
    ]),
    ...mapMutations(["setMusicPlayer", "setSongIndex"]),
    setProgress(e) {
      // console.log({ e });
      this.$refs.audioPlayer.currentTime = e;
    },
    updateSongTime(e) {
      const { currentTime, duration } = e.target;
      this.currentTime = currentTime;
      this.duration = duration;
      this.$store.commit("updateCurrentSongTime", { currentTime, duration });
    },
    playCurrentSong() {
      if (!this.musicPlayer.isPlaying) {
        const playPromise = this.$refs.audioPlayer.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
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
      this.playNextSong();
    },
    async playPrevSong() {
      await this.$refs.audioPlayer.pause();
      this.currentTime = 0;
      // console.log(this.currentPlaylist);
      if (this.musicPlayer.songIndex > 0) {
        this.setSongIndex(this.musicPlayer.songIndex - 1);
      } else {
        this.setSongIndex(this.currentPlaylist.songs.length - 1);
      }
      this.setCurrentSong(
        this.currentPlaylist.songs[this.musicPlayer.songIndex]
      ).then(() => {
        if (this.musicPlayer.isPlaying) {
          this.toggleIsPlaying(false);
          this.playCurrentSong();
        }
      });
    },
    async playNextSong() {
      await this.$refs.audioPlayer.pause();
      this.currentTime = 0;
      // console.log(this.currentPlaylist);
      if (this.musicPlayer.songIndex < this.currentPlaylist.songs.length - 1) {
        this.setSongIndex(this.musicPlayer.songIndex + 1);
      } else {
        this.setSongIndex(0);
      }
      this.setCurrentSong(
        this.currentPlaylist.songs[this.musicPlayer.songIndex]
      ).then(() => {
        if (this.musicPlayer.isPlaying) {
          this.toggleIsPlaying(false);
          this.playCurrentSong();
        }
      });
    }
  },
  computed: {
    ...mapGetters([
      "musicPlayer",
      "currentSong",
      "currentPlaylist",
      "songReadyState",
      "isLoadingPlaylist"
    ]),
    playListIncludesSong() {
      if (!this.currentPlaylist || !this.currentSong) return false;
      const songNames = this.currentPlaylist.songs.map(x => x.name);
      if (!songNames.includes(this.currentSong.name)) return false;
      return true;
    },
    songReady: {
      get() {
        return this.songReadyState;
      },
      set(val) {
        this.$store.commit("setSongReadyState", val);
      }
    }
  },
  mounted() {
    // console.log(this.$refs);
    this.setMusicPlayer(this.$refs.audioPlayer);
  },

  async created() {
    // console.log({ query: this.$route.query });
    const selectedPlaylist = this.$route.query.playlist;
    const playlists = getPlaylists();
    await this.setPlaylists(playlists);
    // console.log(Object.keys(playlists));

    const playlist = Object.keys(playlists).includes(selectedPlaylist)
      ? playlists[selectedPlaylist]
      : playlists["ambience"];
    // console.log(getPlaylists());
    // console.log({ playlist });
    this.setCurrentPlaylist(playlist).then(() => {
      this.setCurrentSong(playlist.songs[this.musicPlayer.songIndex]);
    });
  }
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

.music-slider:hover {
  cursor: pointer;
}
</style>
