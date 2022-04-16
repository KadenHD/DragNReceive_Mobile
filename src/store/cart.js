import renderAlert from '@/utils/renderAlert.js';

export default {
    state: {
        cart: {
            items: []
        },
    },
    getters: {
        cart: (state) => { return state.cart; },
    },
    actions: {
        cart(context, cart) { context.commit('cart', cart); },
        addToCart(context, cart) {
            let exist = false
            for (let i = 0; i < context.getters.cart.items.length; i++) { // fetch inside the cart items
                if (context.getters.cart.items[i].product.id === cart.product.id) { // if exist
                    exist = true
                    const stock = parseInt(context.getters.cart.items[i].product.stock);
                    const stockedQuantities = parseInt(context.getters.cart.items[i].quantities);
                    const newQuantities = parseInt(cart.quantities);
                    if (stock >= stockedQuantities + newQuantities) { // if stock >= totalQuantities
                        const payload = { i, cart }
                        context.commit("addQuantities", payload)
                        renderAlert("La quantité a bien été modifiée !");
                    } else { // if too much
                        renderAlert("Le stock n'est pas suffisant pour pouvoir ajouter cette quantité au panier !");
                    }
                }
            }
            if (!exist) {
                renderAlert("Le produit a bien été ajouté au panier !");
                context.commit("addItem", cart);
            }
        },
        removeProductCart(context, index) {
            context.commit("removeCartItem", index);
        },
        emptyCart(context) {
            context.commit("cart", { items: [] });
        },
    },
    mutations: {
        cart(state, cart) { state.cart = cart; },
        addItem(state, cart) { state.cart.items.push(cart); },
        addQuantities(state, payload) { // add the new quantities to the scopped items
            const itemsQuant = parseInt(state.cart.items[payload.i].quantities);
            const productQuant = parseInt(payload.cart.quantities);
            const value = itemsQuant + productQuant
            state.cart.items[payload.i].quantities = value.toString()
        },
        removeCartItem(state, index) {
            state.cart.items.splice(index, 1);
        }
    }
}