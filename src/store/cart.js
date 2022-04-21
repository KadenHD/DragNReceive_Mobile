import renderAlert from '@/utils/renderAlert.js';
import axios from 'axios';

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
        setCart(context) {
            for (let i = 0; i < context.state.cart.items.length; i++) {
                axios
                    .get("products/" + context.state.cart.items[i].product.id)
                    .then((response) => {
                        if (response.data.stock < context.state.cart.items[i].quantities) {
                            context.dispatch("removeProductCart", i);
                        } else {
                            context.state.cart.items[i].product = response.data
                        }
                    })
                    .catch(() => {
                        context.dispatch("removeProductCart", i);
                    });
            }
        },
        addToCart(context, payload) {
            let exist = false
            axios
                .get("products/" + payload.id)
                .then((response) => {
                    const product = response.data;
                    const stock = parseInt(response.data.stock);
                    const cart = {
                        quantities: payload.quantities,
                        product: product
                    }
                    for (let i = 0; i < context.getters.cart.items.length; i++) { // fetch inside the cart items
                        if (context.getters.cart.items[i].product.id === payload.id) { // if exist
                            exist = true
                            const stockedQuantities = parseInt(context.getters.cart.items[i].quantities);
                            const newQuantities = parseInt(payload.quantities);
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
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                })

        },
        removeProductCart(context, index) {
            context.commit("removeCartItem", index);
        },
        emptyCart(context) {
            context.commit("cart", { items: [] });
        },
        makeOrder(context, myCart) {
            let orders = [];
            for (let i = 0; i < myCart.length; i++) {
                const order = {
                    id: myCart[i].product.id,
                    quantities: parseInt(myCart[i].quantities),
                };
                orders.push(order);
            }
            axios
                .post("orders/", { orders: orders })
                .then((response) => {
                    renderAlert(response.data.success);
                    context.dispatch("emptyCart")
                    context.dispatch("setOrders");
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                })
        }
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