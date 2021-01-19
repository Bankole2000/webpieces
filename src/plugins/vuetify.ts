import Vue from 'vue';
// import Vuetify from "vuetify/lib/framework";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        secondary: '#101010',
        accent: '#9c27b0',
        primary: '#e91e63',
        error: '#FF0000',
        warning: '#FFB300',
        success: '#4CAF50',
        info: '#2196F3',
      },
      dark: {
        secondary: '#EFEFEF',
        accent: '#9c27b0',
        primary: '#e91e63',
        error: '#FF0000',
        warning: '#FFB300',
        success: '#4CAF50',
        info: '#2196F3',
      },
    },
  },
});
