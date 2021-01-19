<template>
  <!-- <div class="youtube-modal"> -->
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="error"
        :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
        class="ma-2"
        icon
        large
        v-bind="attrs"
        v-on="on"
      >
        <v-icon size="32">mdi-youtube</v-icon>
      </v-btn>
    </template>

    <v-card class="rounded-xl">
      <v-card-title class="headline secondary--text">
        <v-icon color="error" size="32" class="mr-4">mdi-youtube</v-icon> YouTube
        <v-spacer></v-spacer>
        <v-btn :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'" icon @click="dialog = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </v-card-title>
      <div :class="$vuetify.theme.dark ? 'rainbow-dark' : 'rainbow'" style="width: 100%; height: 2px;"></div>

      <v-card-text>
        Thanks for you interest in my youtube channel
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="rounded-lg"
          :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
          @click="dialog = false"
        >
          I accept
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {},
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
