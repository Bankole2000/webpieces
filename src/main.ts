import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { Draggable } from 'gsap/Draggable';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import VueClipboard from 'vue-clipboard2';

gsap.registerPlugin(CSSRulePlugin, Draggable, TextPlugin, ScrollToPlugin, ScrollTrigger);

Vue.mixin({
  created: function() {
    /* eslint-disable */
    // @ts-ignore
    this.gsap = gsap;
    /* eslint-enable */
  },
});

import hljs from 'highlight.js';
// import 'highlight.js/styles/github.css';
import 'highlight.js/styles/kimbie.dark.css';
Vue.use(hljs.vuePlugin);

// import VueHighlightJS from 'vue-highlight.js';

// import javascript from 'highlight.js/lib/languages/javascript';
// import scss from 'highlight.js/lib/languages/scss';
// import xml from 'highlight.js/lib/languages/xml';

// import 'highlight.js/styles/dracula.css';
// import 'vue-highlight.js/lib/allLanguages';

// Vue.use(VueHighlightJS);

Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
