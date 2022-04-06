import axios from 'axios'
import router from '@/router';
import store from '@/store';

import renderAlert from '@/utils/renderAlert.js';

export default {
    state: {},
    getters: {},
    actions: {
        profileChangePhoto(context, file) {
            const userId = store.getters.currentUser.id;
            const formData = new FormData();
            formData.append("photo", file);
            axios
                .put("users/" + userId, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    renderAlert(response.data.success);
                    context.dispatch("setCurrentUser");
                    router.push({ name: 'Profile' });
                })
                .catch((error) => {
                    renderAlert("alertError", error.response.data.error);
                });
        },
    },
    mutations: {}
}