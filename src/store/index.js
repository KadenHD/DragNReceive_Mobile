import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './auth.js';
import cart from './cart.js';

const store = new Vuex.Store({
  modules: {
    auth,
    cart,
  },
  plugins: [createPersistedState()]
});

export default store;