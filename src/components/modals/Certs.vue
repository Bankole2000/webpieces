<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        class="ma-2 rounded-lg"
        block
        v-on="on"
        large
        :color="dialog ? 'primary' : ''"
        :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
        ><v-icon left>mdi-seal</v-icon> Certs</v-btn
      >
    </template>

    <v-card class="rounded-xl">
      <v-card-title class="headline">
        <v-icon color="primary" class="mr-4">mdi-seal</v-icon>

        My Certificates
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

      <v-card-text class="pa-4">
        <v-alert text type="info"
          ><strong>Coming Soon</strong>. Working on adding them here. You can
          still
          <a
            class="secondary--text"
            href="https://www.linkedin.com/in/bankoleesan/"
            >view on LinkedIn</a
          >
          if you wish.</v-alert
        >
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
