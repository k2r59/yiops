import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueSweetalert2 from "vue-sweetalert2";
Vue.use(VueSweetalert2);

import FormBuilder from "lucien-form-builder";
Vue.use(FormBuilder);

import "./scss/main.scss";

Vue.config.productionTip = false;

console.log("process.env.NODE_ENV", process.env.NODE_ENV, process.env);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
