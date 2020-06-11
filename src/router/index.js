import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/shows/:id",
    name: "SerialPage",
    component: () => import("../pages/SerialPage.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
