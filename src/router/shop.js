export default [
    {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/shop/HomeTab.vue'),
    },
    {
        path: 'shop/:id',
        name: 'Shop',
        component: () => import('@/views/shop/Shop.vue'),
    },
    {
        path: 'product/:id',
        name: 'Product',
        component: () => import('@/views/shop/Product.vue'),
    },
]
