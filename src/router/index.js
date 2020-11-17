import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Error from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about-us",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard/index.vue"),

    children: [
      {
        path: "/dashboard/home",
        name: "Dashboard-Home",
        component: () => import("../views/Dashboard/home.vue")
      },
      {
        path: "/dashboard/profile",
        name: "Dashboard-Profile",
        component: () => import("../views/Dashboard/profile.vue")
      },
      {
        path: "/dashboard/settings",
        name: "Dashboard-Settings",
        component: () => import("../views/Dashboard/settings.vue")
      },
      {
        path: "/dashboard/tutorials",
        name: "Dashboard-Tutorials",
        component: () => import("../views/Dashboard/tutorials/index.vue")
      },
      {
        path: "/dashboard/tutorials/:tutorial",
        name: "Dashboard-Tutorial",
        component: () => import("../views/Dashboard/tutorials/_tutorial")
      }
    ]
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test")
  },
  {
    path: "*",
    components: Error,
    redirect: "/Error"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
