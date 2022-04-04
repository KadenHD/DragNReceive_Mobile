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
        ]
    },
];