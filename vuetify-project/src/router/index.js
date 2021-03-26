import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  // for-enterprise
  {
    path: "/enterprise",
    name: "Enterpriset",
    component: () =>
      import("../views/Enterprise.vue"),
  },
  // support
  {
    path: "/consulting-and-support",
    name: "ConsultingAndSupport",
    component: () =>
      import("../views/ConsultingAndSupport.vue"),
  },
  {
    path: "/discord-community",
    name: "DiscordCommunity",
    component: () =>
      import("../views/DiscordCommunity.vue"),
  },
  // navigation-list
  {
    path: "/quick-start",
    name: "QuickStart",
    component: () =>
      import("../views/QuickStart.vue"),
  },
  {
    path: "/pre-made-layouts",
    name: "PreMadeLayouts",
    component: () =>
      import("../views/PreMadeLayouts.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
