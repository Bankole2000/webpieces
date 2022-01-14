<template>
  <div class="myprocess">
    <h1
      class="display-2 font-weight-light"
      :class="$vuetify.breakpoint.mdAndUp ? 'mx-8' : ''"
    >
      My Process
      <span class="text-h5 font-weight-light" v-if="$vuetify.breakpoint.mdAndUp"
        >(How I approach projects)</span
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
    <v-row>
      <v-col cols="12">
        <v-timeline align-top dense>
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
          >
            <v-card :color="item.color" dark>
              <v-card-title class="title pb-2">{{ item.title }}</v-card-title>
              <v-card-text class="white black--text">
                <p v-html="item.text" class="py-4 mb-0"></p>
                <v-btn
                  :color="item.color"
                  class="mx-0 text-capitalize"
                  :href="item.link"
                  target="_blank"
                  outlined
                >
                  {{ item.linkText }}
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          color: "red lighten-2",
          icon: "mdi-sitemap",
          title: "Project Scoping and Requirements",
          text: "In this stage, I try to clarify what the <strong>project goals</strong> are with the client (if any), and determine <em>as clearly as possible</em> the <strong>functional and non-functional requirements</strong> to achieve those objectives. Here I also try to cover <strong>User Stories</strong>, <strong>Value propositions</strong>, and <strong>Business Models/Model Canvases</strong> (if any).",
          link: "",
          linkText: "More about project scoping",
        },
        {
          color: "orange darken-1",
          icon: "mdi-cogs",
          title: "System Design and Architecture",
          text: "After clarifying requirements, I select the best technologies most suitable for project execution to ensure we're working with the right tools. Here, I try to <strong>design the system architecture</strong> and <strong>simple work flows</strong> and <strong>UML/Component diagrams</strong> to develop a high-level overview of what the system would be. I also take scalability, reliability, security, and maintainability concerns into consideration in this step.",
          link: "",
          linkText: "More about System Design and Architecture",
        },
        {
          color: "green lighten-1",
          icon: "mdi-code-braces",
          title: "UI/UX Mockups, Database + API Design",
          text: "I like to work with <strong>UI/UX designers</strong> who make <strong>Styles Guides</strong> and <a>Story Books</a> for easy and straight-forward frontEnd implementation. And for the backend, in this step I begin determining the shape of the data required to execute the business logic and while leveraging the <em>strengths of selected technologies</em> to produce <strong>fully functional APIs</strong> to meet the needs of the application flow.",
          link: "",
          linkText: "More about Agile Development",
        },
        {
          color: "indigo",
          icon: "mdi-package-variant",
          title: "MVP Target, Iterative + Agile Development",
          text: "This involves working quickly to release <strong>early/beta versions</strong> of the project with the <em>most essential features</em> that the target audience can start using asap. Iterating on <strong>user/client feedback</strong> and <strong>prioritizing <em>in-demand</em> features and high-priority bugs</strong> as we push towards the earliest release of a <strong>finalized, mature product</strong>.",
          link: "",
          linkText: "More about Agile Development",
        },
        {
          color: "purple",
          icon: "mdi-update",
          title: "Deployment Pipelines, Testing + Maintenance",
          text: "This step is intertwined with the previous, but continues afterwards, setting up <strong>deployment pipelines</strong> and <strong>continuous integration</strong> for quick and easy updates + hotfixes. This also involves setting up <strong>automated tests, system analytics, monitoring and improving service availability/delivery metrics<strong> etc.",
          link: "",
          linkText: "More about Deployment Pipelines",
        },
      ],
    };
  },
};
</script>

<style></style>
