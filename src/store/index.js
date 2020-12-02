import Vue from "vue";
import Vuex from "vuex";

import context from "./context";
import tutorials from "@/store/tutorials";
import reviews from "@/store/reviews";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  getters: {},

  mutations: {},

  actions: {},

  modules: {
    context,
    tutorials,
    reviews
  }
});
