export default {
    state: {
        cart: {},
    },
    getters: {
        cart: (state) => { return state.cart; },
    },
    actions: {
        cart(context, cart) { context.commit('cart', cart); },
    },
    mutations: {
        cart(state, cart) { state.cart = cart; },
    }
}