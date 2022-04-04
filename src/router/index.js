import { createRouter, createWebHistory } from '@ionic/vue-router';

import authRouter from "./auth.js";

import { homeRedirections, isLogged } from '@/utils/beforeEnter.js';

const routes = [
  ...authRouter,
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
        path: '/home',
        name: 'Home',
        component: () => import('@/views/HomeTab.vue'),
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'homeRedirections',
    beforeEnter: homeRedirections,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
