import Vue from "vue";
import Vuex from "vuex";

import context from "./context";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [
      {
        name: "Jane Doe",
        email: "jane@tutorion.com",
        password: "password",
        role: 0
      }
    ]
  },
  getters: {
    user: state => state.user
  },
  mutations: {},
  actions: {},
  modules: {
    context
  }
});
