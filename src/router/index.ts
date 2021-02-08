import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "@/views/Projects.vue";
import Webpieces from "@/views/WebPieces.vue";
import WebProjects from "@/views/projects/WebProjects.vue";

import VuetifyAlerts from "@/components/webpieces/vuetify/elements/alerts/All.vue";
import SplitScreen from "@/components/webpieces/vanilla/splitscreen/All.vue";
import MyProcess from "@/views/projects/MyProcess.vue";
import Technologies from "@/views/projects/Technologies.vue";
import RequestPiece from "@/views/webpieces/RequestPiece.vue";
import Gallery from "@/views/webpieces/Gallery.vue";
import GalleryList from "@/views/webpieces/GalleryList.vue";
import Queue from "@/views/webpieces/WebpieceQueue.vue";
import Test from "../views/Test.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/webpieces",
    component: Webpieces,
    meta: {
      title: "Web pieces"
    },
    children: [
      {
        path: "",
        component: Gallery,
        children: [
          {
            path: "",
            name: "Web Pieces",
            component: GalleryList,
            meta: {
              title: "Web pieces"
            }
          },
          {
            path: "vanilla/splitscreen",
            name: "Split Screen Hover Effect",
            component: SplitScreen,
            meta: {
              title: "Web piece - SplitScreen"
            }
          },
          {
            path: "vuetify/alerts",

            name: "Vuetify Alerts",
            component: VuetifyAlerts,
            meta: {
              title: "Web piece - Vuetify Alerts"
            }
          }
        ]
      },
      {
        path: "add",
        component: RequestPiece,
        meta: {
          title: "Add A Web piece"
        }
      },
      {
        path: "queue",
        component: Queue,
        meta: {
          title: "Web piece requests"
        }
      }
    ]
  },
  {
    path: "/projects",
    component: Projects,
    children: [
      {
        path: "",
        name: "Projects",
        component: WebProjects,
        meta: {
          title: "Projects"
        }
      },
      {
        path: "technologies",
        component: Technologies,
        meta: {
          title: "Technologies"
        }
      },
      {
        path: "myprocess",
        component: MyProcess,
        meta: {
          title: "My Process"
        }
      }
    ]
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/about",
    name: "About Me",
    component: About,
    meta: {
      title: "About Me"
    }
  },
  {
    path: "/history",
    name: "History",
    component: Test
  },
  {
    path: "/clients",
    beforeEnter() {
      location.href = "https://projects.banky.studio";
    }
  },
  {
    path: "/blog",
    beforeEnter() {
      location.href = "https://blog.banky.studio";
    }
  },
  {
    path: "/linkedin",
    beforeEnter() {
      location.href = "https://www.linkedin.com/in/bankoleesan";
    }
  },
  {
    path: "/resume",
    beforeEnter() {
      location.href = "https://bankole2000.github.io/portfolio/resume.pdf";
    }
  },
  {
    path: "/github",
    beforeEnter() {
      location.href = "https://github.com/Bankole2000";
    }
  },
  {
    path: "/github",
    beforeEnter() {
      location.href = "https://github.com/Bankole2000";
    }
  },
  {
    path: "/hire",
    beforeEnter() {
      location.href = "https://bankole2000.github.io/portfolio/resume.pdf";
    }
  },
  {
    path: "/sourcerer",
    beforeEnter() {
      location.href = "https://sourcerer.io/bankole2000";
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
