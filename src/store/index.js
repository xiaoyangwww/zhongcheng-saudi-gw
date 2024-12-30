import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    locale: 'zh_CN' // 默认语言
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale; // 更新语言
    }
  },
  actions: {
    changeLocale({ commit }, locale) {
      commit('setLocale', locale);
    }
  }
});

export default store;
