// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueDraggable from "vue-draggable";
import VueFeatherIcon from "vue-feather-icon";

import App from "./App";

Vue.config.productionTip = false;

Vue.use(VueDraggable);
Vue.use(VueFeatherIcon);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
