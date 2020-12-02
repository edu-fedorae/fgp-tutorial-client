// import Vue from "vue";
import axios from "axios";
// import router from "@/router";

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
        commit("setReview", data);
        console.log("Reviews Received Successful.");
      });
    }
  }
};

export default store;
