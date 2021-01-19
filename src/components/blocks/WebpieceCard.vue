<template>
  <!-- <div class="webpiece-card"> -->
  <v-card class="glass-card mx-auto" max-width="344">
    <v-img :src="require(`@/assets/images/webpieces/galleryImages/${webpiece.image}`)" height="200px">
      <div v-if="webpiece.isUpdate" class="d-flex align-end justify-end">
        <v-chip class="ma-4" color="primary" text-color="white" label>
          <v-icon left>mdi-alert-decagram</v-icon>
          New
        </v-chip>
      </div>
    </v-img>
    <v-card-title class="pb-0">
      {{ webpiece.name ? webpiece.name : 'Webpiece name' }}
    </v-card-title>
    <v-card-text class="mb-12">
      <v-chip-group column active-class="primary--text">
        <v-chip v-for="tag in webpiece.tags" :key="tag">
          {{ tag }}
        </v-chip>
      </v-chip-group>
      <p>{{ webpiece.description }}</p>
      <v-spacer></v-spacer>
    </v-card-text>
    <v-card-actions style="position: absolute; bottom: 0; ">
      <v-btn :to="webpiece.route" :class="$vuetify.theme.dark ? 'glass-card' : 'morph'">View webpiece</v-btn>
    </v-card-actions>
  </v-card>
  <!-- </div> -->
</template>

<script>
export default {
  props: ['webpiece'],
  data() {
    return {};
  },
  mounted() {
    console.log(this.webpiece);
  },
};
</script>

<style></style>
