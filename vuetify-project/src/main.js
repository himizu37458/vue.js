import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import '@mdi/font/css/materialdesignicons.css'; // v-iconを反映
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
