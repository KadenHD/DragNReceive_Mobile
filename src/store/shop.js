import axios from 'axios';
import router from '@/router';

import renderAlert from '@/utils/renderAlert.js';

export default {
    state: {
        shops: null,
        shop: null,
    },
    getters: {
        shops: (state) => { return state.shops; },
        shop: (state) => { return state.shop; },
    },
    actions: {
        shops(context, shops) { context.commit('shops', shops); },
        shop(context, shop) { context.commit('shop', shop); },
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
    },
    mutations: {
        shops(state, shops) { state.shops = shops; },
        shop(state, shop) { state.shop = shop; },
    }
}