import Vue from "vue";
import Vuex from "vuex";
import { fetchShowByName, fetchShowById } from "@/api";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    serials: [],
    serial: null,
    searchText: ""
  },
  mutations: {
    setSerials(state, serials) {
      state.serials = serials;
    },
    setSerial(state, serial) {
      state.serial = serial;
    },
    clearSerial(state) {
      state.serial = null;
    },
    setSearchText(state, searchText) {
      state.searchText = searchText;
    }
  },
  actions: {
    getSerials({ commit }, serialName) {
      fetchShowByName(serialName).then(result => {
        commit("setSerials", result);
      });
    },
    getSerial({ commit }, serialId) {
      fetchShowById(serialId).then(result => {
        commit("setSerial", result);
      });
    }
  },
  strict: debug
});
