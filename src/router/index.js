import { createRouter, createWebHistory } from '@ionic/vue-router';

import { homeRedirections } from '@/utils/beforeEnter.js';

import notLoggedRouter from "./notLogged.js";
import loggedRouter from "./logged.js";

const routes = [
  ...loggedRouter,
  ...notLoggedRouter,
  {
    path: '/',
    name: 'homeRedirections',
    beforeEnter: homeRedirections
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
