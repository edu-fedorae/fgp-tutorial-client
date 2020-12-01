import Vue from "vue";
import Vuex from "vuex";

import context from "./context";
import reviews from "./reviews";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tutorials: {},
  },

  getters: {
    allTutorials: state => state.tutorials
  },

  mutations: {
    setTutorials(state, tutorials) {
      state.tutorials = tutorials;
    },
  },

  actions: {
    // Tutorials
    getTutorials({ commit }) {
      return axios.get("tutorial").then(res => {
        const data = res;
        commit("setTutorial", data);
        console.log("Tutorials Received Successful.");
      });
    },
  },

  modules: {
    context,
    reviews,
  }
});
