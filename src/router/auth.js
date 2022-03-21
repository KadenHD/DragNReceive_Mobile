import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';

import { isNotLogged } from '@/utils/beforeEnter';

export default [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: isNotLogged
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter: isNotLogged
    },
]