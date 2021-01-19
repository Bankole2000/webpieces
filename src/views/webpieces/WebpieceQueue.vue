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
      class=" mt-8"
      style="height: 5px; width: 100%; background-image: var(--rainbow); box-shadow: var(--glass-shadow-normal)"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
