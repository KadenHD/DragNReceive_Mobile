export default [
    {
        path: 'tickets',
        name: 'Tickets',
        component: () => import('@/views/ticket/TicketsTab.vue'),
    },
    {
        path: 'tickets/create',
        name: 'TicketCreate',
        component: () => import('@/views/ticket/TicketCreate.vue'),
    },
    {
        path: 'tickets/:id',
        name: 'Ticket',
        component: () => import('@/views/ticket/Ticket.vue'),
    }
]