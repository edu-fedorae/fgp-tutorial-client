import Vue from "vue";
import axios from "axios";
import router from "@/router";

const store = {
  namespaced: true,

  state: {
   user: {},
    jwtToken: null
  },

  getters: {
    isAuthenticated: state => state.user.name && state.user.email,
    user: state => state.user
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setJwtToken(state, jwtToken) {
      state.jwtToken = jwtToken;
      // WARNING: storing JWT tokens in local storage or anywhere accessible by JavaScript is a security issue!
      // This is just for demonstrative purposes on how SignalR can be authenticated using JWT
      // Store token security on a real application
      // For example, a web app can store them in cookies not accessible to JavaScript, while a native app will need to use the device secure storage
      if (jwtToken) window.localStorage.setItem("jwtToken", jwtToken);
      else window.localStorage.removeItem("jwtToken");
    }
  },

  actions: {
    // Used during startup to reload the user from the server
    restoreContext({ commit, getters, state }) {
      const jwtToken = window.localStorage.getItem("jwtToken");
      if (jwtToken) commit("setJwtToken", jwtToken);

      return axios.get("account/context").then(res => {
        commit("setUser", res.data);
        if (getters.isAuthenticated)
          return Vue.prototype.startSignalR(state.jwtToken);
      });
    },
    // Login methods. Either use cookie-based auth or jwt-based auth
    login({ state, dispatch }, { authMethod, credentials }) {
      const loginAction =
        authMethod === "jwt"
          ? dispatch("loginToken", credentials)
          : dispatch("loginCookies", credentials);

      return loginAction.then(
        () => Vue.prototype.startSignalR(state.jwtToken),
        state.jwtToken ? router.push({ name: "Dashboard-Home" }) : console.log("Login Failed")
      );
    },
    loginCookies({ commit }, credentials) {
      return axios.post("account/login", credentials).then(res => {
        commit("setUser", res.data);
      });
    },
    loginToken({ commit }, credentials) {
      return axios.post("account/authenticate", credentials).then(res => {
        const user = res.data;
        const jwtToken = res.data.token;
        delete user.token;
        commit("setUser", user);
        commit("setJwtToken", jwtToken);
      });
    },
    // Register
    register({ commit }, user) {
      return axios.post("account/register", user).then(res => {
        const user = res.data;
        const jwtToken = res.data.token;
        delete user.token;
        commit("setUser", user);
        commit("setJwtToken", jwtToken);
        alert("Registration Successful.")
      });
    },
    // Logout. (With JWT the request isnt strictly necessary unless the server needs some cleanup/auditing)
    logout({ commit, state }) {
      const logoutAction = state.jwtToken
        ? Promise.resolve()
        : axios.post("account/logout");

      return logoutAction.then(() => {
        commit("setUser", {});
        commit("setJwtToken", null);
        return !state.jwtToken ? router.push({ name: "Home" }) : console.log("Login Failed")
      });
    }
  }
};

export default store;
