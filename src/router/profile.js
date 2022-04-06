export default [
    {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/profile/ProfileTab.vue'),
    },
    {
        path: 'profile/params',
        name: 'ProfileParameters',
        component: () => import('@/views/profile/Parameters.vue'),
    },
    {
        path: 'profile/params/photo',
        name: 'ProfilePhotoChange',
        component: () => import('@/views/profile/PhotoChange.vue'),
    },
    {
        path: 'profile/params/password',
        name: 'ProfilePasswordChange',
        component: () => import('@/views/profile/PasswordChange.vue'),
    },
];