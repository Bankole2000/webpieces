<template>
  <div class="test">
    <h4>Test Route</h4>
    <v-btn @click="toggleDarkMode()">Toggle Dark mode</v-btn>
    <v-btn color="primary" class="white--text" @click="changePrimaryColor()"
      >Change Primary Color</v-btn
    >
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    changePrimaryColor() {
      this.$vuetify.theme.themes.dark.primary = "#00FF00";
      this.$vuetify.theme.themes.light.primary = "#00FF00";
      // this.$vuetify.theme.currentTheme.primary = "#00FF00";

      console.log({ primaryColor: this.$vuetify.theme.currentTheme.primary });
    }
  },
  mounted() {
    console.log("Test");
  }
};
</script>

<style></style>
