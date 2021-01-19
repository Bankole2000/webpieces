<template>
  <div class="myprocess">
    <h1
      class=" display-2 font-weight-light"
      :class="$vuetify.breakpoint.mdAndUp ? 'mx-8' : ''"
    >
      My Process
      <span class="text-h5 font-weight-light" v-if="$vuetify.breakpoint.mdAndUp"
        >(How I approach projects)</span
      >
    </h1>
    <div
      class=" mt-8"
      style="height: 5px; width: 100%; background-image: var(--rainbow); box-shadow: var(--glass-shadow-normal)"
    ></div>
    <v-row>
      <v-col cols="12">
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card :color="item.color" dark>
              <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
              <v-card-text class="white text--primary">
                <p>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                  scaevola imperdiet nec ut, sed euismod convenire principes at.
                  Est et nobis iisque percipit, an vim zril disputando
                  voluptatibus, vix an salutandi sententiae.
                </p>
                <v-btn :color="item.color" class="mx-0" outlined>
                  Button
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          color: "red lighten-2",
          icon: "mdi-star"
        },
        {
          color: "purple darken-1",
          icon: "mdi-book-variant"
        },
        {
          color: "green lighten-1",
          icon: "mdi-airballoon"
        },
        {
          color: "indigo",
          icon: "mdi-buffer"
        }
      ]
    };
  }
};
</script>

<style></style>
