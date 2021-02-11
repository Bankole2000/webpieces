import Vue from "vue";
import Vuex from "vuex";
/* eslint-disable */
// @ts-ignore
import {config} from '../utils/config.js';
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
  },
  mutations: {
    showToast(state: any, payload) {
      for (const key in payload) {
        state.toast[key] = payload[key];
      }
      state.toast.icon = state.toast.icons[payload.sclass];
      state.toast.show = true;
    },
    getWebpieceRequests(state, payload){
      state.webpieceRequests = payload
    }, 
    deleteWebpieceRequest(state, payload){
      const requestIndex = state.webpieceRequests.map((request:any) => request.id ).indexOf(payload.id);
      console.log({requestIndex});
      state.webpieceRequests.splice(requestIndex,1);    
    },
  },
  actions: {
    showToast({ commit }, { sclass, message, timeout = 3000 }) {
      return new Promise(resolve => {
        commit("showToast", { sclass, message, timeout });
        resolve(true);
      });
    }, 
    async deleteWebpieceRequest({commit}, webpieceData){
      const res = await fetch(`${config.serverURL}/webpieces/${webpieceData.id}`, {
        method: 'DELETE', 
        headers: {
          "Content-type": "application/json",
        }, 
        body: JSON.stringify(webpieceData)
      })
      const data = res.json();

      commit('deleteWebpieceRequest', {id: webpieceData.id})
      return data;
    },
    async getWebpieceRequests ({commit}){
      const res = await fetch(`${config.serverURL}/webpieces`)
      const data = await res.json();
      commit('getWebpieceRequests', data.result.rows);
      return data
    },
    async postUpdateRequest ({commit}, {name, email, type, color, isDark, link}){
      console.log({name, email, type, color, isDark, link})
      const res = await fetch(`${config.serverURL}/updates`, {
        method: 'POST', 
        headers: {
          "Content-type": "application/json", 
        },
        body: JSON.stringify({name, email, type, color, isDark, link})
      })
      const data = await res.json();
      return data
    },
    async uploadWebpieceRequestImage ({commit}, {uploadedImage}) {
      const formData = new FormData();
      console.log({uploadedImage})
      formData.append('webpieceImage', uploadedImage);
      console.log(formData.get('webpieceImage'))
      const reqOptions = {
        method: 'POST', 
        body: formData
      }
      const res = await fetch(`${config.serverURL}/webpieces/images`, reqOptions)
      const data = await res.json();
      return data;
    },
    async postWebpieceRequest({commit}, webpieceData){
      const res = await fetch(`${config.serverURL}/webpieces`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(webpieceData)
      })
      
      const data = await res.json();
      console.log({data})
      return(data)
    }
  },
  getters: {
    toast(state) {
      return state.toast;
    },
    webpieceRequests(state){
      return state.webpieceRequests;
    }
  },
  modules: {}
});
