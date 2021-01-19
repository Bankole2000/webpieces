<template>
  <div class="side-ways">
    <v-card
      class="mx-auto"
      style="width: 100%;"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <div style="width: 100%;" class="d-flex flex-no-wrap justify-start">
        <v-avatar class="ma-0" size="192" tile>
          <v-img
            :src="require(`@/assets/images/projectImages/${project.image}`)"
          ></v-img>
        </v-avatar>

        <div class="d-flex flex-column ml-4">
          <v-card-title class="headline">{{ project.name }}</v-card-title>

          <v-card-subtitle>Project Details & info</v-card-subtitle>
          <v-spacer></v-spacer>
          <v-card-text class="pb-2">
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
        <div class="d-flex flex-column"></div>
      </div>
    </v-card>
    <v-card v-else class="mb-8">
      <v-img
        :src="require(`@/assets/images/projectImages/${project.image}`)"
      ></v-img>
      <div
        style="background-image: var(--rainbow); height: 2px; width: 100%;"
      ></div>
      <v-card-title>
        {{ project.name }}
      </v-card-title>
      <v-card-text>
        Here's some text
        <v-chip class="ma-2" close color="cyan" label text-color="white">
          <v-icon left>mdi-twitter</v-icon>
          New Tweets
        </v-chip>
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
    <v-dialog v-model="dialog" max-width="500" scrollable>
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

      <v-card tile>
        <v-card-title class="headline primary lighten-2">
          Web Piece - <span class="font-weight-black">Web piece Name</span>
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
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
    console.log(this.project);
  }
};
</script>

<style></style>
