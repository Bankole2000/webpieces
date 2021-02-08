<template>
  <div class="text-center">
    <v-dialog scrollable v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          large
          class="glass-card rounded-xl white--text text-capitalize"
          ><v-icon left>mdi-help-circle-outline</v-icon> What is this
          place?</v-btn
        >
      </template>

      <v-card class="rounded-xl">
        <v-card-title class="headline">
          <v-icon color="primary" class="mr-4">mdi-help-circle-outline</v-icon>
          What is this place?
          <v-spacer></v-spacer>
          <v-btn
            :class="$vuetify.theme.dark ? 'morph-dark' : 'morph'"
            icon
            @click="dialog = false"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-card-title>
        <div
          :class="$vuetify.theme.dark ? 'rainbow-dark' : 'rainbow'"
          style="width: 100%; height: 2px;"
        ></div>

        <v-card-text class="pt-4">
          <p class="text-h6 font-weight-light secondary--text">
            I like to think of it as own little corner of the web. Here's what
            you can find on here :-
          </p>
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(link, i) in modalLinks" :key="i">
              <v-expansion-panel-header>
                <template v-slot:default="{ open }">
                  <p class="text-h6 font-weight-light mb-0">
                    <v-icon class="mb-1" :class="open ? 'primary--text' : ''">{{
                      link.icon
                    }}</v-icon>
                    {{ link.title }}
                  </p>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pb-0">
                <div
                  class="mb-2"
                  :class="$vuetify.theme.dark ? 'rainbow-dark' : 'rainbow'"
                  style="width: 100%; height: 2px;"
                ></div>
                {{ link.content }}
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    :to="link.to"
                    :target="
                      ['/blog', '/clients'].includes(link.to) ? '_blank' : ''
                    "
                    block
                    :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
                  >
                    Go
                    <v-icon right>mdi-arrow-right-bold</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :class="$vuetify.theme.dark ? 'glass-card' : 'morph'"
            text
            class="success--text text-lowercase rounded-lg"
            @click="dialog = false"
          >
            <v-icon left>mdi-check</v-icon>
            Ok, got it
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      modalLinks: [
        {
          to: "/about",
          title: "Info About me",
          icon: "mdi-card-account-details",
          content:
            "My Skills, Experience, Certifications, Projects, Resume, etc"
        },
        {
          to: "/webpieces",
          title: "Web Pieces",
          icon: "mdi-puzzle",
          content:
            "A collaboratively maintained collection of web components and pieces of web interfaces. Also the name of my upcoming Youtube tutorial series where I code these pieces from scratch"
        },
        {
          to: "/projects",
          icon: "mdi-briefcase",
          title: "My Projects",
          content:
            "Overview and details of some projects I've done/I'm currently working on."
        },
        {
          to: "/blog",
          title: "My Blog",
          icon: "mdi-notebook-edit-outline",
          content:
            "A personal blog I keep for writing about coding, webdev, music, gaming, some social stuff, and my experiences/interests in general"
        },
        {
          to: "/clients",
          title: "My Client Platform",
          icon: "mdi-handshake",
          content:
            "A Leantime Agile dev platform where I maintain client projects"
        }
        // {
        //   to: "/hire",
        //   title: "Hire Me 💼🙋‍♂️",
        //   icon: "mdi-account-hard-hat",
        //   content:
        //     "I'm currently actively looking for Remote fulltime/partime and freelance work"
        // }
      ]
    };
  }
};
</script>
<style scoped>
.morph {
  box-shadow: 5px 5px 5px #dadada, -5px -5px 5px #ffffff !important;
}

.glass-card {
  transition: all 0.3s;
  border-top: 1px solid #ffffff88;
  border-left: 1px solid #ffffff88;
  backdrop-filter: blur(3px);
  /* border-radius: 15px; */
  box-shadow: 3px 3px 4.5px rgba(0, 0, 0, 0.5);
  background: #25252510 !important;
}

.glass-card[disabled] {
  box-shadow: none;
  border: none;
}

.glass-panel {
  transition: all 0.3s;
  border-top: 1px solid #ffffff88;
  border-left: 1px solid #ffffff88;
  backdrop-filter: blur(3px);
  /* border-radius: 15px; */
  box-shadow: 3px 3px 4.5px rgba(0, 0, 0, 0.5);
  background: #25252510 !important;
}

.morph:hover {
  box-shadow: inset 5px 5px 5px #dadada, inset -5px -5px 5px #ffffff !important;
}

.morph-dark {
  box-shadow: 3px 3px 3px #000000, -3px -3px 3px #252525 !important;
}

.morph-dark:hover {
  box-shadow: inset 3px 5px 5px #000000, inset -3px -5px 5px #252525 !important;
}

.rainbow {
  background-image: linear-gradient(
    to right,
    #101010 0%,
    #101010 14.2857%,
    #ff0000 1%,
    #ff0000 28.5714%,
    #ffb300 2%,
    #ffb300 42.8571%,
    #4caf50 3%,
    #4caf50 57.1429%,
    #2196f3 4%,
    #2196f3 71.4286%,
    #e91e63 5%,
    #e91e63 85.7143%,
    #9c27b0 6%,
    #9c27b0 100%
  );
}

.rainbow-dark {
  background-image: linear-gradient(
    to right,
    #efefef 0%,
    #efefef 14.2857%,
    #ff0000 1%,
    #ff0000 28.5714%,
    #ffb300 2%,
    #ffb300 42.8571%,
    #4caf50 3%,
    #4caf50 57.1429%,
    #2196f3 4%,
    #2196f3 71.4286%,
    #e91e63 5%,
    #e91e63 85.7143%,
    #9c27b0 6%,
    #9c27b0 100%
  );
}
</style>
