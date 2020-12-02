import axios from "axios";

const store = {
  namespaced: true,

  state: {
    all: {}
  },

  getters: {
    allReviews: state => state.all
  },

  mutations: {
    setReviews(state, all) {
      state.all = all;
    }
  },

  actions: {
    // Reviews
    getReviews({ commit }) {
      return axios.get("review").then(res => {
        const data = res.data;
        commit("setReviews", data);
        console.log("Reviews Received Successful.");
      });
    }
  }
};

export default store;
