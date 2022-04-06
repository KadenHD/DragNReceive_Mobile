export default [
    {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/profile/ProfileTab.vue'),
    },
    {
        path: 'profile/params',
        name: 'ProfileParameters',
        component: () => import('@/views/profile/ProfileParameters.vue'),
    },
];