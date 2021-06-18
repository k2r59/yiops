import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import axios from "axios";
import Lucien from "lucien-form-builder";

var consts = require("./config");

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "*", component: Home },   
    {
      path: "/mentions",
      name: "mentions",
      component: () => import("./views/Mentions.vue"),
    }
  ],
});

export default router;