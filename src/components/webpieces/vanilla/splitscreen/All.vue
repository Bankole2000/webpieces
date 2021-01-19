<template>
  <v-container>
    <p class="display-1 font-weight-light ">{{ $route.name }}</p>
    <v-btn
      v-if="$vuetify.breakpoint.smAndDown"
      text
      class="mr-16 text-capitalize"
      to="/webpieces"
      ><v-icon left>mdi-arrow-left-bold</v-icon> Back to Gallery</v-btn
    >
    <v-card-title v-else class="pl-0">
      <v-btn text class="mr-16 text-capitalize" to="/webpieces"
        ><v-icon left>mdi-arrow-left-bold</v-icon> Back to Gallery</v-btn
      >
      Click/tap
      <v-btn
        icon
        :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
        class="mx-2"
      >
        <v-icon>mdi-code-tags</v-icon>
      </v-btn>
      to view the code. Then click/tap
      <v-btn
        icon
        :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
        class="mx-2"
      >
        <v-icon>mdi-content-copy</v-icon>
      </v-btn>
      to copy to clipboard
    </v-card-title>
    <v-card class="mx-auto my-6 px-0" outlined elevation="0">
      <v-card-title class="info">
        Split Screen Hover Effect
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="splitscreen.showCode = !splitscreen.showCode"
              text
              class="glass-card"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-code-tags</v-icon>
            </v-btn>
          </template>
          <span>View Code</span>
        </v-tooltip>
      </v-card-title>
      <v-expand-transition>
        <v-sheet v-if="splitscreen.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn
              text
              class="white--text"
              rounded
              @click="splitscreen.window = 0"
              >Html</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="splitscreen.window = 1"
              >CSS</v-btn
            >
            <v-btn
              text
              class="white--text"
              rounded
              @click="splitscreen.window = 2"
              >JS</v-btn
            >
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  class="glass-card"
                  v-bind="attrs"
                  v-on="on"
                  @mouseleave="tooltipText = 'Copy Code'"
                  @click="
                    copy(splitscreen.html + splitscreen.css + splitscreen.js)
                  "
                >
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn>
              </template>
              <span>{{ tooltipText }}</span>
            </v-tooltip>
          </v-card-title>
          <v-card
            max-height="300"
            elevation="0"
            tile
            style="overflow-y: scroll; overflow-x:auto;"
          >
            <v-window v-model="splitscreen.window">
              <v-window-item>
                <highlightjs
                  language="html"
                  :code="splitscreen.html"
                  class=" my-0"
                ></highlightjs>
              </v-window-item>
              <v-window-item>
                <highlightjs
                  language="css"
                  class=" my-0"
                  :code="splitscreen.css"
                ></highlightjs>
              </v-window-item>
              <v-window-item>
                <highlightjs
                  language="js"
                  class=" my-0"
                  :code="splitscreen.js"
                ></highlightjs>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <SplitScreen />
      </v-container>
    </v-card>
    <div class="d-flex">
      <v-btn
        class="text-capitalize"
        text
        :disabled="!previous"
        :to="`/webpieces/${previous}`"
        ><v-icon left>mdi-arrow-left</v-icon>Previous
        <span v-if="$vuetify.breakpoint.mdAndUp">Webpiece</span></v-btn
      >
      <v-spacer></v-spacer>
      <v-btn
        class="text-capitalize"
        text
        :disabled="!next"
        :to="`/webpieces/${next}`"
        >Next <span v-if="$vuetify.breakpoint.mdAndUp">Webpiece</span
        ><v-icon right>mdi-arrow-right</v-icon></v-btn
      >
    </div>
  </v-container>
</template>

<script>
import SplitScreen from "./SplitScreen.vue";
import { mapActions } from "vuex";

