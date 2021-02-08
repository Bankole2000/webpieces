<template>
  <div class="queue">
    <h1
      class=" display-2 font-weight-light"
      :class="$vuetify.breakpoint.mdAndUp ? 'mx-8' : ''"
    >
      {{ $vuetify.breakpoint.mdAndUp ? "Request Queue" : "Requests" }}
      <span class="text-h5 font-weight-light" v-if="$vuetify.breakpoint.mdAndUp"
        >(Upcoming webpieces)</span
      >
    </h1>
    <div
      class=" mt-8 mb-8"
      style="height: 5px; width: 100%; background-image: var(--rainbow); box-shadow: var(--glass-shadow-normal)"
    ></div>
    <v-container>
      <v-row>
        <v-col
          v-for="(request, i) in webpieceRequests"
          :key="i"
          cols="12"
          sm="4"
        >
          <WebpieceRequestCard :webpieceRequest="request" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import WebpieceRequestCard from "../../components/blocks/RequestCard";
export default {
  components: {
    WebpieceRequestCard
  },
  data() {
    return {
      webpieceRequests: null
    };
  },
  methods: {
    ...mapActions(["getWebpieceRequests"])
  },
  mounted() {
    this.getWebpieceRequests().then((data) => {
      console.log(data);
      this.webpieceRequests = data.result.rows;
    });
  }
};
</script>

<style></style>
