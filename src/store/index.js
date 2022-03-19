import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {

  },
  getters: { /* return to mapGetters */

  },
  actions: { /* from dispatch */

  },
  mutations: { /* from commit */

  },
  modules: {

  },
  plugins: [createPersistedState()]
});

export default store;