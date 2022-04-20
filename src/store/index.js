import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './auth.js';
import cart from './cart.js';
import order from './order.js';
import shop from './shop.js';
import ticket from './ticket.js';
import user from './user.js';

const store = new Vuex.Store({
  modules: {
    auth,
    cart,
    order,
    shop,
    ticket,
    user,
  },
  plugins: [createPersistedState()]
});

export default store;