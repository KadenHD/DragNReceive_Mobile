import { isNotLogged } from '@/utils/beforeEnter.js';

export default [
    {
        path: '/auth',
        component: () => import('@/views/auth/AuthTabs.vue'),
        beforeEnter: isNotLogged,
        children: [
            {
                path: '',
                name: 'NotAuth',
                redirect: '/auth/login'
            },
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/auth/LoginTab.vue')
            },
            {
                path: 'register',
                name: 'Register',
                component: () => import('@/views/auth/RegisterTab.vue')
            },
            {
                path: 'reset',
                name: 'Reset',
                component: () => import('@/views/auth/ResetTab.vue'),
            },
            {
                path: 'reset/:userId/:id',
                name: 'ResetCode',
                component: () => import('@/views/auth/ResetCode.vue')
            }
        ]
    },
]