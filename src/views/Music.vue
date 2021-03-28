<template>
  <div
    :style="{
      'background-image': $vuetify.theme.dark
        ? 'url(' + require('@/assets/images/bluecity.gif') + ')'
        : 'url(' + require('@/assets/images/neoncityday.gif') + ')',
    }"
    style="
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-around;
      background-size: cover;
    "
  >
    <v-container
      v-if="currentSong"
      :class="$vuetify.breakpoint.mdAndUp ? 'mb-n16' : ''"
    >
      <v-row>
        <v-col>
          <v-card
            class="rounded-xl glass-card"
            :class="
              $vuetify.breakpoint.smAndDown ? 'px-0 pt-0' : 'px-8 pt-8 pb-6'
            "
          >
            <!-- <v-card-title>
              Now Playing
            </v-card-title> -->

            <v-card-text
              style="display: flex; justify-content: space-around"
              :style="{
                flexDirection: $vuetify.breakpoint.smAndDown ? 'column' : 'row',
              }"
            >
              <v-avatar
                size="250"
                class="primary"
                :class="$vuetify.breakpoint.smAndDown ? 'mx-auto' : ''"
                style="border: 3px solid var(--primary)"
              >
                <img
                  width="250"
                  class="music-image"
                  :class="musicPlayer.isPlaying ? 'playing' : ''"
                  :src="currentSong.cover"
                  alt=""
                />
              </v-avatar>
              <div
                v-if="!$vuetify.breakpoint.smAndDown"
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <h3
                  class="text-center secondary--text display-1 font-weight-medium"
                >
                  {{ currentSong.name }}
                </h3>
                <h3
                  class="text-center secondary--text display-1 font-weight-light"
                >
                  {{ currentSong.artist }}
                </h3>
                <div style="width: 100%">
                  <v-slider
                    :min="0"
                    :max="100"
                    @change="setVolume"
                    v-model="volume"
                    hide-details
                    append-icon="mdi-playlist-music"
                    @click:append="togglePlaylist"
                  >
                    <template v-slot:prepend>
                      <v-icon
                        :key="muteKey"
                        size="32"
                        class="mt-n1"
                        @click="toggleMute"
                      >
                        {{
                          musicPlayer.ref.muted
                            ? "mdi-volume-mute"
                            : "mdi-volume-high"
                        }}
                      </v-icon>
                    </template>
                    <template v-slot:append>
                      <v-icon size="32" class="mt-n1" @click="togglePlaylist">
                        {{
                          showPlaylist
                            ? "mdi-playlist-remove"
                            : "mdi-playlist-music"
                        }}
                      </v-icon>
                    </template>
                  </v-slider>
                </div>

                <div
                  class="player-controls"
                  style="display: flex; width: 100%; justify-content: center"
                >
                  <v-btn class="pa-8 glass-card" @click="playPrevSong" icon>
                    <v-icon size="32">mdi-rewind</v-icon>
                  </v-btn>
                  <v-btn
                    class="pa-8 mx-8 glass-card"
                    @click="playCurrentSong"
                    icon
                  >
                    <v-icon size="48">{{
                      musicPlayer.isPlaying ? "mdi-pause" : "mdi-play"
                    }}</v-icon>
                  </v-btn>
                  <v-btn class="pa-8 glass-card" @click="playNextSong" icon>
                    <v-icon size="32">mdi-fast-forward</v-icon>
                  </v-btn>
                </div>
              </div>
              <div v-else class="mt-6">
                <h4
                  class="text-center secondary--text text-h5 font-weight-medium"
                >
                  {{ currentSong.name }}
                </h4>
                <h4
                  class="text-center secondary--text text-h5 font-weight-light"
                >
                  {{ currentSong.artist }}
                </h4>
                <div style="width: 80%" class="mx-auto mt-4">
                  <v-slider
                    :min="0"
                    :max="100"
                    @change="setVolume"
                    v-model="volume"
                    hide-details
                    append-icon="mdi-playlist-music"
                    @click:append="togglePlaylist"
                  >
                    <template v-slot:prepend>
                      <v-icon
                        :key="muteKey"
                        size="32"
                        class="mt-n1"
                        @click="toggleMute"
                      >
                        {{
                          musicPlayer.ref.muted
                            ? "mdi-volume-mute"
                            : "mdi-volume-high"
                        }}
                      </v-icon>
                    </template>
                    <template v-slot:append>
                      <v-icon size="32" class="mt-n1" @click="togglePlaylist"
                        >mdi-playlist-music
                      </v-icon>
                    </template>
                  </v-slider>
                </div>
              </div>
            </v-card-text>
            <v-card-actions
              v-if="!$vuetify.breakpoint.smAndDown"
              class="py-4 mt-4 mb-0 justify-center glass-card rounded-xl"
            >
              <span class="mx-auto">{{
                formatAsTime(currentSongTime.currentTime)
              }}</span>
              <v-progress-linear
                stream
                style="width: 80%"
                rounded
                :min="0"
                :value="
                  (currentSongTime.currentTime / currentSongTime.duration) * 100
                "
                color="primary"
                height="25"
              ></v-progress-linear>
              <span class="mx-auto">{{
                formatAsTime(currentSongTime.duration)
              }}</span>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-expand-x-transition>
          <v-card
            v-if="$vuetify.breakpoint.mdAndUp"
            v-show="showPlaylist"
            width="344"
            class="ma-3 rounded-xl primary-glass-card"
          >
            <v-card-title v-if="showPlaylist">
              <v-icon class="mr-4">mdi-playlist-music</v-icon>
              <span v-if="showPlaylistItems">Playlists</span>
              <v-spacer></v-spacer>
              <v-btn @click="togglePlaylist" icon
                ><v-icon>mdi-arrow-right-circle</v-icon></v-btn
              >
            </v-card-title>
            <div
              v-if="showPlaylist"
              class="mx-0"
              style="width: 100%; height: 3px; background-image: var(--rainbow)"
            ></div>
            <v-card-text
              style="max-height: 340px; overflow-y: scroll; overflow-x: hidden"
              class="px-0 py-0"
            >
              <v-item-group v-model="selectedPlaylist">
                <v-container>
                  <v-row>
                    <v-col v-for="(item, n) in items" :key="n" cols="12" md="6">
                      <v-item
                        class="rounded-xl"
                        v-slot:default="{ active, toggle }"
                      >
                        <v-slide-x-reverse-transition>
                          <v-card
                            v-if="showPlaylistItems"
                            :color="active ? '' : ''"
                            class="d-flex align-center rounded-xl"
                            dark
                            height="145"
                            width="145"
                            @click="changePlaylist(toggle, item, n, active)"
                          >
                            <v-img
                              height="145"
                              class="rounded-xl"
                              width="145"
                              gradient="to top, #282828CC, #28282800"
                              :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
                            >
                              <div
                                style="height: 100%"
                                class="d-flex flex-column"
                              >
                                <div class="d-flex">
                                  <v-spacer></v-spacer>
                                  <v-btn icon x-large
                                    ><v-icon
                                      size="48"
                                      :color="active ? 'white' : ''"
                                      >mdi-play{{
                                        active ? "" : "-outline"
                                      }}</v-icon
                                    ></v-btn
                                  >
                                </div>
                                <v-spacer></v-spacer>
                                <p
                                  class="my-0 pb-2 text-h6 align-self-center"
                                  :class="
                                    active
                                      ? 'font-weight-black white--text'
                                      : 'font-weight-light'
                                  "
                                >
                                  Playlist {{ n }}
                                </p>
                              </div>
                            </v-img>
                          </v-card>
                        </v-slide-x-reverse-transition>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-container>
              </v-item-group>
            </v-card-text>
          </v-card>
        </v-expand-x-transition>
      </v-row>
    </v-container>
    <v-container fluid v-if="currentSong">
      <v-row>
        <v-col cols="12" class="px-0 pt-0">
          <v-sheet
            class="mx-auto"
            elevation="0"
            style="background: transparent"
          >
            <v-slide-group
              v-model="model"
              :class="$vuetify.breakpoint.mdAndUp ? 'pa-4' : 'pa-0'"
              center-active
              show-arrows
            >
              <v-slide-item
                v-for="(song, n) in currentPlaylist"
                :key="n"
                v-slot:default="{ active, toggle }"
              >
                <!-- :color="currentSong.id == song.id ? 'primary' : ''" -->
                <v-card
                  :ripple="false"
                  @click="toggle"
                  class="ma-4 rounded-lg"
                  :class="{
                    primary: currentSong.id == song.id,
                    'darken-1': $vuetify.theme.dark,
                    'lighten-2': !$vuetify.theme.dark,
                    'glass-card': $vuetify.breakpoint.mdAndUp,
                  }"
                  :style="{
                    transform: active ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.2s ease-out',
                  }"
                  :width="$vuetify.breakpoint.mdAndUp ? 340 : ''"
                >
                  <div class="d-flex flex-no-wrap justify-start">
                    <v-avatar
                      v-if="$vuetify.breakpoint.mdAndUp"
                      class="rounded-bl-lg rounded-tl-lg"
                      size="125"
                      tile
                    >
                      <v-img :src="song.cover"></v-img>
                    </v-avatar>
                    <div style="width: 100%">
                      <v-card-title
                        :class="$vuetify.breakpoint.mdAndDown ? 'pa-2' : ''"
                        class="subtitle-1 font-weight-medium"
                        v-text="song.name"
                      ></v-card-title>

                      <v-card-subtitle
                        :class="$vuetify.breakpoint.mdAndDown ? 'pa-2' : ''"
                        class="caption font-weight-normal"
                        v-text="song.artist"
                      ></v-card-subtitle>
                      <v-spacer></v-spacer>
                      <div
                        :class="
                          $vuetify.breakpoint.mdAndDown ? 'px-2 pb-2' : 'px-4'
                        "
                      >
                        <v-btn @click.stop="playSong(song, n)" block>
                          {{
                            currentSong.id == song.id && musicPlayer.isPlaying
                              ? "Playing"
                              : "Play"
                          }}
                          <v-icon right
                            >mdi-{{
                              currentSong.id == song.id && musicPlayer.isPlaying
                                ? "pause"
                                : "play"
                            }}</v-icon
                          >
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      muteKey: 0,
      showPlaylist: false,
      showPlaylistItems: false,
      model: 1,
      volume: 25,
      items: [
        {
          src: "backgrounds/bg.jpg",
        },
        {
          src: "backgrounds/md.jpg",
        },
        {
          src: "backgrounds/bg-2.jpg",
        },
        {
          src: "backgrounds/md2.jpg",
        },
        {
          src: "backgrounds/md2.jpg",
        },
      ],
      selectedPlaylist: null,
    };
  },
  methods: {
    ...mapActions([
      "toggleMusicPlayer",
      "toggleIsPlaying",
      "setCurrentPlaylist",
      "setCurrentSong",
    ]),
    toggleMute() {
      this.musicPlayer.ref.muted = !this.musicPlayer.ref.muted;
      console.log(this.musicPlayer.ref.muted);
      this.muteKey += 1;
    },
    changePlaylist(...args) {
      console.log({ args });
      this.selectedPlaylist = args[2];
    },
    ...mapMutations(["setSongIndex"]),
    formatAsTime(time) {
      return `${Math.floor(time / 60)} : ${("0" + Math.floor(time % 60)).slice(
        -2
      )}`;
    },
    setVolume(e) {
      console.log({ e });
      this.musicPlayer.ref.volume = e / 100;
      console.log({ volume: this.musicPlayer.ref.volume });
    },
    playCurrentSong() {
      console.log({ musicPlayer: this.musicPlayer });
      if (this.musicPlayer.isPlaying) {
        this.musicPlayer.ref.pause();
        this.toggleIsPlaying(false);
      } else {
        const playPromise = this.musicPlayer.ref.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.musicPlayer.ref.play();
            this.toggleIsPlaying(true);
          });
        }
      }
    },
    playSong(song, index) {
      console.log({ song, index, player: this.musicPlayer.ref });

      if (this.currentSong.id == song.id && this.musicPlayer.isPlaying) {
        this.musicPlayer.ref.pause();
        this.toggleIsPlaying(false);
        return;
      } else if (
        this.currentSong.id == song.id &&
        !this.musicPlayer.isPlaying
      ) {
        this.musicPlayer.ref.play();
        this.toggleIsPlaying(true);
        return;
      }
      this.musicPlayer.ref.pause();
      this.setSongIndex(index);
      this.setCurrentSong(song).then(() => {
        const playPromise = this.musicPlayer.ref.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.musicPlayer.ref.play();
            this.toggleIsPlaying(true);
          });
        }
      });
    },
    playNextSong() {
      console.log({ index: this.musicPlayer.songIndex + 1 });
      if (this.musicPlayer.songIndex < this.currentPlaylist.length - 1) {
        this.setSongIndex(this.musicPlayer.songIndex + 1);
      } else {
        this.setSongIndex(0);
      }

      this.setCurrentSong(
        this.currentPlaylist[this.musicPlayer.songIndex]
      ).then(() => {
        if (this.musicPlayer.isPlaying) {
          this.toggleIsPlaying(false);
          this.playCurrentSong();
        }
      });
    },
    playPrevSong() {
      console.log({ index: this.musicPlayer.songIndex - 1 });
      if (this.musicPlayer.songIndex > 0) {
        this.setSongIndex(this.musicPlayer.songIndex - 1);
      } else {
        this.setSongIndex(this.currentPlaylist.length - 1);
      }
      this.setCurrentSong(
        this.currentPlaylist[this.musicPlayer.songIndex]
      ).then(() => {
        if (this.musicPlayer.isPlaying) {
          this.toggleIsPlaying(false);
          this.playCurrentSong();
        }
      });
    },
    togglePlaylist() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        if (this.showPlaylist) {
          this.showPlaylistItems = false;
          setTimeout(() => {
            this.showPlaylist = false;
          }, 200);
        } else {
          this.showPlaylist = true;
          setTimeout(() => {
            this.showPlaylistItems = true;
          }, 200);
        }
      }
    },
  },
  computed: {
    ...mapGetters([
      "currentSong",
      "currentPlaylist",
      "musicPlayer",
      "currentSongTime",
    ]),
  },
  watch: {
    currentSong: function (newValue) {
      console.log(newValue);
      const songListIds = this.currentPlaylist.map((song) => song.id);
      const songIndex = songListIds.indexOf(newValue.id);
      console.log(songIndex);
      this.model = songIndex;
    },
  },
  mounted() {
    if (this.$vuetify.breakpoint.lgAndUp) {
      setTimeout(() => {
        this.togglePlaylist();
      }, 1000);
    }
    if (!this.musicPlayer.show) {
      this.toggleMusicPlayer(true);
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
