<template>
  <div class="wishlist">
    <div
      style="width: 100%; height: 40vh"
      :style="{
        backgroundImage: `url(${require('@/assets/images/wishlist/birthday.webp')})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }"
    ></div>
    <div class="d-flex align-center justify-center" style="margin-top: -70px">
      <v-avatar
        size="150"
        style="transform: rotate(-20deg); border: 4px solid #fff"
        class="elevation-2"
      >
        <img :src="require('@/assets/images/dayprofile.jpg.webp')" />
      </v-avatar>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-center">👋 Hi! Thanks for visiting 🙂</h2>
          <h5 class="font-weight-light text-center">
            (PS - I really appreciate it)
          </h5>
          <div
            class="mt-4"
            style="
              height: 5px;
              width: 100%;
              border-radius: 10px;
              background-image: var(--rainbow);
              box-shadow: var(--glass-shadow-normal);
            "
          ></div>
          <div class="mt-4">
            <v-alert
              prominent
              dismissible
              color="secondary"
              text
              transition="scroll-y-reverse-transition"
            >
              <p>
                If you're reading this, that means it's my birthday🥳🎉, and
                you're also curious about what kinds of gifts🎁 I would like (or
                maybe even thinking about getting me something 🥺) - Either way,
                I really appreciate it - Thank you 💙.
              </p>
              <p class="mb-0">
                This is basically a wishlist of things I was already working on
                getting myself eventually. You really don't have to, but if you
                would like to get (or contribute towards) something that I would
                really appreciate, anything on this list would be perfect, thank
                you 🙇‍♂️🙏.
              </p>
            </v-alert>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p class="text-h5 mb-2">My Wishlist</p>
          <v-divider class="mb-4"></v-divider>
        </v-col>
      </v-row>
      <WishlistList />
      <div
        class="mt-4"
        style="
          height: 5px;
          width: 100%;
          border-radius: 10px;
          background-image: var(--rainbow);
          box-shadow: var(--glass-shadow-normal);
        "
      ></div>
      <v-row class="mb-16">
        <v-col cols="12">
          <v-alert color="secondary" text
            >🌟 Special thanks to Ms. Aguh for this idea, to all my friends and
            family for their compassion and kindness, and to you, for visiting,
            caring, and for whatever you can offer - It is deeply appreciated.
            Here's looking forward to a happy and fulfilling new year - Thank
            you 🙏🌟</v-alert
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import WishlistList from "@/components/blocks/WishlistList.vue";
export default {
  data() {
    return {
      wishlistItems: [
        {
          title: "A new laptop",
          description:
            "I've been using my old laptop for a while now, and it's starting to show it's age. I'd really appreciate a new laptop, so I can continue to do what I love to do.",
          link: "https://www.amazon.com/dp/B08J6F3D3Y/ref=cm_sw_em_r_mt_dp_U_3ZQ7FbZQZJZ1C",
        },
      ],
    };
  },
  components: { WishlistList },
};
</script>

<style>
</style>