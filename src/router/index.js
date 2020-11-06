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
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (dashboard.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/Dashboard/index.vue"
      ),
    children: [
      {
        path: "/dashboard/home",
        name: "Dashboard-Home",
        // route level code-splitting
        // this generates a separate chunk (home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Dashboard/home.vue")
      },
      {
        path: "/dashboard/profile",
        name: "Dashboard-Profile",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "../views/Dashboard/profile.vue"
          )
      },
      {
        path: "/dashboard/settings",
        name: "Dashboard-Settings",
        // route level code-splitting
        // this generates a separate chunk (settings.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "settings" */ "../views/Dashboard/settings.vue"
          )
      },
      {
        path: "/dashboard/tutorials",
        name: "Dashboard-Tutorials",
        // route level code-splitting
        // this generates a separate chunk (tutorials.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "tutorials" */ "../views/Dashboard/tutorials.vue"
          )
      }
    ]
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
