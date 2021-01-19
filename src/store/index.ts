import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toast: {
      sclass: '',
      message: '',
      show: false,
      timeout: -1,
      icons: {
        success: 'mdi-check',
        warning: 'mdi-alert',
        error: 'mdi-window-close',
        info: 'mdi-information',
      },
      icon: '',
    },
  },
  mutations: {
    showToast(state: any, payload) {
      for (const key in payload) {
        state.toast[key] = payload[key];
      }
      state.toast.icon = state.toast.icons[payload.sclass];
      state.toast.show = true;
    },
  },
  actions: {
    showToast({ commit }, { sclass, message, timeout = 2000 }) {
      return new Promise((resolve) => {
        commit('showToast', { sclass, message, timeout });
        resolve();
      });
    },
  },
  getters: {
    toast(state) {
      return state.toast;
    },
  },
  modules: {},
});
