import axios from 'axios';
import router from '@/router';

import renderAlert from '@/utils/renderAlert.js';

export default {
    state: {
        products: null,
        product: null,
    },
    getters: {
        products: (state) => { return state.products; },
        product: (state) => { return state.product; },
    },
    actions: {
        products(context, products) { context.commit('products', products); },
        product(context, product) { context.commit('product', product); },
        setProduct(context, id) {
            axios
                .get("products/" + id)
                .then((response) => {
                    context.commit("product", response.data);
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                    router.push({ name: "Home" });
                });
        },
        setProducts(context) {
            axios
                .get("products")
                .then((response) => {
                    context.commit("products", response.data);
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        },
    },
    mutations: {
        products(state, products) { state.products = products; },
        product(state, product) { state.product = product; },
    }
}