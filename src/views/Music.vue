<template>
  <div
    :style="{
      'background-image': $vuetify.theme.dark
        ? 'url(' + require('@/assets/images/bluecity.gif') + ')'
        : 'url(' + require('@/assets/images/neoncityday.gif') + ')',
    }"
    style="display: flex; height: 100%; flex-direction: column; justify-content: space-around; background-size: cover;"
  >
    <!-- <div
      class="music-player"
      style="display: flex; width: 100%; height: 100%; align-items: center; justify-content: center;"
    >
     
      <v-expand-x-transition>
        <div
          class="music-display"
          style=" width: 100%;"
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
      
      <v-expand-x-transition>
        <div
          class="playlist-display"
          style=" width: 40%;"
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

     </div> -->
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
    <v-container>
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
              style="display: flex; justify-content: space-around;"
              :style="{
                flexDirection: $vuetify.breakpoint.smAndDown ? 'column' : 'row',
              }"
            >
              <v-avatar
                size="250"
                class="primary"
                :class="$vuetify.breakpoint.smAndDown ? 'mx-auto' : ''"
                style="border: 3px solid var(--primary);"
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
                style="display: flex; flex-direction: column; justify-content: space-between; align-items: center;"
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
                <div style="width: 100%;">
                  <v-slider
                    :min="0"
                    :max="100"
                    v-model="volume"
                    prepend-icon="mdi-volume-high"
                    append-icon="mdi-playlist-music"
                    @click:append="showPlaylist"
                  ></v-slider>
                </div>

                <div
                  class="player-controls"
                  style="display: flex; width: 100%; justify-content: center;"
                >
                  <v-btn class="pa-8 glass-card" icon>
                    <v-icon size="32">mdi-rewind</v-icon>
                  </v-btn>
                  <v-btn class="pa-8 mx-8 glass-card" icon>
                    <v-icon size="48">{{
                      musicPlayer.isPlaying ? "mdi-pause" : "mdi-play"
                    }}</v-icon>
                  </v-btn>
                  <v-btn class="pa-8 glass-card" icon>
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
                <div style="width: 80%;" class="mx-auto mt-4">
                  <v-slider
                    :min="0"
                    :max="100"
                    v-model="volume"
                    prepend-icon="mdi-volume-high"
                    append-icon="mdi-playlist-music"
                    @click:append="showPlaylist"
                  ></v-slider>
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
                @click="expand2 = !expand2"
                stream
                style="width: 80%;"
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
            v-show="expand2"
            width="344"
            class="ma-3 rounded-xl primary-glass-card"
          >
            <v-card-title v-if="expand2">
              <v-icon class="mr-4">mdi-playlist-music</v-icon> Playlists
              <v-spacer></v-spacer>
              <v-btn @click="expand2 = !expand2" icon
                ><v-icon>mdi-arrow-right-circle</v-icon></v-btn
              >
            </v-card-title>
            <div
              class="mx-0 mt-n3"
              style="width: 100%; height: 3px; background-image: var(--rainbow)"
            ></div>
            <v-card-text
              v-if="expand2"
              style="max-height: 340px; overflow-y: scroll;"
            >
              <v-container class="pa-1">
                <v-item-group v-model="selected" multiple>
                  <v-row>
                    <v-col v-for="(item, i) in items" :key="i" cols="12" md="6">
                      <v-item v-slot:default="{ active, toggle }">
                        <v-img
                          :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
                          height="150"
                          class="text-right pa-2 rounded-xl"
                          @click="toggle"
                        >
                          <v-btn icon dark>
                            <v-icon>
                              {{ active ? "mdi-heart" : "mdi-heart-outline" }}
                            </v-icon>
                          </v-btn>
                        </v-img>
                      </v-item>
                    </v-col>
                  </v-row>
                </v-item-group>
              </v-container>
            </v-card-text>
          </v-card>
        </v-expand-x-transition>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="px-0 pt-0">
          <v-sheet
            class="mx-auto"
            elevation="0"
            style="background: transparent;"
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
                  class="ma-4 rounded-lg "
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
                    <div style="width:100%">
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
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      expand2: false,
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
      selected: [],
    };
  },
  methods: {
    ...mapActions(["toggleMusicPlayer"]),
    formatAsTime(time) {
      return `${Math.floor(time / 60)} : ${("0" + Math.floor(time % 60)).slice(
        -2
      )}`;
    },
    playSong(song, index) {
      console.log({ song, index });
    },
    showPlaylist() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        this.expand2 = !this.expand2;
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
    currentSong: function(newValue) {
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
        this.expand2 = true;
      }, 500);
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
