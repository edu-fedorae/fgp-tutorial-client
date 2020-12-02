// import Vue from "vue";
import axios from "axios";
// import router from "@/router";

const store = {
  namespaced: true,

  state: {
    all: {}
  },

  getters: {
    allTutorials: state => state.all
  },

  mutations: {
    setTutorials(state, all) {
      state.all = all;
    }
  },

  actions: {
    // Tutorials
    getTutorials({ commit }) {
      return axios.get("tutorial").then(res => {
        const data = res;
        commit("setTutorial", data);
        console.log("Tutorials Received Successful.");
      });
    }
  }
};

export default store;
