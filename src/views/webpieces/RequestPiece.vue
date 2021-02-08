<template>
  <div class="request-piece">
    <h1
      class=" display-2 font-weight-light"
      :class="$vuetify.breakpoint.mdAndUp ? 'mx-8' : ''"
    >
      {{ $vuetify.breakpoint.mdAndUp ? "Add A Webpiece" : "Add" }}
      <span class="text-h5 font-weight-light" v-if="$vuetify.breakpoint.mdAndUp"
        >(web curiousities truly abound)</span
      >
    </h1>
    <div
      class=" mt-8"
      style="height: 5px; width: 100%; background-image: var(--rainbow); box-shadow: var(--glass-shadow-normal)"
    ></div>
    <v-container>
      <v-row class="mb-4">
        <p class="text-h5 font-weight-light mt-8 mx-4">
          Discovered a piece of the web you find interesting?
        </p>
        <p class="text-h5 font-weight-light mt-2 mx-4">
          Wish there was a tutorial about it? Want to build it/figure it out
          together?
        </p>
        <p class="text-h5 font-weight-light mt-2 mx-4">
          Tell me about it, let's see what we can do.
        </p>
      </v-row>
    </v-container>
    <fieldset
      style="padding: 20px; border-radius: 15px; border: 2px solid var(--primary)"
    >
      <legend style="padding: 0 10px;">Request a Webpiece</legend>

      <add-webpiece></add-webpiece>
    </fieldset>
  </div>
</template>

<script>
import AddWebpiece from "@/components/forms/AddWebpiece.vue";
export default {
  components: { AddWebpiece }
};
</script>

<style></style>
