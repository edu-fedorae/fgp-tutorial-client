import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

// By default the project simulates the client application being hosted independently from the server
// These lines setup axios so all requests are sent to the backend server
// However, you can comment them and the site will behave as if both client and server were hosted in localhost:8080
// due to the proxy dev server configured in vue.config.js
axios.defaults.baseURL = "http://localhost:7431"; // same as the Url the server listens to
axios.defaults.withCredentials = true;

// Include the Authentication header when using JWT authentication
axios.interceptors.request.use(request => {
  if (store.state.context.jwtToken)
    request.headers["Authorization"] = "Bearer " + store.state.context.jwtToken;
  return request;
});

// Setup axios as the Vue default $http library
// Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
