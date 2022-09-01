<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="rounded-lg"
      :style="{
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.3s ease',
      }"
      :elevation="hover ? 12 : 2"
    >
      <div class="d-flex flex-no-wrap justify-start">
        <v-avatar tile class="rounded-bl-lg rounded-tl-lg" size="150">
          <v-img
            class="mr-4"
            :src="require(`@/assets/images/wishlist/${item.image}`)"
            width="200"
            height="300"
            contain
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-avatar>
        <div class="d-flex flex-column justify-start px-2 pt-2">
          <p class="text-h6 mb-0">{{ item.title }}</p>
          <p class="text-caption mb-0" v-if="$vuetify.breakpoint.mdAndUp">
            {{ item.longDesc }} - ${{ item.price }}
          </p>
          <small class="text-caption mb-0" v-else
            >{{ item.shortDesc }} - ${{ item.price }}</small
          >
          <v-spacer></v-spacer>
          <!-- <p class="subtitle mb-0">&#8358;50k</p> -->
          <div class="d-flex mb-2">
            <v-btn
              @click="viewInfo"
              class="text-capitalize ml-n2"
              color="secondary"
              :icon="$vuetify.breakpoint.smAndDown"
              text
            >
              <span v-if="!$vuetify.breakpoint.smAndDown"> Info </span>
              <v-icon :right="!$vuetify.breakpoint.smAndDown"
                >mdi-information</v-icon
              ></v-btn
            >
            <v-btn
              @click="share"
              class="text-capitalize mr-2 ml-n2"
              :icon="$vuetify.breakpoint.smAndDown"
              color="secondary"
              text
              ><span v-if="!$vuetify.breakpoint.smAndDown"> Share </span>
              <v-icon :right="!$vuetify.breakpoint.smAndDown"
                >mdi-share-variant</v-icon
              ></v-btn
            >

            <v-btn @click="gift" class="text-capitalize info"
              >Gift <v-icon right>mdi-gift</v-icon></v-btn
            >
          </div>
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    share() {
      this.$emit("view", this.item);
      console.log("View", { item: this.item });
      const title = `It's Banky's Birthday! - Could you get a gift for Him? He would like ${this.item.gift}, and has it on his wishlist`;
      const url = window.document.location;
      if (navigator.share) {
        navigator
          .share({
            title,
            url,
          })
          .then((ev) => {
            console.log("Shared", { ev });
          })
          .catch((e) => {
            console.log({ e });
          });
      } else {
        console.log("No Navigator sharing on device");
      }
    },
    gift() {
      console.log("Gift", { item: this.gift });
      const message = encodeURIComponent(
        `Happy Birthday Banky! I would like to get you ${this.item.gift} as a birthday gift.`
      );
      window.open(`https://wa.me/+2348069166906?text=${message}`, "_blank");
    },
    viewInfo() {
      window.open(`${this.item.link}`, "_blank");
    },
  },
};
</script>

<style>
</style>