import axios from "axios";

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
        const data = JSON.stringify(res.data);
        commit("setTutorials", data);
        console.log("Tutorials Received Successful.", data);
      });
    }
  }
};

export default store;
