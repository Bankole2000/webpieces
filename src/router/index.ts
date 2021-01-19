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
    component: Home
  },
  {
    path: "/webpieces",
    component: Webpieces,
    children: [
      {
        path: "",
        component: Gallery,
        children: [
          {
            path: "",
            name: "Web Pieces",
            component: GalleryList
          },
          {
            path: "vanilla/splitscreen",
            name: "Split Screen Hover Effect",
            component: SplitScreen
          },
          {
            path: "vuetify/alerts",

            name: "Vuetify Alerts",
            component: VuetifyAlerts
          }
        ]
      },
      {
        path: "add",
        component: RequestPiece
      },
      {
        path: "queue",
        component: Queue
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
        component: WebProjects
      },
      {
        path: "technologies",
        component: Technologies
      },
      {
        path: "myprocess",
        component: MyProcess
      }
    ]
  },
  {
    path: "/test",
    name: "Test",
    component: SplitScreen
  },
  {
    path: "/about",
    name: "About Me",
    component: About
  },
  {
    path: "/history",
    name: "History",
    component: Test
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
