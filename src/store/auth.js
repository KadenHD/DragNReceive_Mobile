import axios from 'axios'
import router from '@/router';

import renderAlert from '@/utils/renderAlert.js';

export default {
    state: {
        currentUser: null,
    },
    getters: {
        currentUser: (state) => { return state.currentUser; },
    },
    actions: {
        currentUser(context, currentUser) { context.commit('currentUser', currentUser); },
        setCurrentUser(context) {
            if (localStorage.getItem('dragnreceive-mobile-token')) {
                axios.get("currentUser")
                    .then((response) => {
                        context.dispatch("currentUser", response.data.currentUser);
                        if (!response.data.currentUser) {
                            localStorage.removeItem("dragnreceive-mobile-token");
                        }
                    })
                    .catch(() => {
                        context.dispatch("logout");
                    });
            }
        },
        login(context, data) {
            axios
                .post("loginClient", data)
                .then((response) => {
                    localStorage.setItem("dragnreceive-mobile-token", response.data.token);
                    context.dispatch("currentUser", response.data.user);
                    router.go({ name: 'homeRedirections' });
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        },
        register(context, data) {
            axios
                .post("register", data)
                .then((response) => {
                    renderAlert(response.data.success);
                    router.push({ name: 'Login' });
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        },
        logout(context) {
            context.dispatch('currentUser', null);
            localStorage.removeItem("dragnreceive-mobile-token");
            router.push({ name: "homeRedirections" });
        },
        reset(context, data) {
            axios
                .post("forgotClient", data)
                .then((response) => {
                    renderAlert(response.data.success);
                    router.push({ name: "ResetCode", params: { userId: response.data.userId, id: response.data.id } });
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        },
        resetCode(context, data) {
            axios
                .post("resetClient/" + data.userId + "/" + data.id, data)
                .then((response) => {
                    renderAlert(response.data.success);
                    router.push({ name: "Login" });
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                    router.push({ name: "Reset" });
                });
        },
    },
    mutations: {
        currentUser(state, currentUser) { state.currentUser = currentUser; },
    }
}