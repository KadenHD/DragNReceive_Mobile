import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './auth.js';
import user from './user.js';
import cart from './cart.js';

const store = new Vuex.Store({
  modules: {
    auth,
    user,
    cart,
  },
  plugins: [createPersistedState()]
});

export default store;