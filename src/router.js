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
      path: "/form",
      name: "form",
      component: () => import("./views/Form.vue"),
    },
    {
      path: "/play",
      name: "play",
      component: () => import("./views/Play.vue"),
    },  
    {
      path: "/status/:_id/:_secu",
      name: "Status",
      component: () => import("./views/Status.vue"),
    },     
    {
      path: "/demo/:_lot",
      name: "play",
      component: () => import("./views/Play.vue"),
    },     
    {
      path: "/done",
      name: "done",
      component: () => import("./views/Done.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue"),
    },    
    {
      path: "/mentions",
      name: "mentions",
      component: () => import("./views/Mentions.vue"),
    },
    {
      path: "/wait",
      name: "waiting",
      component: () => import("./views/Wait.vue"),
    },   
    {
      path: "/finish",
      name: "finish",
      component: () => import("./views/Finish.vue"),
    },
  ],
});

export default router;

/*GET FORM DATA INFOS */
function getData() {
  return axios.get(
    "https://api.lucien.ai/api/formdata/"+consts.GAME_ID
  );
}

router.beforeEach(async (to, from, next) => {

  /*GET FORM DATA INFOS */
  let { data } = await getData();

  if(data.mentionsLegales) window.mentions = data.mentionsLegales
  if(data.contactezNous) window.contact = data.contactezNous
    
  if(data.redirection_after_valid) {
    window.redirection = data.redirection_after_valid
  }

 /* SET GOOGLE ANALYTICS */
  if(data.tracking && localStorage.cookies) {
    if(to.name == undefined) {  var name = 'home' } else {  var name = to.name }
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', data.tracking, {
      'send_page_view': false
    });
    gtag('event', 'page_view', {
      page_title: name,
      page_location: window.location.href,
      page_path: to.path,
    })
  }
  

  
  /* CHECK ROUTES */
  var uri = window.location.href;
  var staging_heroku = uri.match(/heroku/g);  
  var staging_netlify = uri.match(/netlify/g); // CHECK NETLIFY SD
  var local = uri.match(/localhost/g); // CHECK LOCALHOST

  if (local == null && staging_netlify == null && staging_heroku == null) {

    console.log("PROD");

    /* FORCE HTTPS */
    if (location.protocol !== "https:") {
      window.location =
        "https://" +
        window.location.hostname +
        window.location.pathname +
        window.location.search;
    }

    /* CALCUL DE LA PERIODE */
    var dateBegin = new Date(data.date_debut);
    var dateOff = new Date(data.date_fin);
    var today = new Date();

    if (dateOff > today && dateBegin > today && to.path !== "/wait") {
      // OP EN ATTENTE
      return next("/wait");
    } else if (dateOff < today && to.path !== "/finish") {
      // OP TERMINEE
      return next("/finish");
    } else {
      // OP ENCOURS
      next();
    }
  } else {
    // URL DE DEV
    console.log("DEV");
    next();
  }
  
});
