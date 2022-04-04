import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './auth.js';

const store = new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [createPersistedState()]
});

export default store;