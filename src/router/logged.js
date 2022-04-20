import { isLogged } from '@/utils/beforeEnter.js';
import store from '@/store';

import profileRouter from "./profile.js";
import orderRouter from './order.js';
import shopRouter from "./shop.js";
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
            ...profileRouter,
            ...shopRouter,
            ...orderRouter,
            {
                path: 'cart',
                name: 'Cart',
                component: () => import('@/views/cart/CartTab.vue'),
                beforeEnter: function () {
                    store.dispatch("setCart");
                }
            },
            ...ticketRouter,
        ]
    },
];