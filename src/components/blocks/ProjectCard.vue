<template>
  <div class="side-ways">
    <v-card
      class="mx-auto"
      style="width: 100%;"
      v-if="$vuetify.breakpoint.smAndUp"
    >
      <div style="width: 100%;" class="d-flex flex-no-wrap justify-start">
        <!-- <v-avatar class="ma-0" size="192" tile> -->
        <div style="flex: 2;">
          <v-img
            :aspect-ratio="1864 / 1400"
            :src="require(`@/assets/images/projectImages/${project.image}`)"
          ></v-img>
        </div>
        <!-- </v-avatar> -->

        <div style="flex: 3" class="d-flex flex-column ml-4">
          <v-card-title class="headline">{{ project.name }}</v-card-title>

          <v-card-subtitle>{{ project.shortDescription }}</v-card-subtitle>
          <v-spacer></v-spacer>
          <v-card-text class="pb-1">
            <v-tooltip top v-for="(tech, i) in project.technologies" :key="i">
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  :color="$vuetify.theme.dark ? '#1e1e1e' : 'white'"
                  v-on="on"
                  v-bind="attrs"
                  class="px-1 mr-1"
                  :text-color="
                    colors[tech.split('-')[tech.split('-').length - 1]]
                  "
                >
                  <v-icon>{{ tech }}</v-icon>
                </v-chip>
                <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on">Top</v-btn> -->
              </template>
              <span class="text-capitalize">{{
                tech.split("-")[tech.split("-").length - 1]
              }}</span>
            </v-tooltip>
          </v-card-text>

          <div class="d-flex">
            <v-btn
              :disabled="!project.githubUrl"
              class="mb-4 ml-4"
              :href="project.githubUrl"
              target="_blank"
              :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
              ><v-icon left>mdi-github</v-icon>Github</v-btn
            >
            <v-btn
              :disabled="!project.projectUrl"
              :href="project.projectUrl"
              target="_blank"
              class="mb-4 ml-4"
              :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
              ><v-icon left>mdi-open-in-new</v-icon>Project</v-btn
            >
            <v-btn
              class="mb-4 ml-4"
              @click="dialog = true"
              :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
              ><v-icon left>mdi-notebook-plus-outline</v-icon>Notes</v-btn
            >
          </div>
        </div>
        <!-- <div class="d-flex flex-column"></div> -->
      </div>
    </v-card>
    <v-card v-else class="mb-8">
      <v-img
        :aspect-ratio="1864 / 1400"
        :src="require(`@/assets/images/projectImages/${project.image}`)"
      ></v-img>
      <div
        style="background-image: var(--rainbow); height: 2px; width: 100%;"
      ></div>
      <v-card-title>
        {{ project.name }}
      </v-card-title>
      <v-card-subtitle>{{ project.shortDescription }}</v-card-subtitle>
      <v-card-text class="pb-1">
        <v-tooltip top v-for="(tech, i) in project.technologies" :key="i">
          <template v-slot:activator="{ on, attrs }">
            <v-chip
              :color="$vuetify.theme.dark ? '#1e1e1e' : 'white'"
              v-on="on"
              v-bind="attrs"
              class="px-1 mr-1"
              :text-color="colors[tech.split('-')[tech.split('-').length - 1]]"
            >
              <v-icon>{{ tech }}</v-icon>
            </v-chip>
            <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on">Top</v-btn> -->
          </template>
          <span class="text-capitalize">{{
            tech.split("-")[tech.split("-").length - 1]
          }}</span>
        </v-tooltip>
      </v-card-text>

      <v-card-actions>
        <v-btn
          :disabled="!project.githubUrl"
          class="mb-4 ml-4"
          icon
          :href="project.githubUrl"
          target="_blank"
          :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
          ><v-icon>mdi-github</v-icon></v-btn
        >
        <v-btn
          :disabled="!project.projectUrl"
          :href="project.projectUrl"
          target="_blank"
          icon
          class="mb-4 ml-4"
          :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
          ><v-icon>mdi-open-in-new</v-icon></v-btn
        >
        <v-btn
          class="mb-4 ml-4"
          icon
          @click="dialog = true"
          :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
          ><v-icon>mdi-notebook-plus-outline</v-icon></v-btn
        >
      </v-card-actions>
    </v-card>
    <v-dialog
      :fullscreen="$vuetify.breakpoint.smAndDown"
      v-model="dialog"
      max-width="500"
      scrollable
    >
      <!-- <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="ml-2 mb-2"
              :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
              v-bind="attrs"
              v-on="on"
            >
              View Webpice
            </v-btn>
          </template> -->

      <v-card
        :tile="$vuetify.breakpoint.smAndDown"
        :class="$vuetify.breakpoint.smAndDown ? '' : 'rounded-lg'"
      >
        <v-img
          :height="$vuetify.breakpoint.smAndDown ? 0 : 250"
          class="align-end"
          style="position: relative"
          :gradient="
            `to top, ${$vuetify.theme.dark ? '#121212FF' : '#F5F5F5FF'}, ${
              $vuetify.theme.dark ? '#12121200' : '#F5F5F500'
            }`
          "
          :src="require(`@/assets/images/projectImages/${project.image}`)"
        >
          <v-btn
            text
            @click="dialog = false"
            large
            icon
            style="position: absolute; top: 10px; right: 10px;"
            ><v-icon>mdi-close-circle</v-icon></v-btn
          >
          <v-card-title class="headline font-weight-light">
            <span class="font-weight-black">{{ project.name }}</span>
          </v-card-title></v-img
        >
        <div
          :class="$vuetify.theme.dark ? 'rainbow-dark' : 'rainbow'"
          style="width: 100%; height: 2px;"
        ></div>

        <v-card-text class="px-4 pt-4" style="max-height: 60%; ">
          <p class="ma-0 mb-2">
            <strong>Project Url: </strong><a>{{ project.projectUrl }}</a>
          </p>
          <p class="ma-0 mb-2">
            <strong>Github Url: </strong><a>{{ project.githubUrl }}</a>
          </p>
          <p class="ma-0 mb-2"><strong>Status: </strong>Not yet deployed</p>
          <p class="ma-0 mb-2">
            <strong>Client: </strong>Self (Personal Project)
          </p>
          <p class="ma-0 mb-2">
            <strong>Description: </strong>Not yet deployed
          </p>
          <p class="ma-0 mb-2">
            <strong>Requirements: </strong>Not yet deployed
          </p>
          <p class="ma-0"><strong>Learning Points: </strong>Not yet deployed</p>
          <div class="ma-0 mb-2">
            <ul>
              <li>Firebase Cloud Firestore</li>
            </ul>
          </div>
          <p class="ma-0 mb-2"><strong>Challenges: </strong>Not yet deployed</p>
          <p class="ma-0 mb-2">
            <strong>Useful Or Related Resources: </strong>Not yet deployed
          </p>
          {{ project.longDescription }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      colors: {
        firebase: "#FFCA28",
        html5: "#F16529",
        css3: "#2965f1",
        javascript: "#F0DB4F",
        vuejs: "#41B883",
        bootstrap: "#602C50",
        python: "#FFD43B",
        sass: "#cc6699",
        wordpress: "#00749C",
        php: "#474A8A",
        react: "#61DBFB",
        nodejs: "#3C873A",
        vuetify: "#1775d0",
        angular: "#B52E31"
      },
      dialog: false
    };
  },
  mounted() {
    // console.log(this.project);
  }
};
</script>

