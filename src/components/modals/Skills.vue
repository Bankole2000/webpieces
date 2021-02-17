<template>
  <v-dialog
    :fullscreen="$vuetify.breakpoint.smAndDown"
    v-model="dialog"
    scrollable
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        class="ma-2 rounded-lg"
        block
        :color="dialog ? 'primary' : ''"
        v-on="on"
        large
        :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
        ><v-icon left>mdi-account-hard-hat</v-icon> Skills</v-btn
      >
    </template>

    <v-card
      :tile="$vuetify.breakpoint.smAndDown"
      :class="$vuetify.breakpoint.smAndDown ? '' : 'rounded-lg'"
    >
      <v-card-title class="headline">
        <v-icon color="primary" class="mr-4">mdi-account-hard-hat</v-icon>

        My Skills
        <v-spacer></v-spacer>
        <v-btn
          :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
          icon
          @click="dialog = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </v-card-title>
      <div
        :class="$vuetify.theme.dark ? 'rainbow-dark' : 'rainbow'"
        style="width: 100%; height: 2px;"
      ></div>

      <v-card-text
        class="pr-4 py-0 pl-0"
        :style="{ maxHeight: $vuetify.breakpoint.mdAndUp ? '390px' : '' }"
      >
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(item, i) in skills"
            :key="i"
            :icon="item.icon"
            class="pb-2"
            fill-dot
          >
            <div class="pb-0 mt-n2">
              <!-- <h2 class="headline font-weight-light mb-0 primary--text">
                  Currently watching
                </h2> -->
              <v-expansion-panels flat>
                <v-expansion-panel class="pl-0">
                  <v-expansion-panel-header class="pl-0">
                    <h2
                      class="headline font-weight-light mb-0"
                      :class="
                        $vuetify.theme.dark
                          ? 'secondary--text'
                          : 'primary--text'
                      "
                    >
                      {{ item.title }}
                    </h2></v-expansion-panel-header
                  >
                  <v-expansion-panel-content class="pl-0 contently">
                    <div class="ma-0 pa-0" v-if="item.list">
                      <div
                        class="mb-4 pa-0 d-flex align-center"
                        v-for="(listItem, j) in item.list"
                        :key="j"
                      >
                        <v-icon>{{ listItem.icon }}</v-icon>
                        <h2 class="ma-0 ml-4 pa-0 font-weight-light">
                          {{ listItem.title }}
                        </h2>
                        <!-- <v-img :src="require('@/assets/images/about.svg')" /> -->

                        <!-- <p class="ma-0 mt-1 pa-0">
                          {{ listItem.description }}
                        </p> -->
                      </div>
                      <div v-if="item.comment">{{ item.comment }}</div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
          class="success--text text-lowercase rounded-lg"
          text
          @click="dialog = false"
        >
          <v-icon left>mdi-check</v-icon>
          Ok, got it
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      skills: [
        {
          title: "Programming Languages",
          icon: "mdi-book-open-page-variant",
          list: [
            {
              title: "PHP",
              name: "php",
              icon: "mdi-language-php"
            },
            {
              title: "Javascript - ES6",
              name: "js",
              icon: "mdi-language-javascript"
            },
            {
              title: "Typescript",
              name: "ts",
              icon: "mdi-language-typescript"
            },
            {
              title: "Python",
              name: "python",
              icon: "mdi-language-python"
            }
          ]
        },
        {
          title: "Front End",
          icon: "mdi-responsive",
          list: [
            {
              title: "HTML 5",
              name: "html",
              icon: "mdi-language-html5"
            },
            {
              title: "CSS 3",
              name: "css",
              icon: "mdi-language-css3"
            },
            {
              title: "Javascript - ES6",
              name: "js",
              icon: "mdi-language-javascript"
            },
            {
              title: "BootStrap",
              name: "bootstrap",
              icon: "mdi-bootstrap"
            },
            {
              title: "Materialize CSS",
              name: "materialize",
              icon: "mdi-material-design"
            },
            {
              title: "Sass",
              name: "sass",
              icon: "mdi-sass"
            },
            {
              title: "Vue JS",
              name: "vuejs",
              icon: "mdi-vuejs"
            },
            {
              title: "Vuetify",
              name: "vuetify",
              icon: "mdi-vuetify"
            },
            {
              title: "Angular + Angular Material",
              name: "angular",
              icon: "mdi-angular"
            },
            {
              title: "React",
              name: "react",
              icon: "mdi-react"
            },
            {
              title: "Material UI",
              name: "materialUi",
              icon: "mdi-material-ui"
            }
          ],
          comment: ""
        },
        {
          title: "Back End",
          icon: "mdi-api",
          list: [
            {
              title: "Node + Express",
              name: "node",
              icon: "mdi-nodejs"
            },
            {
              title: "Symfony",
              name: "symfony",
              icon: "mdi-symfony"
            },
            {
              title: "PHP",
              name: "php",
              icon: "mdi-language-php"
            },
            {
              title: "Django",
              name: "django",
              icon: "mdi-language-python"
            },
            {
              title: "Flask",
              name: "flask",
              icon: "mdi-language-python"
            }
          ],
          comment: ""
        },

        {
          title: "Databases",
          icon: "mdi-database"
        },
        {
          title: "Hosting Platforms",
          icon: "mdi-server"
        },
        {
          title: "Version Control",
          icon: "mdi-vector-selection"
        },
        {
          title: "Content Management",
          icon: "mdi-folder-cog"
        },
        {
          title: "Graphic Design",

          icon: "mdi-palette"
        }
      ]
    };
  }
};
</script>

<style scoped>
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
</style>
