import { isLogged } from '@/utils/beforeEnter.js';

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
            {
                path: 'profile',
                name: 'Profile',
                component: () => import('@/views/ProfileTab.vue'),
            },
            {
                path: 'Cart',
                name: 'Cart',
                component: () => import('@/views/CartTab.vue'),
            },
            {
                path: 'Tickets',
                name: 'Tickets',
                component: () => import('@/views/TicketsTab.vue'),
            },
        ]
    },
];