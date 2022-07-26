import Vue from "vue";
import Vuex from "vuex";
/* eslint-disable */
// @ts-ignore
import { config } from '../utils/config.js';
/* eslint-enable */
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toast: {
      sclass: "",
      message: "",
      show: false,
      timeout: -1,
      icons: {
        success: "mdi-check",
        warning: "mdi-alert",
        error: "mdi-window-close",
        info: "mdi-information"
      },
      icon: ""
    },
    webpieceRequests: [],
    musicPlayer: {
      show: true,
      isPlaying: false,
      ref: null,
      songIndex: 0
    },
    currentPlaylist: null,
    currentSong: null,
    currentSongTime: {
      currentTime: 0,
      duration: 1
    }
  },
  mutations: {
    showToast(state: any, payload) {
      for (const key in payload) {
        state.toast[key] = payload[key];
      }
      state.toast.icon = state.toast.icons[payload.sclass];
      state.toast.show = true;
    },
    getWebpieceRequests(state, payload) {
      state.webpieceRequests = payload;
    },
    updateWebpieceRequest(state, payload) {
      const webpiece = state.webpieceRequests.find((webpieceRequest: any) => {
        return webpieceRequest.id == payload.id;
      });
      console.log({ webpiece });
      webpiece.upvotes = payload.upvotes;
    },
    deleteWebpieceRequest(state, payload) {
      const requestIndex = state.webpieceRequests
        .map((request: any) => request.id)
        .indexOf(payload.id);
      console.log({ requestIndex });
      state.webpieceRequests.splice(requestIndex, 1);
    },
    toggleMusicPlayer({ musicPlayer }, payload) {
      musicPlayer.show = payload;
    },
    toggleIsPlaying(state, payload) {
      state.musicPlayer.isPlaying = payload;
    },
    setCurrentPlaylist(state, payload) {
      state.currentPlaylist = payload;
    },
    setCurrentSong(state, payload) {
      state.currentSong = payload;
    },
    updateCurrentSongTime(state, payload) {
      state.currentSongTime = { ...payload };
    },
    setMusicPlayer(state, payload) {
      console.log({ payload });
      state.musicPlayer.ref = payload;
    },
    setSongIndex(state, payload) {
      state.musicPlayer.songIndex = payload;
    }
  },
  actions: {
    showToast({ commit }, { sclass, message, timeout = 3000 }) {
      return new Promise(resolve => {
        commit("showToast", { sclass, message, timeout });
        resolve(true);
      });
    },
    async deleteWebpieceRequest({ commit }, webpieceData) {
      const res = await fetch(
        `${config.serverURL}/webpieces/${webpieceData.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(webpieceData)
        }
      );
      const data = res.json();

      commit("deleteWebpieceRequest", { id: webpieceData.id });
      return data;
    },
    async getWebpieceRequests({ commit }) {
      const res = await fetch(`${config.serverURL}/webpieces`);
      const data = await res.json();
      if (data.result.rows.length > 0) {
        data.result.rows.forEach((webpieceRequest: any) => {
          webpieceRequest.upvotes = JSON.parse(webpieceRequest.upvotes);
        });
      }
      commit("getWebpieceRequests", data.result.rows);
      return data;
    },
    async updateWebpieceRequest({ commit }, payload) {
      console.log({ payload });
      const res = await fetch(`${config.serverURL}/webpieces/${payload.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = res.json();
      commit("updateWebpieceRequest", payload);
      return data;
    },
    async postUpdateRequest(
      { commit },
      { name, email, type, color, isDark, link }
    ) {
      console.log({ name, email, type, color, isDark, link, commit });
      const res = await fetch(`${config.serverURL}/updates`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ name, email, type, color, isDark, link })
      });
      const data = await res.json();
      return data;
    },
    async uploadWebpieceRequestImage({ commit }, { uploadedImage }) {
      const formData = new FormData();
      console.log({ uploadedImage });
      formData.append("webpieceImage", uploadedImage);
      console.log(formData.get("webpieceImage"));
      const reqOptions = {
        method: "POST",
        body: formData
      };
      const res = await fetch(
        `${config.serverURL}/webpieces/images`,
        reqOptions
      );
      const data = await res.json();
      return data;
    },
    async postWebpieceRequest({ commit }, webpieceData) {
      const res = await fetch(`${config.serverURL}/webpieces`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(webpieceData)
      });

      const data = await res.json();
      console.log({ data });
      return data;
    },
    toggleMusicPlayer({ commit }, payload) {
      console.log({ payload });
      commit("toggleMusicPlayer", payload);
    },
    toggleIsPlaying({ commit }, payload) {
      commit("toggleIsPlaying", payload);
    },
    async setCurrentPlaylist({ commit }, payload) {
      commit("setCurrentPlaylist", payload);
    },
    async setCurrentSong({ commit }, payload) {
      commit("setCurrentSong", payload);
    }
  },
  getters: {
    toast(state) {
      return state.toast;
    },
    webpieceRequests(state) {
      return state.webpieceRequests;
    },
    musicPlayer(state) {
      return state.musicPlayer;
    },
    currentPlaylist(state) {
      return state.currentPlaylist;
    },
    currentSong(state) {
      return state.currentSong;
    },
    currentSongTime(state) {
      return state.currentSongTime;
    }
  },
  modules: {}
});
