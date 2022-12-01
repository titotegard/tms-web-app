import Vue from 'vue'
import Vuex from 'vuex'
import utils from "@/common/utils.js";
import { MENU } from "@/common/constants/menu";


Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {},
  state: {
    menus: MENU,
    isChildOpen: [],
    rules: {
      required: (value) => !!value || "Field is required",
      requiredObject: (value) => Boolean(Object.keys(value || {})[0]) || "Field is required",
      requiredBoolean: (value) => value !== undefined || "Field is required",
      numberOnly: (value) => Number.isInteger(Number(value)) || "Number Only",
      minNumber0: (value) => value >= 0 || "Must be >= 0",
      maxNumber4: (value) => value < 5 || "Must be <= 4",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      }
    },
  },
  mutations: {
    SET_IS_OPENS_BY_MENU(state, { menu, value }) {
      if (menu) {
        state.isChildOpen[menu] = value;
      }
    },
    CLOSE_ALL_CHILD(state) {
      let temp = [];
      for (const menu in state.menus) {
        temp[menu] = false;
      }
      state.isChildOpen = temp;
    },
  },
  actions: {
    openChildMenu: ({ commit }, { menu, value }) => {
      commit("SET_IS_OPENS_BY_MENU", { menu, value });
    },
    closeAllChildMenu: ({ commit }) => {
      commit("CLOSE_ALL_CHILD");
    },
  },
  getters: {}
})

export default store
