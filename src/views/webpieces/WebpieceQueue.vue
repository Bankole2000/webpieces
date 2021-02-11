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
      <v-row
        v-if="webpieceRequests.length < 1"
        style="height: 240px"
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col cols="6" v-if="fetching">
          <p class="text-center">Fetching Webpiece Requests</p>
          <v-progress-linear
            color="deep-purple accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
        <v-col v-else cols="6" style="d-flex justify-center">
          <p class="text-center">No Webpiece Requests Found</p>
          <div style="width: 100%; display: flex; justify-content: center;">
            <v-btn to="/webpieces/add"
              ><v-icon left>mdi-puzzle</v-icon> Request a webpiece</v-btn
            >
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(request, i) in webpieceRequests"
          :key="i"
          cols="12"
          sm="4"
        >
          <WebpieceRequestCard
            :webpieceRequest="request"
            @deleteById="deleteRequest($event)"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import WebpieceRequestCard from "../../components/blocks/RequestCard";
export default {
  components: {
    WebpieceRequestCard
  },
  data() {
    return {
      // webpieceRequests: null,
      fetching: true
    };
  },
  methods: {
    ...mapActions([
      "getWebpieceRequests",
      "deleteWebpieceRequest",
      "showToast"
    ]),
    deleteRequest(e) {
      console.log({ e });
      this.deleteWebpieceRequest(e).then((data) => {
        console.log({ data });
      });
      this.showToast({
        sclass: "success",
        message: `<span class="font-weight-bold success--text">Success: </span>Webpiece Request Deleted`
      });
    }
  },
  computed: {
    ...mapGetters(["webpieceRequests"])
  },
  mounted() {
    this.getWebpieceRequests().then((data) => {
      console.log(data);
      this.fetching = false;
      // this.webpieceRequests = data.result.rows;
    });
  }
};
</script>

<style></style>
