<template>
  <div
    :style="{
      'background-image': $vuetify.theme.dark
        ? 'url(' + require('@/assets/images/bluecity.gif') + ')'
        : 'url(' + require('@/assets/images/neoncityday.gif') + ')'
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
          <!-- Large Music Player -->
          <v-card
            class="rounded-xl glass-card"
            :class="
              $vuetify.breakpoint.smAndDown ? 'px-0 pt-0' : 'px-8 pt-8 pb-6'
            "
          >
            <v-card-text
              style="display: flex; justify-content: space-around"
              :style="{
                flexDirection: $vuetify.breakpoint.smAndDown ? 'column' : 'row'
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
                  :src="
                    !loadingPlaylist
                      ? require(`@/assets/images/playlists/${
                          currentPlaylist.key
                        }/${
                          $vuetify.theme.dark && currentSong.coverDark
                            ? currentSong.coverDark
                            : currentSong.cover
                        }`)
                      : require(`@/assets/images/disc.webp`)
                  "
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
                  {{
                    $vuetify.theme.dark && currentSong.artistDark
                      ? currentSong.artistDark
                      : currentSong.artist
                  }}
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
                  {{
                    $vuetify.theme.dark && currentSong.artistDark
                      ? currentSong.artistDark
                      : currentSong.artist
                  }}
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
                style="width: 80%; cursor: pointer;"
                rounded
                :min="0"
                v-model="songTimeValue"
                color="primary"
                height="25"
              ></v-progress-linear>
              <span class="mx-auto">{{
                formatAsTime(currentSongTime.duration)
              }}</span>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- Playlist Sidebar -->
        <v-expand-x-transition>
          <v-card
            v-if="$vuetify.breakpoint.lgAndUp"
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
              <v-item-group mandatory v-model="selectedPlaylist">
                <v-container>
                  <v-row>
                    <v-col
                      v-for="(item, n) in playlists"
                      :key="n"
                      cols="12"
                      md="6"
                    >
                      <!-- Playlist Sidebar Item -->
                      <v-item
                        class="rounded-xl"
                        :value="item.key"
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
                            @click="toggle"
                          >
                            <!-- @click="changePlaylist(toggle, item, n, active)" -->
                            <v-img
                              height="145"
                              class="rounded-xl"
                              width="auto"
                              gradient="to top, #282828CC, #28282800"
                              :src="
                                require(`@/assets/images/playlists/${item.image}`)
                              "
                              :lazy-src="require(`@/assets/images/disc.webp`)"
                            >
                              <template v-slot:placeholder>
                                <v-row
                                  class="fill-height ma-0"
                                  align="center"
                                  justify="center"
                                >
                                  <v-progress-circular
                                    indeterminate
                                    color="primary"
                                  ></v-progress-circular>
                                </v-row>
                              </template>
                              <div
                                style="height: 100%"
                                class="d-flex flex-column"
                              >
                                <div class="d-flex">
                                  <v-spacer></v-spacer>
                                  <v-btn icon x-large
                                    ><v-icon
                                      size="48"
                                      :color="active ? 'success lighten-2' : ''"
                                      >mdi-play{{
                                        active ? "" : "-outline"
                                      }}</v-icon
                                    ></v-btn
                                  >
                                </div>
                                <v-spacer></v-spacer>
                                <p
                                  class="my-0 text-h6 align-self-center"
                                  :class="
                                    active
                                      ? 'font-weight-black white--text pb-0'
                                      : 'font-weight-light pb-2'
                                  "
                                >
                                  {{ item.name }}
                                </p>
                                <p
                                  v-if="active"
                                  class="text-center success--text text--lighten-3 caption mb-0 mt-n1"
                                >
                                  {{
                                    musicPlayer.isPlaying
                                      ? "Now Playing..."
                                      : "Paused"
                                  }}
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
          <!-- Playlist Slider -->
          <v-sheet
            v-if="!loadingPlaylist"
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
                v-for="(song, n) in currentPlaylist.songs"
                :key="n"
                v-slot:default="{ active, toggle }"
              >
                <!-- Playlist items slider card -->
                <v-card
                  :ripple="false"
                  @click="toggle"
                  class="ma-4 rounded-lg"
                  :class="{
                    primary: currentSong.id == song.id,
                    'darken-1': $vuetify.theme.dark,
                    'lighten-2': !$vuetify.theme.dark,
                    'glass-card': $vuetify.breakpoint.mdAndUp
                  }"
                  :style="{
                    transform: active ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.2s ease-out'
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
                      <v-img
                        :src="
                          require(`@/assets/images/playlists/${
                            currentPlaylist.key
                          }/${
                            $vuetify.theme.dark && song.coverDark
                              ? song.coverDark
                              : song.cover
                          }`)
                        "
                        :lazy-src="require(`@/assets/images/disc.webp`)"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
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
                        v-text="
                          $vuetify.theme.dark && song.artistDark
                            ? song.artistDark
                            : song.artist
                        "
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
          <v-sheet
            v-else
            class="mx-auto"
            elevation="0"
            style="background: transparent"
          >
            <div class="px-16 text-center">
              <p class="title">Loading Playlist</p>
              <v-progress-linear
                color="secondary"
                indeterminate
                rounded
                height="6"
              ></v-progress-linear>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <!-- Mobile Playlist Navbar -->
    <v-navigation-drawer
      app
      temporary
      class="primary-glass-card"
      v-model="showPlaylist"
      v-if="!$vuetify.breakpoint.lgAndUp"
      right
    >
      <div>
        <v-card-title>
          <v-icon class="mr-4">mdi-playlist-music</v-icon>
          <span>Playlists</span>
          <v-spacer></v-spacer>
          <v-btn @click="togglePlaylist" icon
            ><v-icon>mdi-arrow-right-circle</v-icon></v-btn
          >
        </v-card-title>
        <div
          class="mx-0"
          style="width: 100%; height: 3px; background-image: var(--rainbow)"
        ></div>
      </div>
      <v-list>
        <v-list-item-group v-model="selectedPlaylist">
          <v-list-item
            v-for="({ name, key, image }, i) in playlists"
            :key="i"
            :value="key"
            link
          >
            <v-list-item-icon>
              <v-avatar>
                <img
                  :src="require(`@/assets/images/playlists/${image}`)"
                  :alt="name"
                />
              </v-avatar>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ name }}</v-list-item-title>
              <v-list-item-subtitle
                v-if="currentPlaylist.key === key && musicPlayer.isPlaying"
                >Now playing...</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      muteKey: 0,
      showPlaylist: false,
      loadingPlaylist: false,
      showPlaylistItems: false,
      model: 1,
      volume: 25,
      items: [
        {
          name: "For Coding",
          src: "backgrounds/bg.jpg"
        },
        {
          name: "My Music",
          src: "backgrounds/md.jpg"
        },
        {
          name: "Rock Songs",
          src: "backgrounds/bg-2.jpg"
        },
        {
          name: "Genshin",
          src: "backgrounds/md2.jpg"
        },
        {
          name: "Classical",
          src: "backgrounds/md2.jpg"
        }
      ]
      // selectedPlaylist: null
    };
  },
  methods: {
    ...mapActions([
      "toggleMusicPlayer",
      "toggleIsPlaying",
      "setCurrentPlaylist",
      "setCurrentSong"
    ]),
    toggleMute() {
      this.musicPlayer.ref.muted = !this.musicPlayer.ref.muted;
      console.log(this.musicPlayer.ref.muted);
      this.muteKey += 1;
    },
    ...mapMutations(["setSongIndex"]),
    formatAsTime(time) {
      return `${Math.floor(time / 60)} : ${("0" + Math.floor(time % 60)).slice(
        -2
      )}`;
    },
    setVolume(e) {
      this.musicPlayer.ref.volume = e / 100;
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
    },
    playPrevSong() {
      console.log({ index: this.musicPlayer.songIndex - 1 });
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
    updateSongTime(e) {
      console.log({ e });
    },
    togglePlaylist() {
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
  computed: {
    ...mapGetters([
      "currentSong",
      "currentPlaylist",
      "musicPlayer",
      "currentSongTime",
      "playlists"
    ]),
    selectedPlaylist: {
      get() {
        return this.currentPlaylist.key;
      },
      set(val) {
        console.log({ val });
        // await this.setCurrentPlaylist();
        if (val !== this.currentPlaylist.key) {
          if (this.musicPlayer.isPlaying) {
            this.toggleIsPlaying(false);
          }
          const playlist = this.$store.state.playlists[val];
          // console.log(getPlaylists());
          console.log({ playlist });
          this.loadingPlaylist = true;
          this.setCurrentPlaylist(playlist).then(async () => {
            this.setSongIndex(0);
            await this.setCurrentSong(playlist.songs[0]);
            this.loadingPlaylist = false;
            this.playCurrentSong();
          });
        }
      }
    },
    songTimeValue: {
      get() {
        return (
          (this.currentSongTime.currentTime / this.currentSongTime.duration) *
          100
        );
      },
      set(val) {
        const duration = this.currentSongTime.duration;
        const currentTime = (val / 100) * duration;
        console.log("value set");
        this.musicPlayer.ref.currentTime = currentTime;
      }
    }
  },
  watch: {
    currentSong: function(newValue) {
      console.log(newValue);
      const songListIds = this.currentPlaylist.songs.map(song => song.id);
      const songIndex = songListIds.indexOf(newValue.id);
      console.log(songIndex);
      this.model = songIndex;
    }
  },
  mounted() {
    if (this.$vuetify.breakpoint.lgAndUp) {
      setTimeout(() => {
        this.showPlaylist = true;
        setTimeout(() => {
          this.showPlaylistItems = true;
        }, 200);
      }, 1000);
    }
    if (!this.musicPlayer.show) {
      this.toggleMusicPlayer(true);
    }
  }
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
