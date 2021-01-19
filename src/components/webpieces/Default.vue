<template>
  <v-container>
    <v-btn x-large text :class="$vuetify.theme.dark ? 'glass-card' : 'primary-glass-card'" to="/webpieces"
      ><v-icon left>mdi-arrow-left-bold</v-icon> Back to Gallery</v-btn
    >
    <v-card class="mx-auto my-6 px-0" outlined elevation="0">
      <v-card-title class=" grey lighten-4">
        Alerts with Border
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="borderAlert.showCode = !borderAlert.showCode"
              text
              class="text--primary"
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
        <v-sheet v-if="borderAlert.showCode" tile>
          <v-card-title tile class="py-2 grey darken-3">
            <v-btn text class="white--text" rounded @click="window = 0">Template</v-btn>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  class="white--text"
                  v-bind="attrs"
                  v-on="on"
                  @mouseleave="tooltipText = 'Copy Code'"
                  @click="copy(borderAlert.template)"
                >
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn>
              </template>
              <span>{{ tooltipText }}</span>
            </v-tooltip>
          </v-card-title>
          <v-card max-height="300" elevation="0" tile style="overflow-y: scroll; overflow-x:auto;">
            <v-window>
              <v-window-item>
                <highlightjs language="html" :code="borderAlert.template" class=" my-0"></highlightjs>
              </v-window-item>
            </v-window>
          </v-card>
        </v-sheet>
      </v-expand-transition>
      <v-container>
        <!-- <Border /> Component Here -->
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Border from './Border';

export default {
  components: {
    Border,
  },
  data() {
    return {
      borderAlert: {
        template: `<template>
  <div>
    <v-alert border="top" color="red lighten-2" dark>
      I'm an alert with a top border and red color
    </v-alert>
    <v-alert border="right" color="blue-grey" dark>
      I'm an alert with a right border and blue-grey color
    </v-alert>
    <v-alert border="bottom" color="pink darken-1" dark>
      I'm an alert with a bottom border and pink color
    </v-alert>
    <v-alert border="left" color="indigo" dark>
      I'm an alert with a border left type info
    </v-alert>
  </div>
</template>`,
        showCode: false,
      },
    };
  },
  methods: {
    copy(text) {
      this.$copyText(text).then(
        (e) => {
          this.tooltipText = 'Copied!';
          console.log(`copied`, e);
        },
        (e) => {
          console.log(`could not copy`, e);
        }
      );
    },
  },
};
</script>

<style></style>
