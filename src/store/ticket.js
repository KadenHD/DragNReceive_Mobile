import axios from 'axios';
import router from '@/router';

import renderAlert from '@/utils/renderAlert.js';

export default {
    state: {
        tickets: null,
        ticket: null,
    },
    getters: {
        tickets: (state) => { return state.tickets; },
        ticket: (state) => { return state.ticket; },
    },
    actions: {
        tickets(context, tickets) { context.commit('tickets', tickets); },
        ticket(context, ticket) { context.commit('ticket', ticket); },
        setTicket(context, id) {
            axios
                .get("tickets/" + id)
                .then((response) => {
                    context.commit("ticket", response.data);
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                    router.push({ name: "Ticket" });
                });
        },
        setTickets(context) {
            axios
                .get("tickets")
                .then((response) => {
                    context.commit("tickets", response.data);
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        },
        createTicket(context, data) {
            axios
                .post("tickets", data)
                .then((response) => {
                    renderAlert(response.data.success);
                    context.dispatch("setTickets");
                    router.push({ name: "Tickets" });
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        },
        deleteTicket(context, id) {
            axios
                .put("tickets/" + id)
                .then((response) => {
                    renderAlert(response.data.success);
                    context.dispatch("setTickets");
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        },
        createMessage(context, data) {
            axios
                .post("messages", data)
                .then((response) => {
                    renderAlert(response.data.success);
                    context.dispatch("setTicket", data.ticketId);
                })
                .catch((error) => {
                    renderAlert(error.response.data.error);
                });
        }
    },
    mutations: {
        tickets(state, tickets) { state.tickets = tickets; },
        ticket(state, ticket) { state.ticket = ticket; },
    }
}