<template>
  <div class="about">
    <div style="position: relative">
      <Factory2 v-if="$vuetify.breakpoint.mdAndUp" id="factory" />
      <Factory v-else />
      <div
        style="position: absolute; top: 15%; left: 0; width: 100%"
        :style="{ top: $vuetify.breakpoint.lgAndUp ? '15%' : '0%' }"
      >
        <v-container>
          <v-row>
            <v-col cols="12" sm="7">
              <v-card class="glass-panel px-8 py-6 rounded-xl" id="header">
                <v-card-title
                  :class="$vuetify.breakpoint.mdAndDown ? 'pa-0' : ''"
                >
                  <p
                    class="display-1 font-weight-light"
                    :class="$vuetify.breakpoint.mdAndDown ? 'ml-4' : ''"
                  >
                    Projects
                  </p>
                </v-card-title>
                <div
                  class="mx-4 mt-n3"
                  style="
                    width: 95%;
                    height: 10px;
                    background-image: var(--rainbow);
                  "
                ></div>
                <v-card-text v-if="$vuetify.breakpoint.lgAndUp" class="pb-0">
                  <p
                    class="text-h5 font-weight-light"
                    style="line-height: 3rem"
                  >
                    As I continue to learn and grow as a developer, these are some of
                    the results of my endeavours so far...
                  </p>
                </v-card-text>
                <v-card-actions v-if="$vuetify.breakpoint.lgOnly" class="pt-0">
                  <v-spacer></v-spacer>
                  <ProjectsInfo />
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div
      id="headerTrigger"
      style="
        z-index: 1000;
        background-image: var(--primary-accent-gradient-horizontal);
        width: 100%;
        height: 10px;
        box-shadow: var(--glass-shadow-normal);
        margin-top: -7px;
      "
    ></div>
    <div :style="{ backgroundColor: $vuetify.theme.dark ? `` : '#f5f5f5' }">
      <v-container class="pt-8">
        <v-tabs grow class="mb-8" center-active show-arrows>
          <v-tab to="/projects" exact>Web Projects</v-tab>
          <v-tab to="/projects/technologies">Technologies</v-tab>
          <v-tab to="/projects/myprocess">My Process</v-tab>
        </v-tabs>
        <transition name="router-anim">
          <router-view></router-view>
        </transition>
        <!-- <h1 class=" display-2 font-weight-light mx-8">Web Projects</h1>
      <div
        class=" mt-8"
        style="height: 5px; width: 100%; background-image: var(--rainbow); box-shadow: var(--glass-shadow-normal)"
      ></div> -->
        <!-- <v-row class="mt-8"> -->
        <!-- <div class="mt-8" style="display: flex; position: relative;">
        <div style="width: 60%;">
          <div v-for="n in 2" :key="n">
            <SidewaysCard />
          </div>
        </div>
        <div style="width: 30%; position: fixed; top: 0; right: 0;">
          Sidebar
        </div>
      </div> -->
        <!-- </v-row> -->
        <!-- <v-row class="mt-8">
        <v-col cols="8">
          <div class="my-3" v-for="(project, i) in projects" :key="i">
            <ProjectCard :project="project" />
          </div> -->
        <!-- <div v-for="n in 6" class="my-3" :key="n">
            <SidewaysCard />
          </div> -->
        <!-- </v-col> -->
        <!-- <v-col cols="4">
          <div id="filter" :ref="'filter'" :class="scrollPosition ? 'sticky' : 'mt-3'">
            <v-card :style="{ minWidth: scrollPosition ? `${elementWidth}px` : '' }">
              <v-card-title>
                Here's a title
              </v-card-title>
              <v-card-text>
                Here's some text
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn><v-icon left>mdi-timer-sand</v-icon> Here's a button</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col> -->
        <!-- </v-row> -->
      </v-container>
    </div>
  </div>
</template>
<script>
// import GlassCard from '@/components/blocks/GlassCard';
// import projects from '@/utils/projects.json';
// import SidewaysCard from '@/components/blocks/SidewaysCard';
// import ProjectCard from '@/components/blocks/ProjectCard';
import Factory2 from "@/components/animated/Factory2.vue";
import Factory from "@/components/animated/Factory";
import ProjectsInfo from "@/components/modals/ProjectsInfo";
// import { gsap } from 'gsap';
// // import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
// // import { Draggable } from 'gsap/Draggable';
// // import { TextPlugin } from 'gsap/TextPlugin';
// // import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Factory from '@/components/animated/Factory.vue';

// gsap.registerPlugin(ScrollTrigger);
// document.addEventListener('DOMContentLoaded', (e) => {

// });

export default {
  components: {
    // GlassCard,
    // SidewaysCard,
    Factory2,
    Factory,
    ProjectsInfo,
    // ProjectCard,
    // Factory,
    // Factory2
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.sticky {
  position: fixed;
  top: 99px;
  /* width: 100%; */
}
</style>
