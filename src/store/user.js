import axios from 'axios'
import router from '@/router';
import store from '@/store';

import renderAlert from '@/utils/renderAlert.js';

export default {
    actions: {
        profileChangePhoto(context, file) {
            const formData = new FormData();
            formData.append("photo", file);
            axios
                .put("users/" + store.getters.currentUser.id, formData, {
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
                    renderAlert(error.response.data.error);
                });
        },
        profileChangePassword(context, data) {
            axios
                .put("users/" + store.getters.currentUser.id, data)
                .then((response) => {
                    renderAlert(response.data.success);
                    context.dispatch("setCurrentUser");
                    router.push({ name: 'Profile' });
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        },
        deleteAccount(context) {
            axios
                .delete("users/" + store.getters.currentUser.id)
                .then((response) => {
                    renderAlert(response.data.success);
                    context.dispatch("logout");
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        }
    },
}