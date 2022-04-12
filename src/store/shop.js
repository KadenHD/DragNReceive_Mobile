import axios from 'axios';
import router from '@/router';

import renderAlert from '@/utils/renderAlert.js';

export default {
    state: {
        shops: null,
        shop: null,
        products: null,
        product: null,
    },
    getters: {
        shops: (state) => { return state.shops; },
        shop: (state) => { return state.shop; },
        products: (state) => { return state.products; },
        product: (state) => { return state.product; },
    },
    actions: {
        shops(context, shops) { context.commit('shops', shops); },
        shop(context, shop) { context.commit('shop', shop); },
        products(context, products) { context.commit('products', products); },
        product(context, product) { context.commit('product', product); },
        setShop(context, id) {
            axios
                .get("shops/" + id)
                .then((response) => {
                    context.commit("shop", response.data);
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                    router.push({ name: "Home" });
                });
        },
        setShops(context) {
            axios
                .get("shops")
                .then((response) => {
                    context.commit("shops", response.data);
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        },
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
        shops(state, shops) { state.shops = shops; },
        shop(state, shop) { state.shop = shop; },
        products(state, products) { state.products = products; },
        product(state, product) { state.product = product; },
    }
}