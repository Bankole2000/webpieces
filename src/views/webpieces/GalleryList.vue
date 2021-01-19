<template>
  <div class="gallery-list">
    <v-row class="px-0">
      <v-col
        cols="12"
        class="mb-4 d-flex align-stretch"
        sm="6"
        lg="4"
        v-for="(webpiece, i) in webpieces"
        :key="i"
      >
        <WebpieceCard :webpiece="webpiece" />
      </v-col>
      <!-- <v-col cols="12" class="mb-4" sm="4" v-for="n in 4" :key="n">
        <WebpieceCard />
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
import WebpieceCard from "@/components/blocks/WebpieceCard";
import webpieces from "@/utils/webpieces.json";

export default {
  components: {
    WebpieceCard
  },
  data() {
    return {
      webpieces
    };
  }
};
</script>

<style></style>
