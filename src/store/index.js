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
    isOpens: [],
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
        state.isOpens[menu] = value;
      }
    },
    SET_ALL_IS_OPENS(state) {
      let isOpens = [];
      for (const menu in state.menus) {
        isOpens[menu] = false;
      }
      console.log("isOpens", isOpens);
      // state.isOpens = isOpens;
    },
  },
  actions: {
    setIsOpensByMenu: ({ commit }, { menu, value }) => {
      commit("SET_IS_OPENS_BY_MENU", { menu, value });
    },
    setAllIsOpens: ({ commit }) => {
      commit("SET_ALL_IS_OPENS");
    },
  },
  getters: {}
})

export default store
