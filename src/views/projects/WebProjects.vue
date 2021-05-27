<template>
  <div class="web-projects">
    <h1
      class="display-2 font-weight-light"
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
      class="mt-8"
      style="
        height: 5px;
        width: 100%;
        background-image: var(--rainbow);
        box-shadow: var(--glass-shadow-normal);
      "
    ></div>
    <v-row class="mt-8 mb-10">
      <v-col cols="12" lg="8">
        <v-scroll-x-transition group>
          <div
            class="my-3 mb-5"
            v-for="(project, i) in filteredProjects"
            :key="i"
          >
            <ProjectCard :project="project" />
          </div>
          <!-- <div v-for="n in 6" class="my-3" :key="n">
            <SidewaysCard />
          </div> -->
        </v-scroll-x-transition>
      </v-col>
      <v-col cols="4" v-if="$vuetify.breakpoint.lgAndUp">
        <div
          id="filter"
          :ref="'filter'"
          :class="scrollPosition ? 'sticky' : 'mt-3'"
        >
          <v-card
            :class="scrollPosition ? 'mr-8 pb-4' : 'pb-4'"
            :style="{ minWidth: scrollPosition ? `${elementWidth}px` : '' }"
          >
            <v-card-title>
              <v-icon left>mdi-filter-variant</v-icon> Projects
              Filter</v-card-title
            >
            <v-card-subtitle
              >Filter Projects by technologies used</v-card-subtitle
            >
            <v-card-text>
              <!-- <v-select
                v-model="selectedTechnologies"
                :items="technologies"
                label="Filter Projects by Technologies"
                outlined
                @change="filterProjects"
                chips
                hide-details
                multiple
              ></v-select> -->
              <v-row class="mx-3" justify="space-evenly">
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="HTML"
                  value="HTML"
                ></v-checkbox>
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="CSS"
                  value="CSS"
                ></v-checkbox>
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="Javascript"
                  value="Javascript"
                ></v-checkbox>
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="Vue JS"
                  value="Vue JS"
                ></v-checkbox>

                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="Vuetify"
                  value="Vuetify"
                ></v-checkbox>
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="GraphQL"
                  value="GraphQL"
                ></v-checkbox>
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="Wordpress"
                  value="Wordpress"
                ></v-checkbox>
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="Bootstrap"
                  value="Bootstrap"
                ></v-checkbox>
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="Node JS"
                  value="Node JS"
                ></v-checkbox>
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="Firebase"
                  value="Firebase"
                ></v-checkbox>
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="React JS"
                  value="React JS"
                ></v-checkbox>
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="Angular"
                  value="Angular"
                ></v-checkbox>
                <v-checkbox
                  hide-details
                  class="mr-4"
                  v-model="selectedTechnologies"
                  label="Sass"
                  value="Sass"
                ></v-checkbox>
              </v-row>
            </v-card-text>
            <!-- <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                ><v-icon left>mdi-timer-sand</v-icon> Here's a button</v-btn
              >
            </v-card-actions> -->
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
    ProjectCard,
  },
  data() {
    return {
      scrollPosition: false,
      elementTop: null,
      elementWidth: null,
      projects: [],
      selectedTechnologies: [],
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Vue JS",
        "Vuetify",
        "GraphQL",
        "Wordpress",
        "Bootstrap",
        "Node JS",
        "Firebase",
        "React JS",
        "Angular",
        "Sass",
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (!this.selectedTechnologies.length) {
        return this.projects;
      }

      const filteredProjectsArray = [];
      const projectsObject = {};

      this.projects.forEach((project, i) => {
        projectsObject[project.name] = project;
      });
      const filteredProjectsCount = {};
      const allFilteredProjects = [];
      this.selectedTechnologies.forEach((tch) => {
        const projectsUsedTech = this.projects.filter((project) =>
          project.techUsed.includes(tch)
        );
        allFilteredProjects.push(...projectsUsedTech);
      });
      allFilteredProjects.forEach((project) => {
        if (!filteredProjectsCount[project.name]) {
          filteredProjectsCount[project.name] = 1;
        }
      });
      const filteredProjectNames = Object.keys(filteredProjectsCount);
      filteredProjectNames.forEach((projname) => {
        filteredProjectsArray.push(projectsObject[projname]);
      });
      return filteredProjectsArray;
      // return this.projects.filter((project) => {
      //   for (let i = 0; i < project.techUsed.length; i++) {
      //     if (techObject[project.techUsed[i]]) {
      //       return true;
      //     }
      //   }
      //   return false;
      // });
    },
  },
  methods: {
    updateScroll() {
      // this.scrollPosition = window.scrollY;
      // console.log({
      //   windowScroll: window.scrollY,
      //   elementWidth: this.elementWidth
      //   // elementTop: this.$refs.filter.getBoundingClientRect().top,
      // });
      // this.$refs.filter.getBoundingClientRect().top < 100
      //   ? (this.scrollPosition = true)
      //   : (this.scrollPosition = false);
      window.scrollY + 111 > 850
        ? (this.scrollPosition = true)
        : (this.scrollPosition = false);
    },
    filterProjects(e) {
      console.log({ e });
      console.log(this.filteredProjects);
    },
  },
  mounted() {
    this.projects = projects;
    if (this.$vuetify.breakpoint.lgAndUp) {
      console.log(this.$refs, window.scrollY);
      this.elementTop = this.$refs.filter.offsetTop;
      this.elementWidth = this.$refs.filter.offsetWidth;
      if (this.$vuetify.breakpoint.mdAndUp) {
        this.gsap.from("#header", {
          x: 200,
          opacity: 0,
          duration: 1.5,
        });
      }
      console.log(this.$refs.filter.getBoundingClientRect().top);
      window.addEventListener("scroll", this.updateScroll);
    }
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