export default {
  components: {
    SplitScreen
  },
  data() {
    return {
      previous: null,
      next: null,
      splitscreen: {
        html: `<template>
  <v-card>
    <section id="wrapper" class="skewed">
      <div class="layer bottom">
        <div class="content-wrap">
          <div class="content-body">
            <h1>Look Sharp</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id ipsa accusamus quae neque
              tempora a, possimus, quibusdam nam totam omnis deserunt et dignissimos alias ab incidunt eveniet
              voluptate.
            </p>
          </div>
          <img :src="require('@/assets/images/webpieces/splitscreen/pc1.webp')" />
        </div>
      </div>
      <div class="layer top">
        <div class="content-wrap">
          <div class="content-body">
            <h1>Stay Cool</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id ipsa accusamus quae neque
              tempora a, possimus, quibusdam nam totam omnis deserunt et dignissimos alias ab incidunt eveniet
              voluptate.
            </p>
          </div>
          <img :src="require('@/assets/images/webpieces/splitscreen/pc2.webp')" />
        </div>
      </div>
      <div class="handle"></div>
    </section>
  </v-card>
</template>`,
        css: `<style scoped>
body {
  margin: 0;
  padding: 0;
  font-size: 100%;
  line-height: 1.6;
  font-family: Arial, Helvetica, sans-serif;
}

#wrapper {
  position: relative;
  width: 100%;
  min-height: 55vw;
  overflow: hidden;
}

.layer {
  position: absolute;
  width: 100vw;
  min-height: 55vw;
  overflow: hidden;
}

.layer .content-wrap {
  position: absolute;
  width: 100vw;
  min-height: 55vw;
}

.layer .content-body {
  width: 25%;
  position: absolute;
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
  color: white;
}

.layer img {
  position: absolute;
  width: 35%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.layer h1 {
  font-size: 2em;
}

.bottom {
  background-color: #222;
  z-index: 1;
}

.bottom .content-body {
  right: 5%;
}

.bottom h1 {
  color: #fdab00;
}

.top {
  z-index: 2;
  background-color: #eee;
  color: #222;
  width: 50vw;
}

.top .content-body {
  left: 5%;
  color: #222;
}

.handle {
  position: absolute;
  height: 200%;
  display: block;
  background-color: #fdab00;
  width: 8px;
  top: 0;
  left: 50%;
  z-index: 3;
}

.skewed .handle {
  top: 50%;
  /* background-color: #fdab00; */
  transform: rotate(30deg) translateY(-50%);
  height: 200%;
  /* overflow: hidden; */
  transform-origin: top;
}

.skewed .top {
  transform: skew(-30deg);
  margin-left: -1000px;
  width: calc(50vw + 1000px);
}

.skewed .top .content-wrap {
  transform: skew(30deg);
  margin-left: 1000px;
}
</style>
`,
        js: `<script>
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('#wrapper');
  const topLayer = wrapper.querySelector('.top');
  const handle = wrapper.querySelector('.handle');
  let skew = 0,
    delta = 0;

  if (wrapper.className.indexOf('skewed') != -1) {
    skew = 1000;
  }

  wrapper.addEventListener('mousemove', (e) => {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = \`\${e.clientX + delta}px\`;
    topLayer.style.width = \`\${e.clientX + skew + delta}px\`;
  });
});
</scrpt>`,

        showCode: false,
        window: 0
      },
      tooltipText: "Copy Code"
    };
  },
  methods: {
    ...mapActions(["showToast"]),
    copy(text) {
      this.$copyText(text).then(
        e => {
          this.tooltipText = "Copied!";
          console.log(`copied`, e);
          this.showToast({
            sclass: "success",
            message: "Copied to Clipboard",
            timeout: 2000
          });
        },
        e => {
          console.log(`could not copy`, e);
          this.showToast({
            sclass: "error",
            message: "Error - Could not copy",
            timeout: 2000
          });
        }
      );
    }
  },
  mounted() {
    const webpieceRoutes = this.$router.options.routes[1].children[0].children;
    const currentPath = this.$route.path.replace("/webpieces/", "");

    const currentPathIndex = webpieceRoutes.findIndex(route => {
      return route.path == currentPath;
    });
    console.log({ currentPathIndex, currentPath });
    if (currentPathIndex < webpieceRoutes.length - 1) {
      this.next = webpieceRoutes[currentPathIndex + 1].path;
    }
    if (currentPathIndex > 1) {
      this.previous = webpieceRoutes[currentPathIndex - 1].path;
    }

    console.log({ next: this.next, previous: this.previous });
  }
};
</script>

<style></style>
