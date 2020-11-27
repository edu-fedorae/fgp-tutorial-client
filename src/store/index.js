import Vue from "vue";
import Vuex from "vuex";

import context from "./context";
import tutorials from "./tutorials";
import reviews from "./reviews";
import settings from "./settings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    context,
    tutorials,
    reviews,
    settings
  }
});
