import { isLogged } from '@/utils/beforeEnter.js';

import profileRouter from "./profile.js";
import ticketRouter from './ticket.js';

export default [
    {
        path: '/client',
        component: () => import('@/views/MainTabs.vue'),
        beforeEnter: isLogged,
        children: [
            {
                path: '',
                name: 'Auth',
                redirect: '/client/home'
            },
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/HomeTab.vue'),
            },
            ...profileRouter,
            {
                path: 'Cart',
                name: 'Cart',
                component: () => import('@/views/CartTab.vue'),
            },
            ...ticketRouter,
        ]
    },
];