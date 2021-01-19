<template>
  <div class="technologies">
    <h1
      class="display-2 font-weight-light"
      :class="$vuetify.breakpoint.mdAndUp ? 'mx-8' : ''"
    >
      Technologies
      <span class="text-h5 font-weight-light" v-if="$vuetify.breakpoint.mdAndUp"
        >(Stuff I work with and use)</span
      >
    </h1>
    <div
      class=" mt-8"
      style="height: 5px; width: 100%; background-image: var(--rainbow); box-shadow: var(--glass-shadow-normal)"
    ></div>
    <v-card class="my-4">
      <v-card-title class="indigo white--text headline">
        User Directory
      </v-card-title>
      <v-row class="pa-4" justify="space-between">
        <v-col
          cols="12"
          sm="5"
          :order="$vuetify.breakpoint.mdAndUp ? '' : 'last'"
        >
          <v-treeview
            rounded
            :active.sync="activeTech"
            open-on-click
            return-object
            transition
            hoverable
            activatable
            :items="technologies"
          >
            <template v-slot:prepend="{ item, active }">
              <v-icon :color="active ? 'accent' : ''">{{ item.icon }}</v-icon>
              <!-- {{ active }} -->
            </template>
          </v-treeview>
          <v-treeview
            :active.sync="active"
            :items="items"
            :load-children="fetchUsers"
            :open.sync="open"
            activatable
            color="warning"
            open-on-click
            transition
          >
            <template v-slot:prepend="{ item, active }">
              <v-icon v-if="!item.children">mdi-account</v-icon>
              {{ active }}
            </template>
          </v-treeview>
        </v-col>

        <v-divider vertical></v-divider>

        <v-col
          class="d-flex text-center"
          offset-sm="-6"
          :order="$vuetify.breakpoint.mdAndUp ? '' : 'first'"
        >
          <v-scroll-y-transition mode="out-in">
            <div
              v-if="!selectedTech"
              class="title grey--text text--lighten-1 font-weight-light"
              style="align-self: center; justify-content: center; width: 100%;"
            >
              Select a Technology
            </div>
            <!-- <div v-else class="d-flex align-center"> -->
            <v-card flat v-else class="ma-auto text-center" style="width: 80%;">
              <!-- <v-card-title class="primary lighten-2">
              </v-card-title> -->
              <v-card-text class="pt-4">
                <v-avatar tile size="180" class="ma-4">
                  <v-img
                    contain
                    :src="
                      require(`@/assets/images/techImages/${selectedTech.image}`)
                    "
                  ></v-img>
                </v-avatar>
                <div
                  class="d-flex align-center justify-center"
                  style="width: 100%"
                >
                  <v-icon size="36">{{ selectedTech.icon }}</v-icon>
                  <p class="mb-0 display-1 text-capitalize">
                    {{ selectedTech.name }}
                  </p>
                </div>
              </v-card-text>
              Technology Selected {{ selectedTech }}
            </v-card>
            <!-- </div> -->
          </v-scroll-y-transition>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
const avatars = [
  "?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban",
  "?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun",
  "?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong",
  "?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair",
  "?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly"
];

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  data: () => ({
    activeTech: [],
    active: [],

    avatar: null,
    open: [],
    users: [],
    technologies: [
      {
        id: 1,
        name: "My Home Setup",
        icon: "mdi-home-account",
        children: [
          {
            id: 2,
            name: "My Laptop",
            icon: "mdi-laptop-windows",
            image: "zbook.png",
            children: []
          },
          {
            id: 23,
            name: "My Software",
            icon: "mdi-package",
            children: [
              {
                id: 24,
                name: "VS Code",
                icon: "mdi-microsoft-visual-studio-code"
              },
              {
                id: 25,
                name: "Cmder",
                icon: "mdi-console"
              },
              {
                id: 26,
                name: ""
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Front End Technologies",
        icon: "mdi-monitor-dashboard",
        children: [
          {
            id: 27,
            name: "Languages / Basics",
            icon: "mdi-translate",
            children: [
              {
                id: 28,
                name: "HTML",
                icon: "mdi-language-html5",
                image: "html.svg"
              },
              {
                id: 29,
                name: "CSS",
                icon: "mdi-language-css3",
                image: "css.svg"
              },
              {
                id: 30,
                name: "Javascript (ES6)",
                icon: "mdi-language-javascript",
                image: "es6.svg"
              },
              {
                id: 31,
                name: "SASS",
                icon: "mdi-sass"
              }
            ]
          },
          {
            id: 4,
            name: "Frameworks",
            icon: "mdi-arrange-bring-to-front",
            children: [
              {
                id: 5,
                name: "Vue Js",
                icon: "mdi-vuejs",
                image: "vuejs.svg"
              },
              {
                id: 6,
                name: "Angular 2",
                icon: "mdi-angular",
                image: "angular.svg"
              },
              {
                id: 7,
                name: "React",
                icon: "mdi-react",
                image: "react.svg"
              }
            ]
          },
          {
            id: 8,
            name: "Libraries",
            icon: "mdi-ruler-square-compass",
            children: [
              {
                id: 9,
                name: "Vuetify",
                icon: "mdi-vuetify",
                image: "vuetify.svg"
              },
              {
                id: 10,
                name: "Angular Material",
                icon: "mdi-material-design",
                image: "angularmaterial.png"
              },
              {
                id: 11,
                name: "JQuery",
                icon: "mdi-jquery"
              },
              {
                id: 12,
                name: "Material UI",
                icon: "mdi-material-ui"
              },
              {
                id: 13,
                name: "Materialize CSS",
                icon: "mdi-note",
                image: "materialize.svg"
              },
              {
                id: 14,
                name: "Bootstrap",
                icon: "mdi-bootstrap",
                image: "bootstrap.svg"
              },
              {
                id: 15,
                name: "GSAP",
                icon: "mdi-animation-play",
                image: "greensock.png"
              }
            ]
          }
        ]
      },
      {
        id: 16,
        name: "Back End Technologies",
        icon: "mdi-server",
        children: [
          {
            id: 17,
            name: "Node js",
            icon: "mdi-nodejs",
            image: "nodejs.svg"
          },
          {
            id: 18,
            name: "PHP",
            icon: "mdi-language-php",
            image: "php.svg"
          },

          {
            id: 19,
            name: "MySQL",
            icon: "mdi-database-search",
            image: "mysql.svg"
          },
          {
            id: 20,
            name: "Firebase",
            icon: "mdi-firebase",
            image: "firebase.svg"
          },
          {
            id: 21,
            name: "Sequelize",
            icon: "mdi-cube",
            image: "sequelize.svg"
          },
          {
            id: 22,
            name: "Symfony",
            icon: "mdi-symfony",
            image: "symfony.png"
          }
        ]
      }
    ]
  }),

  computed: {
    items() {
      return [
        {
          name: "Users",
          children: this.users
        }
      ];
    },
    selectedTech() {
      if (!this.activeTech.length) return undefined;
      console.log({ activeTech: this.activeTech[0] });
      return this.activeTech[0];
    },
    selected() {
      if (!this.active.length) return undefined;

      const id = this.active[0];

      return this.users.find(user => user.id === id);
    }
  },

  watch: {
    selected: "randomAvatar",
    selectedTech: function() {
      console.log(this.activeTech[0]);
    }
  },

  methods: {
    async fetchUsers(item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      await pause(1500);

      return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => item.children.push(...json))
        .catch(err => console.warn(err));
    },
    randomAvatar() {
      this.avatar = avatars[Math.floor(Math.random() * avatars.length)];
    }
  }
};
</script>

<style></style>
