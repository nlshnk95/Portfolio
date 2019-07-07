import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// material ui framework
import { MdButton } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
// Default css
import "./assets/css/style.scss";

Vue.use(MdButton);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
