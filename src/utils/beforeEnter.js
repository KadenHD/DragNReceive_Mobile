import store from '@/store';

export const homeRedirections = (to, from, next) => {
    if (store.getters.currentUser || localStorage.getItem('token')) { next({ name: 'Home' }); }
    else { next({ name: 'NotAuth' }); }
}

export const isLogged = (to, from, next) => {
    if (!store.getters.currentUser || !localStorage.getItem('token')) { next({ name: 'homeRedirections' }); }
    else { next(); }
}

export const isNotLogged = (to, from, next) => {
    if (store.getters.currentUser || localStorage.getItem('token')) { next({ name: 'homeRedirections' }); }
    else { next(); }
}