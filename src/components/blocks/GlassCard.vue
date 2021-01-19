<template>
  <div>
    <v-card class="mx-auto glass-card my-2 rounded-lg" max-width="400">
      <v-img
        class="white--text align-end ma-2 rounded-sm"
        aspect-ratio="1"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Project Name</v-card-title>
      </v-img>

      <v-card-subtitle class="py-0">Number 10</v-card-subtitle>

      <v-card-text class="text--primary py-0">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday</div>
        <v-divider class="mt-2 mb-1"></v-divider>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text>
          <v-icon left>mdi-github</v-icon>
          Github
        </v-btn>

        <v-btn text>
          <v-icon left>mdi-eye</v-icon>
          Project
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
