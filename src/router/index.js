import VanNgocApp from "@/views/VanNgocApp.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomeView2 from "../views/HomeView2.vue";
import UserProfile from "@/components/vanngoc/UserProfile.vue";
import UserPosts from "@/components/vanngoc/UserPosts.vue";
import LoginVN from "@/components/vanngoc/LoginVN.vue";
import RegisterVNVue from "@/components/vanngoc/RegisterVN.vue";
import HomeView3 from "../views/HomeView3.vue";
import HomeNews from "../views/HomeNews.vue";





const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "profile",
        component: UserProfile,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: "posts",
        component: UserPosts,
      },
    ],
  },
  {
    path: "/van-ngoc",
    name: "van-ngoc",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VanNgocApp.vue"),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "profile",
        component: UserProfile,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: "posts",
        component: UserPosts,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: "login",
        component: LoginVN,
      },
      {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: "register",
        component: RegisterVNVue,
      },
    ],
  },
  {
    path: "/tan-pham",
    name: "tanpham",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    component: HomeView2,
  },
  {
    path: "/tan-form",
    name: "tanform",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView3,
  },
  {
    path: "/news",
    name: "news",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeNews,
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
