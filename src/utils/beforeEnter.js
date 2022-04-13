import store from '@/store';

export const homeRedirections = (to, from, next) => {
    if (!store.getters.currentUser || !localStorage.getItem('dragnreceive-mobile-token')) { next({ name: 'NotAuth' }); }
    if (store.getters.currentUser && localStorage.getItem('dragnreceive-mobile-token')) { next({ name: 'Auth' }); }
}

export const isLogged = (to, from, next) => {
    if (!store.getters.currentUser || !localStorage.getItem('dragnreceive-mobile-token')) { next({ name: 'NotAuth' }); }
    else { next(); }
}

export const isNotLogged = (to, from, next) => {
    if (store.getters.currentUser && localStorage.getItem('dragnreceive-mobile-token')) { next({ name: 'Auth' }); }
    else { next(); }
}