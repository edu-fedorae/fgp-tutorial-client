import Vue from "vue";
import store from "vuex";

Vue.use(store);

export default function({ store, redirect }) {
  if ((store.getters["context/isAuthenticated"] = false)) {
    return redirect("/");
  }
}
