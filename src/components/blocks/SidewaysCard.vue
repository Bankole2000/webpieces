<template>
  <div class="side-ways">
    <v-card class="mx-auto" style="width: 100%;">
      <div style="width: 100%;" class="d-flex flex-no-wrap justify-start">
        <v-avatar class="ma-0" size="180" color="grey" tile>
          <!-- <v-img :src="require(`@/assets/${item.src}`)"></v-img> -->
        </v-avatar>

        <div class="d-flex flex-column">
          <v-card-title class="headline">Project Title</v-card-title>

          <v-card-subtitle>Project Details & info</v-card-subtitle>
          <v-spacer></v-spacer>
          <div class="d-flex">
            <v-btn
              class="mb-4 ml-4"
              :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
              ><v-icon left>mdi-github</v-icon>Github</v-btn
            >
            <v-btn
              disabled
              class="mb-4 ml-4"
              :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
              ><v-icon left>mdi-open-in-new</v-icon>View Project</v-btn
            >
            <v-btn
              class="mb-4 ml-4"
              :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
              ><v-icon left>mdi-notebook-plus-outline</v-icon>Project
              Notes</v-btn
            >
          </div>
        </div>
        <div class="d-flex flex-column"></div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
