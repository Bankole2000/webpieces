<template>
  <v-card max-width="344" class="mx-auto">
    <v-list-item>
      <v-list-item-avatar color="primary">
        <v-icon color="white">mdi-puzzle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline"
          >{{ webpieceRequest.title }}
        </v-list-item-title>
        <v-list-item-subtitle class="font-weight-light"
          >Requested by
          <span style="font-weight: bold" class="primary--text">{{
            webpieceRequest.username
          }}</span></v-list-item-subtitle
        >
      </v-list-item-content>
      <v-list-item-action>
        <v-btn
          icon
          class="error--text"
          :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </v-list-item-action>
    </v-list-item>

    <v-img :src="webpieceRequest.imageUrl" height="194"></v-img>

    <v-card-text>
      {{ webpieceRequest.description }}
    </v-card-text>

    <v-card-actions>
      <!-- <v-btn text color="deep-purple accent-4">
        Read
      </v-btn>
      <v-btn text color="deep-purple accent-4">
        Bookmark
      </v-btn> -->
      <v-spacer></v-spacer>
      <v-btn
        color="secondary"
        :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
        v-if="userContactDetails.githubhandle"
        icon
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        color="#0265ba"
        :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
        v-if="userContactDetails.facebookhandle"
        icon
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn
        :color="light.warning"
        :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
        v-if="userContactDetails.email"
        icon
      >
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn
        :color="light.info"
        :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
        v-if="userContactDetails.twitterhandle"
        icon
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["webpieceRequest"],
  data() {
    return {
      light: {
        accent: "#9c27b0",
        primary: "#e91e63",
        error: "#FF0000",
        warning: "#FFB300",
        success: "#4CAF50",
        info: "#2196F3",
        purple: "#d500f9",
        green: "#00c853",
        blue: "#00b0ff",
        orange: "#ef6c00",
        red: "#ff0000"
      }
    };
  },
  computed: {
    userContactDetails() {
      return JSON.parse(this.webpieceRequest.userContactDetails);
    }
  }
};
</script>