<style scoped>
/* "technologies": [
      "mdi-firebase",
      "mdi-language-html5",
      "mdi-language-css3",
      "mdi-language-javascript",
      "mdi-vuejs",
      "mdi-vuetify",
      "mdi-bootstrap",
      "mdi-language-python",
      "mdi-sass",
      "mdi-wordpress",
      "mdi-language-php",
      "mdi-react",
      "mdi-nodejs",
      "mdi-microsoft-windows",
      "mdi-ubuntu",
      "mdi-apple"
    ], */
.morph {
  box-shadow: 5px 5px 5px #dadada, -5px -5px 5px #ffffff !important;
}

.glass-card {
  transition: all 0.3s;
  border-top: 1px solid #ffffff88;
  border-left: 1px solid #ffffff88;
  backdrop-filter: blur(3px);
  /* border-radius: 15px; */
  box-shadow: 3px 3px 4.5px rgba(0, 0, 0, 0.5);
  background: #25252510 !important;
}

.glass-card[disabled] {
  box-shadow: none;
  border: none;
}

.glass-panel {
  transition: all 0.3s;
  border-top: 1px solid #ffffff88;
  border-left: 1px solid #ffffff88;
  backdrop-filter: blur(3px);
  /* border-radius: 15px; */
  box-shadow: 3px 3px 4.5px rgba(0, 0, 0, 0.5);
  background: #25252510 !important;
}

.morph:hover {
  box-shadow: inset 5px 5px 5px #dadada, inset -5px -5px 5px #ffffff !important;
}

.morph-dark {
  box-shadow: 3px 3px 3px #000000, -3px -3px 3px #252525 !important;
}

.morph-dark:hover {
  box-shadow: inset 3px 5px 5px #000000, inset -3px -5px 5px #252525 !important;
}

.rainbow {
  background-image: linear-gradient(
    to right,
    #101010 0%,
    #101010 14.2857%,
    #ff0000 1%,
    #ff0000 28.5714%,
    #ffb300 2%,
    #ffb300 42.8571%,
    #4caf50 3%,
    #4caf50 57.1429%,
    #2196f3 4%,
    #2196f3 71.4286%,
    #e91e63 5%,
    #e91e63 85.7143%,
    #9c27b0 6%,
    #9c27b0 100%
  );
}

.rainbow-dark {
  background-image: linear-gradient(
    to right,
    #efefef 0%,
    #efefef 14.2857%,
    #ff0000 1%,
    #ff0000 28.5714%,
    #ffb300 2%,
    #ffb300 42.8571%,
    #4caf50 3%,
    #4caf50 57.1429%,
    #2196f3 4%,
    #2196f3 71.4286%,
    #e91e63 5%,
    #e91e63 85.7143%,
    #9c27b0 6%,
    #9c27b0 100%
  );
}
</style>
