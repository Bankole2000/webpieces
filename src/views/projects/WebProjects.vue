<template>
  <div class="web-projects">
    <h1
      class=" display-2 font-weight-light"
      :class="$vuetify.breakpoint.mdAndUp ? 'mx-8' : ''"
    >
      Web Projects
      <small
        v-if="$vuetify.breakpoint.mdAndUp"
        class="text-h5 font-weight-light"
        >(Some things I've built)</small
      >
    </h1>
    <div
      class=" mt-8"
      style="height: 5px; width: 100%; background-image: var(--rainbow); box-shadow: var(--glass-shadow-normal)"
    ></div>
    <v-row class="mt-8">
      <v-col cols="12" lg="8">
        <div class="my-3" v-for="(project, i) in projects" :key="i">
          <ProjectCard :project="project" />
        </div>
        <!-- <div v-for="n in 6" class="my-3" :key="n">
            <SidewaysCard />
          </div> -->
      </v-col>
      <v-col cols="4" v-if="$vuetify.breakpoint.lgAndUp">
        <div
          id="filter"
          :ref="'filter'"
          :class="scrollPosition ? 'sticky' : 'mt-3'"
        >
          <v-card
            :style="{ minWidth: scrollPosition ? `${elementWidth}px` : '' }"
          >
            <v-card-title>
              Here's a title
            </v-card-title>
            <v-card-text>
              Here's some text
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                ><v-icon left>mdi-timer-sand</v-icon> Here's a button</v-btn
              >
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import projects from "@/utils/projects.json";
import ProjectCard from "@/components/blocks/ProjectCard";

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      scrollPosition: false,
      elementTop: null,
      elementWidth: null,
      projects
    };
  },
  methods: {
    updateScroll() {
      // this.scrollPosition = window.scrollY;
      console.log({
        windowScroll: window.scrollY,
        elementWidth: this.elementWidth
        // elementTop: this.$refs.filter.getBoundingClientRect().top,
      });
      // this.$refs.filter.getBoundingClientRect().top < 100
      //   ? (this.scrollPosition = true)
      //   : (this.scrollPosition = false);
      window.scrollY + 111 > 850
        ? (this.scrollPosition = true)
        : (this.scrollPosition = false);
    }
  },
  mounted() {
    if (this.$vuetify.breakpoint.lgAndUp) {
      console.log(this.$refs, window.scrollY);
      this.elementTop = this.$refs.filter.offsetTop;
      this.elementWidth = this.$refs.filter.offsetWidth;
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.gsap.from("#header", {
          x: 200,
          opacity: 0,
          duration: 1.5
        });
      }
      console.log(this.$refs.filter.getBoundingClientRect().top);
      window.addEventListener("scroll", this.updateScroll);
    }
  }
};
</script>

<style scoped>
.sticky {
  position: fixed;
  top: 99px;
  /* width: 100%; */
}
</style>
