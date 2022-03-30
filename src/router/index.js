import { createRouter, createWebHistory } from '@ionic/vue-router';

import authRouter from "./auth.js";

import { homeRedirections, isLogged } from '@/utils/beforeEnter';

const routes = [
  ...authRouter,
  {
    path: '/',
    name: 'homeRedirections',
    beforeEnter: homeRedirections
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    beforeEnter: isLogged
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'homeRedirections' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
