import axios from 'axios';
import router from '@/router';

import renderAlert from '@/utils/renderAlert.js';

export default {
    state: {
        orders: null,
        order: null,
    },
    getters: {
        orders: (state) => { return state.orders; },
        order: (state) => { return state.order; },
    },
    actions: {
        orders(context, orders) { context.commit('orders', orders); },
        order(context, order) { context.commit('order', order); },
        setOrder(context, id) {
            axios
                .get("orders/" + id)
                .then((response) => {
                    context.commit("order", response.data);
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                    router.push({ name: "Orders" });
                });
        },
        setOrders(context) {
            axios
                .get("orders")
                .then((response) => {
                    context.commit("orders", response.data);
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        },
        cancelOrder(context, data) {
            axios
                .post("orders/cancelOrder", data)
                .then((response) => {
                    context.dispatch("setOrder", data.number);
                    context.dispatch("setOrders");
                    renderAlert(response.data.success);
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        }
    },
    mutations: {
        orders(state, orders) { state.orders = orders; },
        order(state, order) { state.order = order; },
    }
}