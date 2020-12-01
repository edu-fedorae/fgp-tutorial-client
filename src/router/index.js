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
      }, {
        path: "/dashboard/chat",
        name: "Dashboard-Chat",
        component: () => import("../views/Dashboard/chat/index.vue")
      },{
        path: "/dashboard/chat/inbox",
        name: "Dashboard-Chat-Inbox",
        component: () => import("../views/Dashboard/chat/inbox.vue")
      }, {
        path: "/dashboard/tutorials/:tutorial",
        name: "Dashboard-Tutorial",
        component: () => import("../views/Dashboard/tutorials/_tutorial")
      }
    ]
  },{
    path: "/admin/dashboard",
    name: "Admin-Dashboard",
    component: () => import("../views/Admin/Dashboard/index.vue"),

    children: [
      {
        path: "/admin/dashboard/home",
        name: "Admin-Dashboard-Home",
        component: () => import("../views/Admin/Dashboard/home.vue")
      },
      {
        path: "/admin/dashboard/profile",
        name: "Admin-Dashboard-Profile",
        component: () => import("../views/Admin/Dashboard/profile.vue")
      },
      {
        path: "/admin/dashboard/settings",
        name: "Admin-Dashboard-Settings",
        component: () => import("../views/Admin/Dashboard/settings.vue")
      },
      {
        path: "/admin/dashboard/tutorials",
        name: "Admin-Dashboard-Tutorials",
        component: () => import("../views/Admin/Dashboard/tutorials/index.vue")
      }, {
        path: "/admin/dashboard/chat",
        name: "Admin-Dashboard-Chat",
        component: () => import("../views/Admin/Dashboard/chat/index.vue")
      },{
        path: "/admin/dashboard/chat/inbox",
        name: "Admin-Dashboard-Chat-Inbox",
        component: () => import("../views/Admin/Dashboard/chat/inbox.vue")
      }, {
        path: "/admin/dashboard/tutorials/:tutorial",
        name: "Admin-Dashboard-Tutorial",
        component: () => import("../views/Admin/Dashboard/tutorials/_tutorial")
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
