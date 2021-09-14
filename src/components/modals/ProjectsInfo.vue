<template>
  <v-dialog scrollable v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        v-if="false"
        large
        class="primary-glass-card rounded-xl text-capitalize px-2"
        ><v-icon left>mdi-help-circle-outline</v-icon> What do you mean?</v-btn
      >
    </template>

    <v-card class="rounded-xl">
      <v-card-title class="headline">
        <v-icon color="primary" class="mr-4">mdi-help-circle-outline</v-icon>

        What do you mean ?
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
        style="width: 100%; height: 2px"
      ></div>

      <v-card-text class="py-4 px-5" style="max-height: 300px">
        <v-alert type="info"
          >This Website itself is still under development</v-alert
        >
        <p class="pa-0 ma-0">
          When it comes to <strong>webdevelopment</strong> and
          <strong>programming in general</strong>, there is
          <strong><em>A LOT</em></strong> to learn - Principles, concepts,
          languages, frameworks, tools, technologies, workflows... the list goes
          on and on <strong><em>and is still growing.</em></strong>
        </p>
        <br />
        <p class="ma-0 mt-n2">
          This was one of the biggest challenges for me when I first started
          learning HTML, all the way back in the late 2000s.
        </p>
        <p class="ma-0 mt-1">
          Nevertheless, I've continued to grow and keep learning all these
          years. As well as trying to build things.
        </p>
        <br class="mt-2" />
        <p>
          The projects you see in the list below are only a small portion of
          what the whole learning/building process has been for me, but I hope
          you, dear viewer/reader, find them satisfactory enough to demonstrate
          not only my skills and capabilites, but also my passion for the craft
          (and for learning), and also my ability to deliver on whatever your
          particular needs might be.
        </p>

        <!-- <v-btn
          block
          x-large
          :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
          ><v-icon left>mdi-account-plus</v-icon> Hire me</v-btn
        > -->
        <p class="ma-0">
          Thanks for reading this... here's a random cat for you 😅
        </p>
        <v-img
          :src="`https://cataas.com/cat/cute/says/thank you?size=60&color=${$vuetify.theme.themes.dark.primary}`"
          max-width="80%"
          class="mx-auto mt-4"
          contain
          alt=""
        />
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
    };
  },
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
